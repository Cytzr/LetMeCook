
import Navbar from '../Components/navbar.tsx';
import Footer from '../Components/footer.tsx';
import LikedRecipesCard from '../Components/liked-recipes-card.tsx';
import  '../Styles/likedRecipe.css';


const LikedRecipe = () => {
  return (
    <div>
      <Navbar/>
      <div className="title text-center fs-3 fw-bold mt-3">Liked Recipe</div>
      <div className="liked-container">
        <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
        <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
        <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
        <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
      </div>
      <div className="liked-container">
      <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
      <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
      <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
      <LikedRecipesCard FoodName={'Bubur Ayam'} ImageLink={'../src/Images/HoneyChicken.png'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default LikedRecipe
