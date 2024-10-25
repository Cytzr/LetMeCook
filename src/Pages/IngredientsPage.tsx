// import Footer from "../Components/footer";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import { useState } from "react";
import IngredientButtonProps from "../Interfaces/ingredients-button-props";
import IngredientsCardProps from "../Interfaces/ingredients-card-props";
import IngredientsCard from "../Components/ingredients-card";

const IngredientItems: IngredientButtonProps[] = [
    { Label: "Protein", LinkIcon: "../src/Images/protein-icon.png", ItemNumber: 1 },
    { Label: "Carbo", LinkIcon: "../src/Images/carbo-icon.png", ItemNumber: 2 },
    { Label: "Fiber", LinkIcon: "../src/Images/fiber-icon.png", ItemNumber: 3 },
    { Label: "Vitamin", LinkIcon: "../src/Images/vitamin-icon.png", ItemNumber: 4 },
    { Label: "Fats", LinkIcon: "../src/Images/fats-icon.png", ItemNumber: 5 },
    { Label: "Mineral", LinkIcon: "../src/Images/minerals-icon.png", ItemNumber: 6 },
    { Label: "Water", LinkIcon: "../src/Images/water-icon.png", ItemNumber: 7 },
];

const TempData: IngredientsCardProps[] = [
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"] }
];

function IngredientsPage() {
    const [Selected, setSelected] = useState(1);

    return (
        <>
            <CustomNavbar />
            <Container fluid className="d-flex flex-row align-items-center justify-content-between w-100 px-5 pb-2" style={{ borderBottom: "1px solid rgb(230, 230, 230)" }}>
                {IngredientItems.map((item) => (
                    <button onClick={() => setSelected(item.ItemNumber)} className={`${Selected == item.ItemNumber ? "active" : ""} navbar-button ps-0 pe-2 d-flex flex-row align-items-center justify-content-between`} style={{ maxWidth: "100px", backgroundColor: "white", maxHeight: "30px" }}>
                        <Col className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex flex-row align-items-center justify-content-center px-1">
                                <img src={item.LinkIcon} alt={item.Label} width={20} />
                            </div>
                            {item.Label}
                        </Col>
                    </button>
                ))}
            </Container>
            <Container fluid>
                <Row>
                    {TempData.map((data, key) => (
                        <Col md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5">
                            <IngredientsCard ImageLink={data.ImageLink} IngredientDescription={data.IngredientDescription} IngredientName={data.IngredientName} IngredientWeightPerPorsion={data.IngredientWeightPerPorsion} NutrientsContained={data.NutrientsContained} TotalCalorie={data.TotalCalorie} key={key} />
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* <Footer /> */}
        </>
    )
}

export default IngredientsPage;