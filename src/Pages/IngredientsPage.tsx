import Footer from "../Components/footer";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import {ReactNode, useEffect, useState} from "react";
import IngredientsCard from "../Components/ingredients-card";
import { IngredientProps } from "../Interfaces/ingredients-card-props";
import { MdFastfood } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import axios from "axios";

interface CategoryInterface {
    category_id: number;
    category_name: string;
    category_image: string;
}
interface IngredientInterface  {
    ingredient_id : number,
    ingredient_name: string,
    ingredient_image: string,
    amount_per_unit: string,
    category_name: string,
    category_id: number,
    nutrition_per_unit: string,
    calories: number,
    ingredient_description: string,
    amount: number
};

function CalculateCalories(Array: IngredientProps[]): number {
    let totalCalorie = 0;
    for (let index = 0; index < Array.length; index++) {
        // totalCalorie += (Array[index].IngredientAmount * Array[index].IngredientWeightPerPorsion)
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
    const [Selected, setSelected] = useState(7);
    const [ingredientList, setIngredientList] = useState<IngredientInterface[]>([]);
    const [categoryList, setCategoryList] = useState<CategoryInterface[]>([]);
    const [Cart, setCart] = useState<IngredientProps[]>([]);
    const onChangeCategory = (category_id: number) => {
        setSelected(category_id);

        getIngredientList(category_id);
    }
    const cartChange = (Ingredient: IngredientProps, Action: string) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.IngredientID === Ingredient.IngredientID);

            if (existingItemIndex >= 0) {
                // Update the amount of an existing ingredient
                const updatedCart = [...prevCart];
                const existingItem = updatedCart[existingItemIndex];
                const newAmount = Action === "Add" ? existingItem.IngredientAmount + 10 : Math.max(existingItem.IngredientAmount - 10, 0);

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
                return [...prevCart, { ...Ingredient, IngredientAmount: 10 }];
            } else {
                // If action is "Reduce" and the item doesn't exist, do nothing
                return prevCart;
            }
        });
    };
    const getIngredientList = async (categoryId: number) => {
        try {
            const response = await axios.post('http://localhost:8000/api/ingredient/list', {
                category_id: categoryId
            });
            setIngredientList(response.data.data as IngredientInterface[]);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    const getCategoryList = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/ingredient/category-list', {});
            const categories = response.data.data as CategoryInterface[];
            const updatedCategories = [...categories] as CategoryInterface[];

            setCategoryList(updatedCategories);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };

    const postRecipe = () => {
        console.log(Cart);
    }

    useEffect(() => {
        getIngredientList(7);
        getCategoryList();
    }, []);

    return (
        <>
            <Container fluid className="position-relative">
                <CustomNavbar />
                <Container fluid className="text-center">
                    <p onClick={() => setSelected(0)} className="fw-semibold fs-3">Pick Your Ingredients</p>
                </Container>
                <Container fluid className="d-flex flex-row align-items-center justify-content-between w-100 px-5 pb-2" style={{ borderBottom: "1px solid rgb(230, 230, 230)" }}>
                    {categoryList.map((item, key) => (
                        <button key={key} onClick={() => onChangeCategory(item.category_id)} className={`${Selected == item.category_id ? "active" : ""} navbar-button ps-0 pe-2 d-flex flex-row align-items-center justify-content-between`} style={{ maxWidth: "100px", backgroundColor: "white", maxHeight: "30px" }}>
                            <Col className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row align-items-center justify-content-center px-1">
                                    <img src={item.category_image} alt={item.category_name} width={20} />
                                </div>
                                {item.category_name}
                            </Col>
                        </button>
                    ))}
                </Container>
                <Container fluid>
                    <Row>
                        {ingredientList ? (
                            ingredientList.map((data) => {
                                // Find the amount from the cart based on ingredient_id
                                const ingredientInCart = Cart.find(item => item.IngredientID === data.ingredient_id);
                                const amount = ingredientInCart ? ingredientInCart.IngredientAmount : 0; // Default to 0 if not in cart

                                return (
                                    <Col key={data.ingredient_id} md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5">
                                        <IngredientsCard
                                            IngredientID={data.ingredient_id}
                                            ImageLink={data.ingredient_image}
                                            IngredientDescription={data.ingredient_description || "Ingredient Rich Of Nutrition, Good for health and fitness"}
                                            IngredientName={data.ingredient_name}
                                            NutrientsContained={data.category_name}
                                            NutritionAmount={data.amount}
                                            TotalCalorie={data.calories}
                                            onAmountChange={cartChange}
                                            IngredientAmount={amount} // Pass the amount here
                                        />
                                    </Col>
                                );
                            })
                        ) : (
                            <h3 style={{ marginBottom: "300px", marginTop: "200px", textAlign: "center" }}>No Ingredients Available Yet</h3>
                        )}
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
                                <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={postRecipe}>Post Recipe</button>
                            </Col>
                        </Row>
                    </Col>
                </Container>}
            </Container>
        </>
    )
}

export default IngredientsPage;
