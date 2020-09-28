import styled from 'styled-components'
import { shade } from 'polished'

interface DrinkImageProps {
  urlImg: string
}

export const DrinkImage = styled.img<DrinkImageProps>`
  flex: 1;
  background: url(${(props) => props.urlImg}) no-repeat center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 30px -1px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.main`
  flex: 1;
  min-width: 530px;
  padding-top: 50px;
  background: #f4ede8;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, auto));
    column-gap: 30px;
    row-gap: 50px;
    padding: 30px 70px 70px;

    a {
      min-width: 230px;
      height: 350px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }

      &:hover img {
        box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);
      }

      strong {
        margin-top: 12px;
        font-size: 20px;
        color: #515151;
      }

      p {
        margin-top: 4px;
        color: #999;
      }
    }
  }
`

export const HeaderContent = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #f4ede8;
  height: 70px;
  padding: 0 70px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999;

  img {
    width: 170px;
  }

  strong {
    color: #ffa520;
  }
`

export const Menu = styled.section`
  max-width: 420px;
  min-width: 335px;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  color: #f4ede8;
  padding: 70px;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 26px;

    img {
      width: 70px;
      border-radius: 50%;
      margin-right: 16px;
    }

    span {
      font-weight: bold;
      color: #ffa520;
    }
  }

  > aside {
    flex: 1;
    padding: 50px 0;
  }

  > button {
    width: 50%;
    min-width: fit-content;
    height: 42px;
    background: #c53030;
    padding: 0 16px;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#c53030')};
      color: ${shade(0.2, '#fff')};
    }
  }
`
