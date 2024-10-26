import Footer from "./Components/footer"
import CustomNavbar from "./Components/navbar"
import YouMightLikeCard from "./Components/you-might-like-card"

function App() {
  return (
    <>
      <CustomNavbar />
      <YouMightLikeCard FoodID={"1"} FoodName={"Honey Chicken"} FoodDescription={"Start your day with a bowl of wholesome, creamy porridge made from premium grains and cooked to perfection."} FoodCookTime={20} ImageLink={"../src/Images/HoneyChicken.png"} />
      <Footer />
    </>
  )
}

export default App
