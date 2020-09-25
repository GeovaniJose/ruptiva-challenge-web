import React, { useCallback } from 'react'
import { FiArrowLeft, FiMail, FiCalendar, FiLock, FiUser } from 'react-icons/fi'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        age: Yup.number()
          .typeError('Idade obrigatória')
          .min(18, 'Idade mínina 18 anos'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 dígitos')
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
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt='Cockta.io' />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name='name' icon={FiUser} placeholder='Nome' />
            <Input
              name='age'
              type='number'
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
          </Form>

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
