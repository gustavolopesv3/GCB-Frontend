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

import blogImage1 from '../../assets/blog_image_1.svg';
import author1 from '../../assets/author1.svg';

import blogImage2 from '../../assets/bloco_image_2.svg';
import author2 from '../../assets/author2.svg';

import blogImage3 from '../../assets/bloco_image_3.svg';
import author3 from '../../assets/author3.svg';

import blogImage4 from '../../assets/bloco_image_4.svg';
import author4 from '../../assets/author4.svg';

import comida1 from '../../assets/comida_1.svg';
import comida2 from '../../assets/comida_2.svg';
import comida3 from '../../assets/comida_3.svg';
import comida4 from '../../assets/comida_4.svg';

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
          <CardRecipe
            imageCard={comida1}
            title="Broccoli Salad
            with Bacon"
          />
          <CardRecipe
            imageCard={comida2}
            title="Classic Beef Burgers
"
          />
          <CardRecipe imageCard={comida3} title="Classic Potato Salad" />
          <CardRecipe imageCard={comida4} title="Cherry Cobbler on the Grill" />
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
          <CardBlog
            image={blogImage1}
            title="Quick-start guide
            to nuts and seeds"
            authorImg={author1}
            author="Kevin Ibrahum"
          />
          <CardBlog
            image={blogImage2}
            title="Nutrition: Tips for
            Improving Your Health
            "
            authorImg={author2}
            author="Mike Jackson"
          />
          <CardBlog
            image={blogImage3}
            title="The top 10 benefits
            of eating healthy"
            authorImg={author3}
            author="Bryan McGregor"
          />
          <CardBlog
            image={blogImage4}
            title="Quick-start guide to nuts and seeds"
            authorImg={author4}
            author="Jash Berson"
          />
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
