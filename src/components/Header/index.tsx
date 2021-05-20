import {Nav} from './styles'

export const Header = ()=>{
  return(
    <Nav>
      <div className='logo'>Healthy food</div>
      <div>
        <ul>
          <li>HEALTHY RECIPES</li>
          <li>BLOG</li>
          <li>JOIN</li>
          <li>REGISTER</li>
        </ul>
      </div>
    </Nav>
    
  )
}