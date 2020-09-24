import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          {/* <img alt='Cockta.io' /> */}
          <h1>Cockta.io</h1>

          <form onSubmit={() => {}}>
            <h1>Faça seu login</h1>

            <input name='email' placeholder='E-mail' />
            <input name='password' type='password' placeholder='Senha' />
            <Button type='submit'>Entrar</Button>

            <a href='forgot'>Esqueci minha senha</a>
          </form>

          <a href='/signup'>
            <FiLogIn />
            Criar conta
          </a>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  )
}

export default SignIn
