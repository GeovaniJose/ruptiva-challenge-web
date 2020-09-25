import React, { useCallback } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt='Cockta.io' />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name='email' icon={FiMail} placeholder='E-mail' />
            <Input
              name='password'
              icon={FiLock}
              type='password'
              placeholder='Senha'
            />
            <Button type='submit'>Entrar</Button>

            <a href='forgot'>Esqueci minha senha</a>
          </Form>

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
