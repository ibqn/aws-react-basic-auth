import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
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

  const { username, email, phone_number } = user

  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
      <h3>Email: {email}</h3>
      <h4>Phone: {phone_number}</h4>
      <AmplifySignOut />
    </Container>
  )
}

export default withAuthenticator(Profile)
