import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useTheme } from '../context/ThemeContext'
import { COLOR_THEMES } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import './Configuracoes.css'

function loadSettings() {
  try {
    const raw = localStorage.getItem('app_settings')
    return raw ? JSON.parse(raw) : { notifications: true, language: 'pt', hideFromRanking: false }
  } catch {
    return { notifications: true, language: 'pt', hideFromRanking: false }
  }
}

function saveSettings(settings) {
  localStorage.setItem('app_settings', JSON.stringify(settings))
}

export default function Configuracoes() {
  const { user, updateUser } = useAuth()
  const { resetProgress, xp, streak } = useProgress()
  const { dark, toggleTheme, colorTheme, setColorTheme } = useTheme()
  const { lang, setLang, t } = useLang()

  const [settings, setSettings] = useState(loadSettings)
  const [nameInput, setNameInput] = useState(user.name)
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState(null)
  const [confirmReset, setConfirmReset] = useState(false)

  function updateSetting(key, value) {
    const next = { ...settings, [key]: value }
    setSettings(next)
    saveSettings(next)
  }

  function showMsg(type, text) {
    setMsg({ type, text })
    setTimeout(() => setMsg(null), 3000)
  }

  function handleSaveAccount(e) {
    e.preventDefault()
    if (!nameInput.trim()) return
    const updates = { name: nameInput.trim() }
    if (passwordInput) {
      if (passwordInput !== confirmPassword) {
        showMsg('error', t('settings', 'passwordMismatch'))
        return
      }
      if (passwordInput.length < 4) {
        showMsg('error', t('settings', 'passwordShort'))
        return
      }
      updates.password = passwordInput
    }
    updateUser(updates)
    setPasswordInput('')
    setConfirmPassword('')
    showMsg('success', t('settings', 'savedSuccess'))
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      showMsg('error', t('settings', 'photoError'))
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      updateUser({ avatar: ev.target.result })
      showMsg('success', t('settings', 'photoSuccess'))
    }
    reader.readAsDataURL(file)
  }

  function handleExport() {
    const data = {
      user: { name: user.name, email: user.email },
      xp,
      streak,
      progress: JSON.parse(localStorage.getItem('course_progress') || '{}'),
      gamification: JSON.parse(localStorage.getItem('gamification') || '{}'),
      exportedAt: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `progresso-${user.email}-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleReset() {
    if (!confirmReset) {
      setConfirmReset(true)
      return
    }
    resetProgress()
    setConfirmReset(false)
    showMsg('success', t('settings', 'resetSuccess'))
  }

  return (
    <main className="config">
      <div className="config__header">
        <h1 className="config__title">{t('settings','title')}</h1>
        <p className="config__subtitle">{t('settings','subtitle')}</p>
      </div>

      {msg && (
        <div className={`config__msg config__msg--${msg.type}`}>{msg.text}</div>
      )}

      {/* Aparência */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','appearance')}</h2>
        <div className="config__card">
          <div className="config__row config__row--border">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','darkMode')}</p>
              <p className="config__row-desc">{t('settings','darkModeDesc')}</p>
            </div>
            <label className="config__toggle">
              <input type="checkbox" checked={dark} onChange={toggleTheme} />
              <span className="config__toggle-track" />
            </label>
          </div>
          <div className="config__row config__row--col">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','colorTheme')}</p>
              <p className="config__row-desc">{t('settings','colorThemeDesc')}</p>
            </div>
            <div className="config__color-grid">
              {COLOR_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  className={`config__color-btn ${colorTheme === theme.id ? 'config__color-btn--active' : ''}`}
                  style={{ '--swatch': theme.color }}
                  onClick={() => setColorTheme(theme.id)}
                  title={theme.name}
                >
                  <span className="config__color-swatch" />
                  <span className="config__color-name">{theme.name}</span>
                  {colorTheme === theme.id && <span className="config__color-check">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conta */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','account')}</h2>
        <div className="config__card">
          <div className="config__row config__row--border">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','photo')}</p>
              <p className="config__row-desc">{t('settings','photoDesc')}</p>
            </div>
            <label className="config__avatar">
              {user.avatar
                ? <img src={user.avatar} alt="avatar" className="config__avatar-img" />
                : <span className="config__avatar-letter">{user.name[0].toUpperCase()}</span>
              }
              <span className="config__avatar-overlay">📷</span>
              <input type="file" accept="image/*" className="config__avatar-input" onChange={handleAvatarChange} />
            </label>
          </div>

          <form className="config__form" onSubmit={handleSaveAccount}>
            <div className="config__field">
              <label className="config__label">{t('settings','name')}</label>
              <input
                className="config__input"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={t('settings','name')}
                maxLength={40}
              />
            </div>
            <div className="config__field">
              <label className="config__label">
                {t('settings','newPassword')} <span className="config__label-opt">{t('settings','newPasswordOpt')}</span>
              </label>
              <input
                className="config__input"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder={t('settings','newPassword')}
              />
            </div>
            {passwordInput && (
              <div className="config__field">
                <label className="config__label">{t('settings','confirmPassword')}</label>
                <input
                  className="config__input"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t('settings','confirmPassword')}
                />
              </div>
            )}
            <button className="btn btn--primary" type="submit">{t('settings','saveChanges')}</button>
          </form>
        </div>
      </section>

      {/* Notificações */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','notifications')}</h2>
        <div className="config__card">
          <div className="config__row">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','studyReminders')}</p>
              <p className="config__row-desc">{t('settings','studyRemindersDesc')}</p>
            </div>
            <label className="config__toggle">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => updateSetting('notifications', e.target.checked)}
              />
              <span className="config__toggle-track" />
            </label>
          </div>
        </div>
      </section>

      {/* Idioma */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','language')}</h2>
        <div className="config__card">
          <div className="config__row">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','languageLabel')}</p>
              <p className="config__row-desc">{t('settings','languageDesc')}</p>
            </div>
            <select
              className="config__select"
              value={lang}
              onChange={(e) => {
                updateSetting('language', e.target.value)
                setLang(e.target.value)
              }}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','privacy')}</h2>
        <div className="config__card">
          <div className="config__row">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','hideFromRanking')}</p>
              <p className="config__row-desc">{t('settings','hideFromRankingDesc')}</p>
            </div>
            <label className="config__toggle">
              <input
                type="checkbox"
                checked={settings.hideFromRanking}
                onChange={(e) => updateSetting('hideFromRanking', e.target.checked)}
              />
              <span className="config__toggle-track" />
            </label>
          </div>
        </div>
      </section>

      {/* Dados */}
      <section className="config__section">
        <h2 className="config__section-title">{t('settings','data')}</h2>
        <div className="config__card">
          <div className="config__row config__row--border">
            <div className="config__row-info">
              <p className="config__row-label">{t('settings','exportProgress')}</p>
              <p className="config__row-desc">{t('settings','exportProgressDesc')}</p>
            </div>
            <button className="btn btn--ghost config__action-btn" onClick={handleExport}>
              {t('settings','export')}
            </button>
          </div>
          <div className="config__row">
            <div className="config__row-info">
              <p className="config__row-label config__row-label--danger">{t('settings','resetProgress')}</p>
              <p className="config__row-desc">{t('settings','resetProgressDesc')}</p>
            </div>
            {confirmReset ? (
              <div className="config__confirm">
                <span className="config__confirm-text">{t('settings','confirmReset')}</span>
                <button className="config__btn-danger" onClick={handleReset}>{t('settings','confirmYes')}</button>
                <button className="btn btn--ghost config__action-btn" onClick={() => setConfirmReset(false)}>{t('settings','cancel')}</button>
              </div>
            ) : (
              <button className="config__btn-danger" onClick={handleReset}>{t('settings','reset')}</button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
