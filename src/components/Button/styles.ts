import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background: #ffa520;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffa520')};
    color: ${shade(0.2, '#fff')};
  }
`
