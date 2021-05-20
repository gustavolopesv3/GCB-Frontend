//images
import comida1 from '../../assets/comida_1.svg'
import { Card } from './style'

export const CardRecipe = ()=>{
  return(
      <Card>
      <img src={comida1} alt="" />
      <div className='cardContent'>
        <h2>Broccoli Salad <br /> with Bacon</h2>
        <button>See Recipe</button>
      </div>
      </Card>

      

  )
}