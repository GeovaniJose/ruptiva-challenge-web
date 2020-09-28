import React, { useEffect, useState } from 'react'

import { useAuth } from '../../hooks/auth'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import cocktailBlankImg from '../../assets/cocktail-blank.jpg'
import avatarBlankImg from '../../assets/avatar-blank.png'

import Button from '../../components/Button'

import { Container, Content, Menu, HeaderContent, DrinkImage } from './styles'

interface CocktailProps {
  id: string
  name: string
  alcohol_level: number
  image: string
}

const Dashboard: React.FC = () => {
  const [cocktails, setCocktails] = useState<CocktailProps[]>([])

  const { signOut } = useAuth()
  const { token, user } = useAuth()

  useEffect(() => {
    const loadCocktails = async () => {
      const response = await api.get('cocktails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCocktails(response.data)
    }

    loadCocktails()
  }, [token, user])

  return (
    <Container>
      <Content>
        <HeaderContent>
          <img src={logoImg} alt='Cockta.io' />

          <span>
            Você tem&nbsp;
            <strong>
              {cocktails.length}
              {cocktails.length === 1 ? ' Coquetel' : ' Coquetéis'}
            </strong>
          </span>
        </HeaderContent>

        <ul>
          {cocktails.map((cocktail) => (
            <a key={cocktail.id}>
              <DrinkImage urlImg={cocktail.image || cocktailBlankImg} />

              <strong>{cocktail.name}</strong>

              <p>Teor alcólico: {cocktail.alcohol_level}</p>
            </a>
          ))}
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
