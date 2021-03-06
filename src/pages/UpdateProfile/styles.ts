import styled from 'styled-components'

interface DrinkImageProps {
  urlImg: string
}

export const DrinkImage = styled.img<DrinkImageProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.urlImg}) no-repeat top;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 30px -1px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  position: fixed;

  padding: 40px 70px;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;

  section {
    width: 500px;
    max-height: max-content;
    margin: auto 0;
    padding: 20px;
    border-radius: 4px;
    color: #515151;
    background: #f4ede8;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    > svg {
      position: absolute;
      top: 2px;
      right: 2px;
      color: #ffa520;
      cursor: pointer;
    }

    > img {
      width: 300px;
      height: 300px;
      min-height: 300px;
      margin-bottom: 20px;
      /* border: 2px solid #ffa520; */
      border-radius: 50%;
    }

    > form {
      min-width: 350px;
    }
  }
`
