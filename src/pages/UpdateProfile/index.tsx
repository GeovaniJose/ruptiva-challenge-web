import React from 'react'
import { FiX } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

const UpdateProfile: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <section>
        <FiX size={20} onClick={() => history.goBack()} />
        Update Profile
      </section>
    </Container>
  )
}

export default UpdateProfile
