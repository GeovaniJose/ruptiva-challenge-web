import React from 'react'
import { FiX } from 'react-icons/fi'
import { useHistory, useLocation } from 'react-router-dom'

import { useCocktail } from '../../hooks/cocktail'

import cocktailBlankImg from '../../assets/cocktail-blank.jpg'

import { Container, DrinkImage } from './styles'

const Modal: React.FC = () => {
  const history = useHistory()
  const { cocktails } = useCocktail()
  const index = Number(new URLSearchParams(useLocation().search).get('index'))

  return (
    <Container>
      <section>
        <FiX size={20} onClick={() => history.goBack()} />
        <DrinkImage urlImg={cocktails[index].image || cocktailBlankImg} />

        <div>
          <strong>{cocktails[index].name}</strong>

          <p>
            Teor alcoólico: <span>{cocktails[index].alcohol_level}</span>
          </p>

          <ul>
            Ingredientes:
            {cocktails[index].ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  )
}

export default Modal
