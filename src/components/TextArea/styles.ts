import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip/index'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  isDisabled: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #00649f;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid #00649f;
  color: #999999;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ffa520;
      border-color: #ffa520;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffa520;
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      &,
      input {
        cursor: not-allowed;
      }
    `}

  & + div {
    margin-top: 8px;
  }

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    resize: none;

    &::placeholder {
      color: #999999;
    }
  }

  > svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
