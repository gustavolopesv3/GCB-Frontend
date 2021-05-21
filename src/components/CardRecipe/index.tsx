//images
import comida1 from '../../assets/comida_1.svg';
import { Card } from './style';

interface recipeProps {
  imageCard: string;
  title: string;
}

export const CardRecipe = ({ imageCard, title }: recipeProps) => {
  return (
    <Card>
      <img src={imageCard} alt="" />
      <div className="cardContent">
        <h2>{title}</h2>
        <button>See Recipe</button>
      </div>
    </Card>
  );
};
