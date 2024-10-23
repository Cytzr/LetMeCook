import Footer from "./Components/footer"
import CustomNavbar from "./Components/navbar"
import HomePageCard from "./Components/home-page-card"

function App() {

  return (
    <>
      <CustomNavbar />
      <HomePageCard FoodDescription="Honey chicken is a delicious dish featuring tender pieces of chicken coated in a sweet and savory honey glaze. The chicken is typically lightly battered and fried to a crisp golden brown, then tossed in a sauce made with honey, soy sauce, garlic, and a hint of spice." FoodName="Honey Chicken" ImageLink="../src/Images/HoneyChicken.png" SavedBy={120} TotalCalorie={240} />
      <Footer />
    </>
  )
}

export default App
