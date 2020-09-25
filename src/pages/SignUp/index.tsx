import React from 'react'
import { FiArrowLeft, FiMail, FiCalendar, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
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

            <Input name='name' icon={FiUser} placeholder='Nome' />
            <Input
              name='age'
              type='number'
              min='18'
              max='130'
              icon={FiCalendar}
              placeholder='Idade'
            />
            <Input name='email' icon={FiMail} placeholder='E-mail' />
            <Input
              name='password'
              icon={FiLock}
              type='password'
              placeholder='Senha'
            />
            <Button type='submit'>Cadastrar</Button>
          </form>

          <Link to='/'>
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignUp
