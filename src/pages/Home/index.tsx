import { Header } from "../../components/Header"
import {SectionBanner} from './styles'
import {FiSearch} from 'react-icons/fi'

export const Home = ()=>{
  return(
    <>
    <SectionBanner>

    <Header/>
    <div className='search'>
      <h1>Ready for <br />Trying a new<br />recipe?</h1>

      <div className='searchContent'>
        <input type="text" placeholder='Search healtht recipes' /> 
        <button><FiSearch color="#fff"/></button>
      </div>
    </div>
    </SectionBanner>
    </>
  )
}