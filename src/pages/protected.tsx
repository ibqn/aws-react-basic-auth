import { Auth } from 'aws-amplify'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Container from '../components/container'

const Protected = () => {
  const history = useHistory()
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => history.push('/profile'))
  }, [])

  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  )
}

export default Protected
