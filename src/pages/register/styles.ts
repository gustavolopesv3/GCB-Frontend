import styled from 'styled-components';
import illustration from '../../assets/Illustration.svg';

export const SectionRegister = styled.section`
  height: 100vh;
  background-image: url(${illustration});
  background-size: 54%;
  background-position: 100% 0;
  background-repeat: no-repeat;

  @media only screen and (max-width: 425px) {
    background-image: url(${illustration});
    background-size: 45%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;

  input {
    margin: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      margin: 10px;
    }
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #badc58;

    input {
      margin: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      input {
        margin: 10px;
      }
    }
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #badc58;
  border: none;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
`;
