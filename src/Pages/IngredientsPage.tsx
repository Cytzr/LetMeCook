import Footer from "../Components/footer";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import { useState } from "react";
import IngredientButtonProps from "../Interfaces/ingredients-button-props";
import IngredientsCard from "../Components/ingredients-card";
import { IngredientProps } from "../Interfaces/ingredients-card-props";

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

function IngredientsPage() {
    const [Selected, setSelected] = useState(0);

    const [Cart, setCart] = useState<IngredientProps[]>([]);

    // const cartChange = (Ingredient: IngredientProps, Action: string) => {
    //     setCart((prevCart) => {
    //         const existingItemIndex = prevCart.findIndex((item) => item.IngredientID === Ingredient.IngredientID);

    //         if (existingItemIndex >= 0) {
    //             const updatedCart = [...prevCart];
    //             const existingItem = updatedCart[existingItemIndex];
    //             const newAmount = Action === "Add" ? existingItem.IngredientAmount + 1 : Math.max(existingItem.IngredientAmount - 1, 0);

    //             updatedCart[existingItemIndex] = {
    //                 ...existingItem,
    //                 IngredientAmount: newAmount
    //             };
    //             return updatedCart;
    //         } else {
    //             return [
    //                 ...prevCart,
    //                 { ...Ingredient, IngredientAmount: Action === "Add" ? 1 : 0 }
    //             ];
    //         }
    //     });
    // }

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


    console.log(Cart);

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
                <Container
                    fluid
                    className="sticky-footer d-flex align-items-center justify-content-center rounded-pill"
                    style={{
                        position: 'fixed',
                        bottom: "2%",
                        left: "50%",
                        transform: 'translateX(-50%)',
                        translate: 'translateX(-50%)',
                        width: '90%',
                        height: '10%',
                        backgroundColor: '#333',
                        color: 'white',
                        zIndex: 1000,
                    }}
                >
                    <p className="m-0">I am a sticky footer that follows as you scroll!</p>
                </Container>
            </Container>
        </>
    )
}

export default IngredientsPage;