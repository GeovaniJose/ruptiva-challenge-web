import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt='Cockta.io' />

          <form onSubmit={() => {}}>
            <h1>Faça seu cadastro</h1>

            <input name='name' placeholder='Nome' />
            <input
              name='age'
              type='number'
              min='18'
              max='130'
              placeholder='Idade'
            />
            <input name='email' placeholder='E-mail' />
            <input name='password' type='password' placeholder='Senha' />
            <Button type='submit'>Cadastrar</Button>
          </form>

          <a href='/'>
            <FiArrowLeft />
            Voltar para login
          </a>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignUp
