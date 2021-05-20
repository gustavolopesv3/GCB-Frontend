import { Header } from '../../components/Header';
import {
  BestRecipes,
  BestSevices,
  SectionBanner,
  Blog,
  MenberShip,
} from './styles';
import { FiSearch } from 'react-icons/fi';
import { CardRecipe } from '../../components/CardRecipe';
import { CardBlog } from '../../components/CardBlog';
import { FooterPage } from '../../components/Footer';

export const Home = () => {
  return (
    <>
      <SectionBanner>
        <Header />
        <div className="search">
          <h1>
            Ready for <br />
            Trying a new
            <br />
            recipe?
          </h1>

          <div className="searchContent">
            <input type="text" placeholder="Search healtht recipes" />
            <button>
              <FiSearch color="#fff" />
            </button>
          </div>
        </div>
      </SectionBanner>
      <BestRecipes>
        <div className="titleBestRecipes">
          <h1>Our Best Recipes</h1>
          <span>
            Far far away, behind the word mountains, far from the countries{' '}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </span>
        </div>
        <div className="cardsRecipes">
          <CardRecipe />
          <CardRecipe />
          <CardRecipe />
          <CardRecipe />
        </div>
      </BestRecipes>
      <BestSevices>
        <div className="blogContent">
          <h1>
            The best services ready <br />
            To serve you
          </h1>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{' '}
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.{' '}
          </p>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button>Know More</button>
        </div>
      </BestSevices>

      <Blog>
        <div className="titleBlog">
          <h1>Read Our Blog</h1>
          <p>
            Far far away, behind the word mountains, far from the countries{' '}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="cardsBlog">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </Blog>

      <MenberShip>
        <div className="joinMember">
          <h1>
            Join our membership <br />
            to get special offer
          </h1>

          <div className="searchContent">
            <input type="text" placeholder="Enter yout email address" />
            <button>join</button>
          </div>
        </div>
      </MenberShip>
      <FooterPage />
    </>
  );
};
