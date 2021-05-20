import styled from 'styled-components';
import illustration from '../../assets/Illustration.svg';


export const SectionBanner = styled.section`
height: 100vh;
background-image: url(${illustration});

background-size: 54%;
background-position: 100% 0;
background-repeat: no-repeat;

.search{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-top: 7rem;
  h1{
    font-size: 3rem;   
    color : #1D164D;
  }
}
.searchContent {
  margin-top: 1rem;
  margin-left: 3rem;

  
  input{
    border: 1px solid;
    border-radius: 5px;
    padding: 6px;
    width: 300px;
  }

  button{
    background-color: #badc58;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    margin-left: 20px
  }
}

`

export const BestRecipes = styled.section`
background-color: #FAFAFC;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
padding: 3rem;


h1{
  font-size: 3rem;
}
span{
  color: #9E9BAF
}
.cardsRecipes{
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: start;
}


`