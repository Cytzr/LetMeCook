// SomeComponent.tsx
import React from 'react';
import Navbar from '../Components/navbar.tsx';
import Footer from '../Components/footer.tsx';
import MyRecipeCard from '../Components/my-recipe-card';
import  MyRecipe  from '../Components/my-recipe-card'; 
import '../Styles/myRecipe.css';

const SomeParentComponent: React.FC = () => {
    const recipe: MyRecipe = {
      FoodName: 'Honey Chicken',
      imageLink: '../src/Images/HoneyChicken.png',
    };

  return (
    <div>
      <Navbar/>
      <h1 className="text-center">My Recipe</h1>
      <div className="content ">
        <MyRecipeCard recipe={recipe} />
        <MyRecipeCard recipe={recipe} />
        <MyRecipeCard recipe={recipe} />
        <MyRecipeCard recipe={recipe} />
        <MyRecipeCard recipe={recipe} />
      </div>
      <Footer />
    </div>
  );
};

export default SomeParentComponent;
