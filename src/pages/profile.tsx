import { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'

import { Button } from 'antd'

import { withAuthenticator /*, AmplifySignOut*/ } from '@aws-amplify/ui-react'
import Container from '../components/container'

type UserType = { username?: string; email?: string; phone_number?: string }

const Profile = () => {
  const [user, setUser] = useState<UserType>({})

  useEffect(() => {
    const checkUser = async () => {
      try {
        const data = await Auth.currentUserPoolUser()
        const userInfo = { username: data.username, ...data.attributes }
        setUser(userInfo)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    checkUser()
  }, [])

  const signOut = async () => {
    await Auth.signOut()
    setUser({})

    Hub.dispatch('UI Auth', {
      event: 'AuthStateChange',
      message: 'signedout',
    })
  }

  const { username, email, phone_number } = user

  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
      <h3>Email: {email}</h3>
      <h4>Phone: {phone_number}</h4>
      {/* <AmplifySignOut /> */}
      <Button type="primary" size="large" onClick={signOut}>
        Sign Out
      </Button>
    </Container>
  )
}

export default withAuthenticator(Profile)
