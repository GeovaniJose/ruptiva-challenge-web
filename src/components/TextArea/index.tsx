import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  icon: Icon,
  disabled,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    setIsFilled(!!textareaRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!textareaRef.current?.value)
  }, [])

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      isDisabled={!!disabled}
    >
      {Icon && <Icon size={20} />}
      <textarea
        rows={5}
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        defaultValue={defaultValue}
        disabled={disabled}
        ref={textareaRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color='#c53030' size={20} />
        </Error>
      )}
    </Container>
  )
}

export default TextArea
