import React, { ReactNode } from 'react'

import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

interface UploadProps {
  onUpload(file: File): void
}

const Upload: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
  function renderDragMessage(
    isDragActive: boolean,
    isDragRejest: boolean
  ): ReactNode {
    if (!isDragActive) {
      return <UploadMessage>Selecione ou arraste a imagem aqui</UploadMessage>
    }

    if (isDragRejest) {
      return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type='success'>Solte a imagem aqui</UploadMessage>
  }

  return (
    <>
      <Dropzone
        maxFiles={1}
        accept='image/jpeg, image/jpg, image/png'
        onDropAccepted={(files) => onUpload(files[0])}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} data-testid='upload' />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  )
}

export default Upload
