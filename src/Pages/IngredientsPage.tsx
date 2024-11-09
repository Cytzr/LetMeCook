import Footer from "../Components/footer";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import { ReactNode, useState } from "react";
import IngredientButtonProps from "../Interfaces/ingredients-button-props";
import IngredientsCard from "../Components/ingredients-card";
import { IngredientProps } from "../Interfaces/ingredients-card-props";
import { MdFastfood } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { useNavigate } from 'react-router-dom'; 

const IngredientItems: IngredientButtonProps[] = [
    { Label: "Protein", LinkIcon: "../src/Images/protein-icon.png", ItemNumber: 1 },
    { Label: "Carbo", LinkIcon: "../src/Images/carbo-icon.png", ItemNumber: 2 },
    { Label: "Fiber", LinkIcon: "../src/Images/fiber-icon.png", ItemNumber: 3 },
    { Label: "Vitamin", LinkIcon: "../src/Images/vitamin-icon.png", ItemNumber: 4 },
    { Label: "Fats", LinkIcon: "../src/Images/fats-icon.png", ItemNumber: 5 },
    { Label: "Mineral", LinkIcon: "../src/Images/minerals-icon.png", ItemNumber: 6 },
    { Label: "Water", LinkIcon: "../src/Images/water-icon.png", ItemNumber: 7 },
];

const TempData = [
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "1" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "2" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "3" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "4" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "5" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "6" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "7" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "8" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "9" },
    { IngredientWeightPerPorsion: 33, TotalCalorie: 13, ImageLink: "../src/Images/HoneyChicken.png", IngredientName: "Beef", IngredientDescription: "Beef is the meat derived from cattle and is one of the most widely consumed proteins worldwide.", NutrientsContained: ["Proteins", "Vitamins", "Fats"], IngredientID: "10" }
];

function CalculateCalories(Array: IngredientProps[]): number {
    let totalCalorie = 0;
    for (let index = 0; index < Array.length; index++) {
        totalCalorie += (Array[index].IngredientAmount * Array[index].IngredientWeightPerPorsion)
    }
    return totalCalorie;
}

function FindUniqueNutrients(Array: IngredientProps[]): string[] {
    const Nutrient: string[] = [];

    for (let index = 0; index < Array.length; index++) {
        for (let index2 = 0; index < Array[index].NutrientsContained.length; index2++) {
            if (!Nutrient.find((item) => item === Array[index].NutrientsContained[index2])) {
                Nutrient.push(Array[index].NutrientsContained[index2]);
            }
        }
    }
    return Nutrient;
}

function IngredientsPage() {
    const navigate = useNavigate();

    const [Selected, setSelected] = useState(0);

    const [Cart, setCart] = useState<IngredientProps[]>([]);

    const cartChange = (Ingredient: IngredientProps, Action: string) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.IngredientID === Ingredient.IngredientID);

            if (existingItemIndex >= 0) {
                // Update the amount of an existing ingredient
                const updatedCart = [...prevCart];
                const existingItem = updatedCart[existingItemIndex];
                const newAmount = Action === "Add" ? existingItem.IngredientAmount + 1 : Math.max(existingItem.IngredientAmount - 1, 0);

                // Update the ingredient with the new amount
                if (newAmount > 0) {
                    updatedCart[existingItemIndex] = {
                        ...existingItem,
                        IngredientAmount: newAmount,
                    };
                    return updatedCart;
                } else {
                    // Remove the ingredient if the amount reaches 0
                    return updatedCart.filter((item) => item.IngredientID !== Ingredient.IngredientID);
                }
            } else if (Action === "Add") {
                // Add the ingredient to the cart if it doesn't already exist and action is "Add"
                return [...prevCart, { ...Ingredient, IngredientAmount: 1 }];
            } else {
                // If action is "Reduce" and the item doesn't exist, do nothing
                return prevCart;
            }
        });
    };

    return (
        <>
            <Container fluid className="position-relative">
                <CustomNavbar />
                <Container fluid className="text-center">
                    <p onClick={() => setSelected(0)} className="fw-semibold fs-3">Pick Your Ingredients</p>
                </Container>
                <Container fluid className="d-flex flex-row align-items-center justify-content-between w-100 px-5 pb-2" style={{ borderBottom: "1px solid rgb(230, 230, 230)" }}>
                    {IngredientItems.map((item, key) => (
                        <button key={key} onClick={() => setSelected(item.ItemNumber)} className={`${Selected == item.ItemNumber ? "active" : ""} navbar-button ps-0 pe-2 d-flex flex-row align-items-center justify-content-between`} style={{ maxWidth: "100px", backgroundColor: "white", maxHeight: "30px" }}>
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
                            <Col key={key} md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5">
                                <IngredientsCard
                                    IngredientID={data.IngredientID}
                                    ImageLink={data.ImageLink}
                                    IngredientDescription={data.IngredientDescription}
                                    IngredientName={data.IngredientName}
                                    IngredientWeightPerPorsion={data.IngredientWeightPerPorsion}
                                    NutrientsContained={data.NutrientsContained}
                                    TotalCalorie={data.TotalCalorie}
                                    onAmountChange={cartChange}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer />
                {Cart.length == 0 ? <div></div> : <Container
                    fluid
                    className="sticky-footer d-flex align-items-center justify-content-between rounded"
                    style={{
                        position: 'fixed',
                        bottom: "3%",
                        left: "50%",
                        transform: 'translateX(-50%)',
                        translate: 'translateX(-50%)',
                        width: '50%',
                        height: '10%',
                        backgroundColor: '#333',
                        color: 'white',
                        zIndex: 1000,
                    }}
                >
                    <Col>
                        <Row>
                            <Col className="d-flex align-items-center justify-content-start">
                                <MdFastfood />
                                <div style={{ width: "0.5vw" }}></div>
                                Calories: {CalculateCalories(Cart)} Cal
                                <div style={{ width: "0.25vw" }}></div>
                                <GoTriangleDown onClick={() => { }} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="d-flex align-items-center justify-content-end">
                                <button type="button" className="btn btn-secondary rounded-pill px-4">Find Recipe</button>
                                <div style={{ width: "1vw" }}></div>
                                <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={() => navigate('/MyRecipe')}>Post Recipe</button>
                            </Col>
                        </Row>
                    </Col>
                </Container>}
            </Container>
        </>
    )
}

export default IngredientsPage;