import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiX, FiMail, FiCalendar, FiUser } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import filesize from 'filesize'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import setUrlImg from '../../utils/setUrlImg'

import avatarBlankImg from '../../assets/avatar-blank.png'

import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Upload from '../../components/Upload'

import { Container, DrinkImage } from './styles'

interface UpdateFormData {
  name: string
  age: number
}

interface FileProps {
  file: File
  name: string
  readableSize: string
  preview: string
}

const UpdateProfile: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<FileProps>({} as FileProps)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()
  const { user, updateUserAvatar, updateUser } = useAuth()

  const handleUpdate = useCallback(
    async (data: UpdateFormData) => {
      const file = new FormData()

      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          age: Yup.number()
            .typeError('Idade obrigatória')
            .min(18, 'Idade mínina 18 anos')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        if (uploadedFile.file) {
          file.append('avatar', uploadedFile.file)
          await updateUserAvatar(file)
        }

        await updateUser(data)

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description: 'Seus dados de perfil foram atualizados'
        })

        history.goBack()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao realizar a atualizção do perfil, tente novamente.'
        })
      }
    },
    [addToast, history, uploadedFile, updateUserAvatar, updateUser]
  )

  const submitFile = useCallback((file: File): void => {
    const uploadFile = {
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file)
    }

    setUploadedFile(uploadFile)
  }, [])

  return (
    <Container>
      <section>
        <FiX size={20} onClick={() => history.goBack()} />

        <Upload onUpload={submitFile} />
        <DrinkImage
          urlImg={
            uploadedFile.preview || setUrlImg(user.avatar, avatarBlankImg)
          }
        />

        <Form ref={formRef} onSubmit={handleUpdate}>
          <Input
            name='name'
            icon={FiUser}
            placeholder='Nome'
            defaultValue={user.name}
          />
          <Input
            name='age'
            type='number'
            icon={FiCalendar}
            placeholder='Idade'
            defaultValue={user.age}
          />
          <Input
            name='email'
            icon={FiMail}
            placeholder='E-mail'
            defaultValue={user.email}
            disabled
          />
          <Button type='submit'>Atualizar</Button>
        </Form>
      </section>
    </Container>
  )
}

export default UpdateProfile
