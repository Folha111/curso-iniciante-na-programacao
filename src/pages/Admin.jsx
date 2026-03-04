import { USERS } from '../context/AuthContext'
import { MODULES } from '../data/modules'
import './Admin.css'

const totalTasks = MODULES.reduce((acc, m) => acc + m.tasks.length, 0)
const alunos = USERS.filter((u) => u.role === 'aluno')
const admins = USERS.filter((u) => u.role === 'admin')

export default function Admin() {
  return (
    <main className="adm">
      <header className="adm__header">
        <div>
          <h1 className="adm__title">Painel Administrativo</h1>
          <p className="adm__subtitle">Visão geral do curso e usuários cadastrados.</p>
        </div>
        <span className="adm__badge">Admin</span>
      </header>

      {/* Stats */}
      <div className="adm__stats">
        <div className="adm__stat">
          <p className="adm__stat-label">Módulos</p>
          <p className="adm__stat-value">{MODULES.length}</p>
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

      {/* Modules overview */}
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
              {MODULES.map((mod) => {
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

      {/* Users */}
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
              {USERS.map((u) => (
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
    </main>
  )
}
