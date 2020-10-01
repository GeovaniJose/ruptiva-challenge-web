import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import { FaCocktail, FaRegFlushed, FaLemon } from 'react-icons/fa'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { useCocktail } from '../../hooks/cocktail'
import { useToast } from '../../hooks/toast'

import cocktailBlankImg from '../../assets/cocktail-blank.jpg'

import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import Upload from '../../components/Upload'

import { Container, DrinkImage } from './styles'

interface CreateFormData {
  name: string
  alcohol_level: number
  ingredients: string
}

interface FileProps {
  file: File
  name: string
  preview: string
}

const CreateCocktail: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<FileProps>({} as FileProps)
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const { addCocktail } = useCocktail()
  const { addToast } = useToast()

  const handleCreate = useCallback(
    async (data: CreateFormData) => {
      const file = new FormData()

      if (!uploadedFile.file) {
        addToast({
          type: 'error',
          title: 'Imagem obrigatória',
          description: 'Adicione uma imagem ao coquetel.'
        })

        return
      }

      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do coquetel obrigatório'),
          alcohol_level: Yup.number()
            .typeError('Teor alcoólico obrigatório')
            .min(1, 'Teor alcoólico entre 1 e 5')
            .max(5, 'Teor alcoólico entre 1 e 5'),
          ingredients: Yup.string().required('Insira ao menos 1 ingrediente')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        file.append('image', uploadedFile.file)

        await addCocktail(
          {
            name: data.name,
            alcohol_level: data.alcohol_level,
            ingredients: data.ingredients.split('\n')
          },
          file
        )

        addToast({
          type: 'success',
          title: 'Coquetel criado com sucesso!'
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
          title: 'Erro ao adicionar coquetel',
          description:
            'Ocorreu um erro ao realizar a adição de um novo coquetel, tente novamente.'
        })
      }
    },
    [addToast, history, uploadedFile.file, addCocktail]
  )

  const submitFile = useCallback((file: File): void => {
    const uploadFile = {
      file,
      name: file.name,
      preview: URL.createObjectURL(file)
    }

    setUploadedFile(uploadFile)
  }, [])

  return (
    <Container>
      <section>
        <FiX size={20} onClick={() => history.goBack()} />

        <Upload onUpload={submitFile} />
        <DrinkImage urlImg={uploadedFile.preview || cocktailBlankImg} />

        <Form ref={formRef} onSubmit={handleCreate}>
          <Input name='name' icon={FaCocktail} placeholder='Nome' />
          <Input
            name='alcohol_level'
            type='number'
            icon={FaRegFlushed}
            placeholder='Teor alcoólico (1 à 5)'
          />
          <TextArea
            name='ingredients'
            icon={FaLemon}
            placeholder='Ingredientes (1 por linha)'
          />

          <Button type='submit'>Adicionar</Button>
        </Form>
      </section>
    </Container>
  )
}

export default CreateCocktail
