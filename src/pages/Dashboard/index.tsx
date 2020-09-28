import React, { useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.png'
import cocktailBlankImg from '../../assets/cocktail-blank.jpg'
import avatarBlankImg from '../../assets/avatar-blank.png'

import Button from '../../components/Button'

import { Container, Content, Menu, HeaderContent, DrinkImage } from './styles'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()
  const { user } = useAuth()

  useEffect(() => {
    console.log(user)
  }, [user])

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
          <img src={user.avatar || avatarBlankImg} alt={user.name} />

          <div>
            <p>Bem vindo,</p>
            <span>{user.name}</span>
          </div>
        </div>

        <aside>
          <Button type='button'>Adicionar Coquetel</Button>
          <Button type='button'>Atualizar Perfil</Button>
        </aside>

        <button type='button' onClick={() => signOut()}>
          Logout
        </button>
      </Menu>
    </Container>
  )
}

export default Dashboard
