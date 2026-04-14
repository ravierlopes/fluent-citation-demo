import { useState } from 'react'
import {
  FluentProvider,
  webLightTheme,
  makeStyles,
  tokens,
  Button,
  Input,
  Label,
} from '@fluentui/react-components'
import { LockClosedRegular } from '@fluentui/react-icons'
import ReviewPage from './components/ReviewPage'

const useStyles = makeStyles({
  gate: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow8,
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '320px',
    alignItems: 'center',
  },
  title: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase400,
    color: tokens.colorNeutralForeground1,
  },
  error: {
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorPaletteRedForeground1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
  },
})

const PASS_KEY = 'proto_auth'

function PasswordGate({ children }: { children: React.ReactNode }) {
  const styles = useStyles()
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(PASS_KEY) === '1'
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (authenticated) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value === 'engage123') {
      sessionStorage.setItem(PASS_KEY, '1')
      setAuthenticated(true)
    } else {
      setError(true)
    }
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.gate}>
        <div className={styles.card}>
          <LockClosedRegular style={{ fontSize: 32, color: tokens.colorBrandForeground1 }} />
          <span className={styles.title}>Enter password to continue</span>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Label htmlFor="pw">Password</Label>
            <Input
              id="pw"
              type="password"
              value={value}
              onChange={(_, data) => { setValue(data.value); setError(false); }}
              autoFocus
            />
            {error && <span className={styles.error}>Incorrect password</span>}
            <Button appearance="primary" type="submit">Enter</Button>
          </form>
        </div>
      </div>
    </FluentProvider>
  )
}

function App() {
  return (
    <PasswordGate>
      <ReviewPage />
    </PasswordGate>
  )
}

export default App
