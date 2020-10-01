import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

interface UploadProps {
  isDragActive: boolean
  isDragReject: boolean
  refKey?: string
  [key: string]: any
  type?: 'error' | 'success' | 'default'
}

const dragActive = css`
  border-color: #12a454;
`

const dragReject = css`
  border-color: #c53030;
`

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  display: flex;
  position: absolute;
  width: 300px;
  height: 300px;
  min-height: 300px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  transition: height 0.2s ease;

  border: 3px solid #ffa520;

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`

const messageColors = {
  default: '#ffa520',
  error: '#c53030',
  success: '#12a454'
}

export const UploadMessage = styled.p`
  flex: 1;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.2);

  color: ${({ type }: UploadProps) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`
