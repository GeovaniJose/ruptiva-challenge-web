import React from 'react'
import { useHistory } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import { Container } from './styles'

const CreateCocktail: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <section>
        <FiX size={20} onClick={() => history.goBack()} />
        <h1>New Cocktail</h1>
      </section>
    </Container>
  )
}

export default CreateCocktail
