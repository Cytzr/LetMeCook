import Footer from "./Components/footer"
import CustomNavbar from "./Components/navbar"
import HomePageCard from "./Components/home-page-card"
import PopularRecipes from "./Components/popular-recipes-card"
import IngredientsCard from "./Components/ingredients-card"

function App() {

  return (
    <>
      <CustomNavbar />
      <IngredientsCard TotalCalorie={13} ImageLink="../src/Images/HoneyChicken.png" IngredientName="Beef" IngredientDescription="Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide." NutrientsContained={["Proteins", "Vitamins", "Fats"]} IngredientWeightPerPorsion={33} />
      <PopularRecipes FoodName="Honey Chicken" ImageLink="../src/Images/HoneyChicken.png" TotalCalorie={240} />
      <HomePageCard FoodDescription="Honey chicken is a delicious dish featuring tender pieces of chicken coated in a sweet and savory honey glaze. The chicken is typically lightly battered and fried to a crisp golden brown, then tossed in a sauce made with honey, soy sauce, garlic, and a hint of spice." FoodName="Honey Chicken" ImageLink="../src/Images/HoneyChicken.png" SavedBy={120} TotalCalorie={240} />
      <Footer />
    </>
  )
}

export default App
