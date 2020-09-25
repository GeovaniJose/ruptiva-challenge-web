import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt='Cockta.io' />

          <form onSubmit={() => {}}>
            <h1>Faça seu login</h1>

            <input name='email' placeholder='E-mail' />
            <input name='password' type='password' placeholder='Senha' />
            <Button type='submit'>Entrar</Button>

            <a href='forgot'>Esqueci minha senha</a>
          </form>

          <Link to='/signup'>
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  )
}

export default SignIn
