import React from 'react'

import logoImg from '../../assets/logo.png'
import cocktailBlankImg from '../../assets/cocktail-blank.jpg'
import profileBlankImg from '../../assets/profile-blank.png'

import Button from '../../components/Button'

import { Container, Content, Menu, HeaderContent, DrinkImage } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <img src={logoImg} alt='Cockta.io' />

          <span>
            Você tem <strong>17 Coquetéis</strong>
          </span>
        </HeaderContent>

        <ul>
          <a>
            <DrinkImage urlImg={cocktailBlankImg} />

            <strong>Whiskey Sour</strong>

            <p>Teor alcólico: 1</p>
          </a>

          <a>
            <DrinkImage urlImg={cocktailBlankImg} />

            <strong>Whiskey Sour</strong>

            <p>Teor alcólico: 1</p>
          </a>

          <a>
            <DrinkImage urlImg={cocktailBlankImg} />

            <strong>Whiskey Sour</strong>

            <p>Teor alcólico: 1</p>
          </a>

          <a>
            <DrinkImage urlImg={cocktailBlankImg} />

            <strong>Whiskey Sour</strong>

            <p>Teor alcólico: 1</p>
          </a>
        </ul>
      </Content>

      <Menu>
        <div>
          <img src={profileBlankImg} alt='Geovani' />

          <div>
            <p>Bem vindo,</p>
            <span>Geovani José</span>
          </div>
        </div>

        <aside>
          <Button type='button'>Adicionar Coquetel</Button>
          <Button type='button'>Atualizar Perfil</Button>
        </aside>

        <button type='button'>Logout</button>
      </Menu>
    </Container>
  )
}

export default Dashboard
