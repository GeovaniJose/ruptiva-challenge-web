import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

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
  Modal
} from './styles'

const Dashboard: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  const { signOut, user } = useAuth()
  const { loadCocktails, cocktails } = useCocktail()

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
          {cocktails.map((cocktail) => (
            <a key={cocktail.id} onClick={() => setIsShow(true)}>
              <DrinkImage
                urlImg={setUrlImg(cocktail.image, cocktailBlankImg)}
              />

              <strong>{cocktail.name}</strong>

              <p>Teor alcoólico: {cocktail.alcohol_level}</p>
            </a>
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

      <Modal isShow={isShow}>
        <section>
          <FiX size={20} onClick={() => setIsShow(false)} />
          <DrinkImage urlImg={cocktailBlankImg} />

          <div>
            <strong>Gim Tônica</strong>

            <p>
              Teor alcoólico: <span>3</span>
            </p>

            <ul>
              Ingredientes:
              <li>1 corote limão</li>
              <li>suco mid</li>
              <li>gelo de água de coco</li>
            </ul>
          </div>
        </section>
      </Modal>
    </Container>
  )
}

export default Dashboard
