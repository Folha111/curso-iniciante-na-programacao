import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useModules } from '../context/ModulesContext'
import { useProgress } from '../context/ProgressContext'
import './Admin.css'

// ── Aba Visão Geral ──────────────────────────────────────────────
function TabOverview({ modules, users }) {
  const totalTasks = modules.reduce((acc, m) => acc + m.tasks.length, 0)
  const alunos = users.filter((u) => u.role === 'aluno')
  const admins = users.filter((u) => u.role === 'admin')

  return (
    <>
      <div className="adm__stats">
        <div className="adm__stat">
          <p className="adm__stat-label">Módulos</p>
          <p className="adm__stat-value">{modules.length}</p>
        </div>
        <div className="adm__stat">
          <p className="adm__stat-label">Total de tarefas</p>
          <p className="adm__stat-value">{totalTasks}</p>
        </div>
        <div className="adm__stat">
          <p className="adm__stat-label">Alunos cadastrados</p>
          <p className="adm__stat-value">{alunos.length}</p>
        </div>
        <div className="adm__stat">
          <p className="adm__stat-label">Administradores</p>
          <p className="adm__stat-value">{admins.length}</p>
        </div>
      </div>

      <section className="adm__section">
        <h2 className="adm__section-title">Módulos do curso</h2>
        <div className="adm__table-wrap">
          <table className="adm__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Tarefas</th>
                <th>Quiz</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod) => {
                const quizCount = mod.tasks.filter((t) => t.type === 'quiz').length
                const codeCount = mod.tasks.filter((t) => t.type === 'code').length
                return (
                  <tr key={mod.id}>
                    <td>
                      <span className="adm__mod-num" style={{ background: mod.color }}>
                        {mod.number}
                      </span>
                    </td>
                    <td className="adm__mod-title">{mod.title}</td>
                    <td>{mod.tasks.length}</td>
                    <td>{quizCount}</td>
                    <td>{codeCount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="adm__section">
        <h2 className="adm__section-title">Usuários cadastrados</h2>
        <div className="adm__table-wrap">
          <table className="adm__table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td>
                    <div className="adm__user-name">
                      <span className="adm__avatar">{u.name[0]}</span>
                      {u.name}
                    </div>
                  </td>
                  <td className="adm__user-email">{u.email}</td>
                  <td>
                    <span className={`adm__role adm__role--${u.role}`}>
                      {u.role === 'admin' ? 'Administrador' : 'Aluno'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="adm__note">
          * O progresso individual de cada aluno fica salvo no dispositivo do próprio aluno.
        </p>
      </section>
    </>
  )
}

// ── Aba Módulos ──────────────────────────────────────────────────
function QuizForm({ onSave, onCancel }) {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [correct, setCorrect] = useState(0)
  const [explanation, setExplanation] = useState('')

  function handleOptionChange(i, val) {
    const next = [...options]
    next[i] = val
    setOptions(next)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!question.trim() || options.some((o) => !o.trim())) return
    onSave({
      id: 'extra-task-' + Date.now(),
      type: 'quiz',
      question,
      options,
      correct: Number(correct),
      explanation,
    })
  }

  return (
    <form className="adm__quiz-form" onSubmit={handleSubmit}>
      <div className="adm__form-row">
        <label className="adm__form-label">Pergunta</label>
        <input className="adm__input" value={question} onChange={(e) => setQuestion(e.target.value)} required />
      </div>
      {options.map((opt, i) => (
        <div className="adm__form-row" key={i}>
          <label className="adm__form-label">Opção {i + 1}</label>
          <input className="adm__input" value={opt} onChange={(e) => handleOptionChange(i, e.target.value)} required />
        </div>
      ))}
      <div className="adm__form-row">
        <label className="adm__form-label">Correta (0-3)</label>
        <input
          className="adm__input adm__input--small"
          type="number"
          min="0"
          max="3"
          value={correct}
          onChange={(e) => setCorrect(e.target.value)}
        />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Explicação</label>
        <textarea className="adm__textarea" value={explanation} onChange={(e) => setExplanation(e.target.value)} rows={3} />
      </div>
      <div className="adm__form-actions">
        <button type="submit" className="adm__btn adm__btn--primary">Adicionar Quiz</button>
        <button type="button" className="adm__btn adm__btn--ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

function ModuleEditForm({ mod, onSave, onCancel }) {
  const [fields, setFields] = useState({
    number: mod.number || '',
    title: mod.title || '',
    description: mod.description || '',
    color: mod.color || '#3b82f6',
    context: mod.context || '',
  })

  function handleChange(key, val) {
    setFields((prev) => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave(fields)
  }

  return (
    <form className="adm__edit-form" onSubmit={handleSubmit}>
      <div className="adm__form-row">
        <label className="adm__form-label">Número</label>
        <input className="adm__input adm__input--small" value={fields.number} onChange={(e) => handleChange('number', e.target.value)} />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Título</label>
        <input className="adm__input" value={fields.title} onChange={(e) => handleChange('title', e.target.value)} required />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Descrição</label>
        <input className="adm__input" value={fields.description} onChange={(e) => handleChange('description', e.target.value)} />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Cor</label>
        <input type="color" className="adm__color-input" value={fields.color} onChange={(e) => handleChange('color', e.target.value)} />
      </div>
      <div className="adm__form-row adm__form-row--col">
        <label className="adm__form-label">Conteúdo (context)</label>
        <textarea className="adm__textarea adm__textarea--large" value={fields.context} onChange={(e) => handleChange('context', e.target.value)} rows={10} />
      </div>
      <div className="adm__form-actions">
        <button type="submit" className="adm__btn adm__btn--primary">Salvar</button>
        <button type="button" className="adm__btn adm__btn--ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

function NewModuleForm({ onSave, onCancel }) {
  const [fields, setFields] = useState({ number: '', title: '', description: '', color: '#3b82f6' })

  function handleChange(key, val) {
    setFields((prev) => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!fields.title.trim()) return
    onSave({
      id: 'modulo-custom-' + Date.now(),
      tasks: [],
      context: '',
      ...fields,
    })
  }

  return (
    <form className="adm__edit-form adm__new-module-form" onSubmit={handleSubmit}>
      <h3 className="adm__form-title">Novo Módulo</h3>
      <div className="adm__form-row">
        <label className="adm__form-label">Número</label>
        <input className="adm__input adm__input--small" value={fields.number} onChange={(e) => handleChange('number', e.target.value)} placeholder="Ex: 09" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Título</label>
        <input className="adm__input" value={fields.title} onChange={(e) => handleChange('title', e.target.value)} required placeholder="Título do módulo" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Descrição</label>
        <input className="adm__input" value={fields.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Breve descrição" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Cor</label>
        <input type="color" className="adm__color-input" value={fields.color} onChange={(e) => handleChange('color', e.target.value)} />
      </div>
      <div className="adm__form-actions">
        <button type="submit" className="adm__btn adm__btn--primary">Criar Módulo</button>
        <button type="button" className="adm__btn adm__btn--ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

function TabModules({ modules, updateModuleMeta, addTaskToModule, removeExtraTask, removeModule, addModule, isStaticModule, extraTasks }) {
  const [editingId, setEditingId] = useState(null)
  const [addingQuizId, setAddingQuizId] = useState(null)
  const [showNewModuleForm, setShowNewModuleForm] = useState(false)

  function handleSaveEdit(moduleId, fields) {
    updateModuleMeta(moduleId, fields)
    setEditingId(null)
  }

  function handleSaveQuiz(moduleId, task) {
    addTaskToModule(moduleId, task)
    setAddingQuizId(null)
  }

  function handleRemoveModule(moduleId) {
    if (window.confirm('Excluir este módulo? Esta ação não pode ser desfeita.')) {
      removeModule(moduleId)
    }
  }

  function handleRemoveTask(moduleId, taskId) {
    if (window.confirm('Remover esta tarefa?')) {
      removeExtraTask(moduleId, taskId)
    }
  }

  function handleAddModule(moduleData) {
    addModule(moduleData)
    setShowNewModuleForm(false)
  }

  // Get extra task ids for a module to identify extras
  function getExtraTaskIds(moduleId) {
    return new Set((extraTasks[moduleId] || []).map((t) => t.id))
  }

  return (
    <div>
      <div className="adm__modules-header">
        <button className="adm__btn adm__btn--primary" onClick={() => setShowNewModuleForm((v) => !v)}>
          {showNewModuleForm ? 'Cancelar' : '+ Novo Módulo'}
        </button>
      </div>

      {showNewModuleForm && (
        <NewModuleForm onSave={handleAddModule} onCancel={() => setShowNewModuleForm(false)} />
      )}

      <div className="adm__module-list">
        {modules.map((mod) => {
          const extraIds = getExtraTaskIds(mod.id)
          const isCustom = !isStaticModule(mod.id)
          const isEditing = editingId === mod.id
          const isAddingQuiz = addingQuizId === mod.id

          return (
            <div key={mod.id} className="adm__module-item">
              <div className="adm__module-item-header">
                <div className="adm__module-item-info">
                  <span className="adm__mod-num" style={{ background: mod.color }}>{mod.number}</span>
                  <span className="adm__module-item-title">{mod.title}</span>
                  <span className="adm__module-item-count">{mod.tasks.length} tarefa{mod.tasks.length !== 1 ? 's' : ''}</span>
                </div>
                <div className="adm__module-item-actions">
                  <button className="adm__btn adm__btn--sm adm__btn--outline" onClick={() => setEditingId(isEditing ? null : mod.id)}>
                    {isEditing ? 'Fechar' : 'Editar'}
                  </button>
                  {isCustom && (
                    <button className="adm__btn adm__btn--sm adm__btn--danger" onClick={() => handleRemoveModule(mod.id)}>
                      Excluir
                    </button>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="adm__module-expand">
                  <ModuleEditForm mod={mod} onSave={(fields) => handleSaveEdit(mod.id, fields)} onCancel={() => setEditingId(null)} />
                </div>
              )}

              <div className="adm__task-list">
                <p className="adm__task-list-label">Tarefas</p>
                {mod.tasks.length === 0 && <p className="adm__task-empty">Nenhuma tarefa ainda.</p>}
                {mod.tasks.map((task) => {
                  const isExtra = extraIds.has(task.id)
                  return (
                    <div key={task.id} className={`adm__task-row ${isExtra ? 'adm__task-row--extra' : 'adm__task-row--static'}`}>
                      <span className="adm__task-type-badge">{task.type === 'quiz' ? 'Q' : 'C'}</span>
                      <span className="adm__task-row-title">
                        {task.title || task.question || task.id}
                      </span>
                      {isExtra ? (
                        <button className="adm__btn adm__btn--xs adm__btn--danger" onClick={() => handleRemoveTask(mod.id, task.id)}>
                          Remover
                        </button>
                      ) : (
                        <span className="adm__task-static-icon" title="Tarefa estática">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                          </svg>
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="adm__quiz-add">
                {isAddingQuiz ? (
                  <QuizForm onSave={(task) => handleSaveQuiz(mod.id, task)} onCancel={() => setAddingQuizId(null)} />
                ) : (
                  <button className="adm__btn adm__btn--sm adm__btn--outline" onClick={() => setAddingQuizId(mod.id)}>
                    + Adicionar Quiz
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Aba Usuários ─────────────────────────────────────────────────
function NewUserForm({ onSave, onCancel }) {
  const [fields, setFields] = useState({ name: '', email: '', password: '', role: 'aluno' })

  function handleChange(key, val) {
    setFields((prev) => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!fields.name.trim() || !fields.email.trim() || !fields.password.trim()) return
    onSave(fields)
  }

  return (
    <form className="adm__edit-form adm__new-module-form" onSubmit={handleSubmit}>
      <h3 className="adm__form-title">Novo Usuário</h3>
      <div className="adm__form-row">
        <label className="adm__form-label">Nome</label>
        <input className="adm__input" value={fields.name} onChange={(e) => handleChange('name', e.target.value)} required placeholder="Nome completo" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">E-mail</label>
        <input className="adm__input" type="email" value={fields.email} onChange={(e) => handleChange('email', e.target.value)} required placeholder="email@exemplo.com" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Senha</label>
        <input className="adm__input" type="password" value={fields.password} onChange={(e) => handleChange('password', e.target.value)} required placeholder="Senha" />
      </div>
      <div className="adm__form-row">
        <label className="adm__form-label">Perfil</label>
        <select className="adm__select" value={fields.role} onChange={(e) => handleChange('role', e.target.value)}>
          <option value="aluno">Aluno</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <div className="adm__form-actions">
        <button type="submit" className="adm__btn adm__btn--primary">Criar Usuário</button>
        <button type="button" className="adm__btn adm__btn--ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

function TabUsers({ users, currentUser, addUser, removeUser, updateUserRole }) {
  const [showNewUserForm, setShowNewUserForm] = useState(false)

  function handleAddUser(userData) {
    addUser(userData)
    setShowNewUserForm(false)
  }

  function handleRemoveUser(email) {
    if (window.confirm(`Remover o usuário ${email}? Esta ação não pode ser desfeita.`)) {
      removeUser(email)
    }
  }

  return (
    <div>
      <div className="adm__modules-header">
        <button className="adm__btn adm__btn--primary" onClick={() => setShowNewUserForm((v) => !v)}>
          {showNewUserForm ? 'Cancelar' : '+ Novo Usuário'}
        </button>
      </div>

      {showNewUserForm && (
        <NewUserForm onSave={handleAddUser} onCancel={() => setShowNewUserForm(false)} />
      )}

      <div className="adm__table-wrap">
        <table className="adm__table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Perfil</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email}>
                <td>
                  <div className="adm__user-name">
                    <span className="adm__avatar">{u.name[0]}</span>
                    {u.name}
                  </div>
                </td>
                <td className="adm__user-email">{u.email}</td>
                <td>
                  <span className={`adm__role adm__role--${u.role}`}>
                    {u.role === 'admin' ? 'Administrador' : 'Aluno'}
                  </span>
                </td>
                <td>
                  <div className="adm__user-actions">
                    <select
                      className="adm__dropdown"
                      value={u.role}
                      onChange={(e) => updateUserRole(u.email, e.target.value)}
                    >
                      <option value="aluno">Aluno</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button
                      className="adm__btn adm__btn--xs adm__btn--danger"
                      onClick={() => handleRemoveUser(u.email)}
                      disabled={u.email === currentUser?.email}
                      title={u.email === currentUser?.email ? 'Não é possível remover seu próprio usuário' : ''}
                    >
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Aba Ferramentas ──────────────────────────────────────────────
function TabTools({ modules, resetProgress, resetModules }) {
  const totalTasks = modules.reduce((acc, m) => acc + m.tasks.length, 0)

  function handleResetProgress() {
    if (window.confirm('Tem certeza que deseja resetar seu progresso? Esta ação é irreversível.')) {
      resetProgress()
    }
  }

  function handleResetModules() {
    if (window.confirm('Tem certeza? Todos os módulos criados e edições serão perdidos. Esta ação é irreversível.')) {
      resetModules()
    }
  }

  return (
    <div className="adm__tools">
      <div className="adm__tool-card">
        <h3 className="adm__tool-title">Resetar meu progresso</h3>
        <p className="adm__tool-desc">Remove todo o progresso do curso salvo neste dispositivo. Esta ação é irreversível.</p>
        <button className="adm__btn adm__btn--danger" onClick={handleResetProgress}>
          Resetar Progresso
        </button>
      </div>

      <div className="adm__tool-card">
        <h3 className="adm__tool-title">Restaurar módulos padrão</h3>
        <p className="adm__tool-desc">Remove todos os módulos criados pelo admin e restaura as edições para o estado original. Módulos criados e edições serão perdidos.</p>
        <button className="adm__btn adm__btn--danger" onClick={handleResetModules}>
          Restaurar Padrão
        </button>
      </div>

      <div className="adm__tool-card">
        <h3 className="adm__tool-title">Informações técnicas</h3>
        <div className="adm__tool-info">
          <div className="adm__tool-info-row">
            <span>Versão</span>
            <span>1.0.0</span>
          </div>
          <div className="adm__tool-info-row">
            <span>Total de módulos</span>
            <span>{modules.length}</span>
          </div>
          <div className="adm__tool-info-row">
            <span>Total de tarefas</span>
            <span>{totalTasks}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Admin principal ──────────────────────────────────────────────
const TABS = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'modules', label: 'Módulos' },
  { id: 'users', label: 'Usuários' },
  { id: 'tools', label: 'Ferramentas' },
]

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview')
  const { user, users, addUser, removeUser, updateUserRole } = useAuth()
  const { modules, updateModuleMeta, addTaskToModule, removeExtraTask, addModule, removeModule, resetModules, isStaticModule, extraTasks } = useModules()
  const { resetProgress } = useProgress()

  return (
    <main className="adm">
      <header className="adm__header">
        <div>
          <h1 className="adm__title">Painel Administrativo</h1>
          <p className="adm__subtitle">Gerencie módulos, usuários e ferramentas do curso.</p>
        </div>
        <span className="adm__badge">Admin</span>
      </header>

      <div className="adm__tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`adm__tab ${activeTab === tab.id ? 'adm__tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="adm__tab-content">
        {activeTab === 'overview' && (
          <TabOverview modules={modules} users={users} />
        )}
        {activeTab === 'modules' && (
          <TabModules
            modules={modules}
            updateModuleMeta={updateModuleMeta}
            addTaskToModule={addTaskToModule}
            removeExtraTask={removeExtraTask}
            removeModule={removeModule}
            addModule={addModule}
            isStaticModule={isStaticModule}
            extraTasks={extraTasks}
          />
        )}
        {activeTab === 'users' && (
          <TabUsers
            users={users}
            currentUser={user}
            addUser={addUser}
            removeUser={removeUser}
            updateUserRole={updateUserRole}
          />
        )}
        {activeTab === 'tools' && (
          <TabTools
            modules={modules}
            resetProgress={resetProgress}
            resetModules={resetModules}
          />
        )}
      </div>
    </main>
  )
}
