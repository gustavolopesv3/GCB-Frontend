import styled from 'styled-components'


export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 2rem;

.logo{
  color: #badc58;
  font-size: 2rem;
  margin-left: 6rem;
}

ul{
  display: flex;
  align-items: center;

  li{
    margin-right: 2rem;
    list-style-type: none ;
    color: white;
  }
  li:last-child{
    background: white;
    width: 110px;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:4px;
    color:#badc58;
    cursor:pointer;
  }
}
`