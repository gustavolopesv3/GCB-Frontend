import {Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/register'


const Routes = ()=>{
  return(
    <BrowserRouter>
      <Route component={Home} path='/' exact/>
      <Route component={Register} path='/register' exact/>
    </BrowserRouter>
  )
}

export default Routes