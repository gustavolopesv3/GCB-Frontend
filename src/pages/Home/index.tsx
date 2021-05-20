import { Header } from "../../components/Header"
import {BestRecipes, SectionBanner} from './styles'
import {FiSearch} from 'react-icons/fi'
import { CardRecipe } from "../../components/CardRecipe"



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
    <BestRecipes>
      <div>
      <h1>Our Best Recipes</h1>
      <span>Far far away, behind the word mountains, far from the countries <br />
        Vokalia and Consonantia, there live the blind texts.</span>
      </div>
      <div className='cardsRecipes'>
        <CardRecipe/>
        <CardRecipe/>
        <CardRecipe/>
        <CardRecipe/>
        </div>
    </BestRecipes>
    </>
  )
}