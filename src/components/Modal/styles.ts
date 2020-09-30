import styled from 'styled-components'

interface DrinkImageProps {
  urlImg: string
}

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
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  section {
    width: 500px;
    max-height: 100%;
    padding: 20px;
    border-radius: 4px;
    color: #515151;
    background: #f4ede8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    > svg {
      position: absolute;
      top: 2px;
      right: 2px;
      color: #ffa520;
      cursor: pointer;
    }

    & > img {
      width: 300px;
      height: 300px;
      min-height: 300px;
    }

    div {
      width: 300px;
      margin-top: 20px;
      text-align: left;

      strong {
        font-size: 30px;
        font-weight: bold;
        color: #ffa520;
      }

      p {
        margin-top: 6px;
        color: #ffa520;

        span {
          font-size: 20px;
          color: #515151;
        }
      }

      ul {
        max-height: 30vh;
        margin-top: 12px;
        color: #ffa520;
        list-style: none;
        overflow: auto;

        li {
          margin-top: 8px;
          font-size: 20px;
          color: #515151;
        }
      }
    }
  }
`
export const DrinkImage = styled.img<DrinkImageProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.urlImg}) no-repeat center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 30px -1px rgba(0, 0, 0, 0.1);
`
