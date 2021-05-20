import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;

  .logo {
    color: #badc58;
    font-size: 2rem;
    margin-left: 6rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 2rem;
      list-style-type: none;
      color: white;
    }
    li:last-child {
      background: white;
      width: 110px;
      height: 100%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: #badc58;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: flex-start;

    .logo {
      color: #badc58;
      font-size: 1rem;
      margin-left: -10px;
      margin-bottom: 10px;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      li {
        margin-right: 2rem;
        list-style-type: none;
        color: black;
        font-size: 0.6rem;
        border-bottom: 1px solid #badc58;
        margin-bottom: 0.2rem;
      }
      li:last-child {
        background: #badc58;
        width: 80px;

        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
