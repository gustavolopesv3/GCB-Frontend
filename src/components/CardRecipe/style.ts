import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px black;
  border-radius: 6px;

  .cardContent {
    margin: 2rem;
    width: 150px;
  }
  img {
    height: 100%;
  }
  button {
    background-color: #badc58;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    height: 100px;
    button {
      background-color: #badc58;
      border: none;
      border-radius: 5px;
      padding: 2px;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 425px) {
    height: 100px;
    .cardContent {
      h2 {
        font-size: 1rem;
      }
    }
    button {
      background-color: #badc58;
      border: none;
      border-radius: 5px;
      padding: 1px;
      color: #ffffff;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    height: 100px;
    .cardContent {
      h2 {
        font-size: 0.8rem;
      }
    }
    button {
      background-color: #badc58;
      border: none;
      border-radius: 5px;
      padding: 1px;
      color: #ffffff;
      font-size: 0.7rem;
    }
  }
`;
