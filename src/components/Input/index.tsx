import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container isErrored={false} isFilled={false} isFocused={false}>
      {Icon && <Icon size={20} />}
      <input name={name} {...rest} />

      <Error>
        <FiAlertCircle color="#c53030" size={20} />
      </Error>
    </Container>
  )
}

export default Input
