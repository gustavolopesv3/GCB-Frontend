import styled from 'styled-components';
import illustration from '../../assets/Illustration.svg';
import sevicesIlustation from '../../assets/bloco_services.svg';
import menbershipImage from '../../assets/bloco_final_image.svg';

export const SectionBanner = styled.section`
  background-image: url(${illustration});

  background-size: 54%;
  background-position: 100% 0;
  background-repeat: no-repeat;

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-top: 7rem;
    h1 {
      font-size: 3rem;
      color: #1d164d;
    }
  }
  .searchContent {
    margin-top: 1rem;
    margin-left: 3rem;

    input {
      border: 1px solid;
      border-radius: 5px;
      padding: 6px;
      width: 300px;
    }

    button {
      background-color: #badc58;
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
      margin-left: 20px;
    }
  }
`;

export const BestRecipes = styled.section`
  background-color: #fafafc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 3rem;

  h1 {
    font-size: 3rem;
  }
  span {
    color: #9e9baf;
  }
  .cardsRecipes {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    text-align: start;
  }
`;

export const BestSevices = styled.section`
  background-image: url(${sevicesIlustation});
  background-size: 54%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 10rem;

  .blogContent {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #1d164d;
      font-size: 2rem;
    }
    p {
      margin-top: 1.5rem;
      color: #9e9baf;
      font-size: 1.2rem;
    }
    button {
      background-color: #badc58;
      border: none;
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 5px;
      color: #ffffff;
      width: 120px;
      box-shadow: 2px 2px 10px #badc58;
    }
  }
`;

export const Blog = styled.section`
  background-color: #fafafc;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .titleBlog {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #1d164d;
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
    p {
      color: #9e9baf;
    }
  }

  .cardsBlog {
    display: flex;
    margin-top: 2rem;
  }
`;
export const MenberShip = styled.section`
  background-image: url(${menbershipImage});
  background-size: 54%;
  background-position: 100% 0;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;

  .joinMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 40%;
    margin-top: 7rem;
    h1 {
      font-size: 3rem;
      color: #1d164d;
    }
  }
  .searchContent {
    margin-top: 1rem;
    margin-left: 3rem;
    display: flex;

    input {
      border: 1px solid;
      border-radius: 5px;
      padding: 6px;
      width: 300px;
    }

    button {
      background-color: #badc58;
      border: none;

      padding: 9px 20px 9px 20px;
      border-radius: 5px;
      margin-left: 20px;
      color: #ffffff;
      box-shadow: 2px 2px 10px #badc58;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  h3 {
    color: #1d164d;
  }
  span {
    color: #9e9baf;
    margin-left: 1rem;
  }
`;
