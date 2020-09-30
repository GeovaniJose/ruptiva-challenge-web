import React, { useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useCocktail } from '../../hooks/cocktail'
import setUrlImg from '../../utils/setUrlImg'

import logoImg from '../../assets/logo.png'
import cocktailBlankImg from '../../assets/cocktail-blank.jpg'
import avatarBlankImg from '../../assets/avatar-blank.png'

import Button from '../../components/Button'

import {
  Container,
  Content,
  Menu,
  HeaderContent,
  DrinkImage,
  Card
} from './styles'

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth()
  const { cocktails, loadCocktails, removeCocktail } = useCocktail()

  useEffect(() => {
    loadCocktails()
  }, [loadCocktails])

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
          {cocktails.map((cocktail, index) => (
            <Card key={cocktail.id}>
              <Link to={`/dashboard/cocktail?index=${index}`}>
                <DrinkImage
                  urlImg={setUrlImg(cocktail.image, cocktailBlankImg)}
                />

                <strong>{cocktail.name}</strong>

                <p>Teor alcoólico: {cocktail.alcohol_level}</p>
              </Link>
              <FiTrash2
                size={20}
                onClick={(e) => {
                  e.stopPropagation()
                  removeCocktail(cocktail.id)
                }}
              />
            </Card>
          ))}
        </ul>
      </Content>

      <Menu>
        <div>
          <img src={setUrlImg(user.avatar, avatarBlankImg)} alt={user.name} />

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
