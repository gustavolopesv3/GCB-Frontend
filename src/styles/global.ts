import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html{

}
body{
    font: 400 14px Roboto, sans-serif;
 
    -webkit-font-smoothing: antialiased;
    a{
    text-decoration: none;
  }
}
input,button, textarea{
    font: 400 18px Roboto, sans-serif;
}
button{
    cursor: pointer;
}
form input{
    width: 100%;
    height: 30px;
    color: #333;
    border: 1px solid #dcde;
    border-radius: 8px;
    padding: 0 24px;
}
form textarea{
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcde;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
}
.button{
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0,2s;
}
.button:hover{
    filter: brightness(60%);
}
.back-link{
    display: flex;
    align-items: center;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    margin-top: 100px;
}
.back-link svg{
    margin-right: 8px;
}
.back-link:hover{
    opacity: 0.8;
}

`;
