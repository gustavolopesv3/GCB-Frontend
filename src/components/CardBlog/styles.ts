import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1rem;

  h3 {
    font-size: 1.7rem;
  }

  .author {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    span {
      color: #9e9baf;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    h3 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 425px) {
    width: 150px;
    h3 {
      font-size: 1rem;
    }
  }
`;
