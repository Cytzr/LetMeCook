import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import LikedRecipesCard from "../Components/liked-recipes-card.tsx";

export interface RecipeInterface {
    recipe_name: string;
    recipe_id: number;
    recipe_image: string | null;
    recipe_description: string | null;
    cook_time: number;
    calories: number;
}
export default function LikedRecipe() {
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const [recipeList, setRecipeList] = useState<RecipeInterface[]>([]);

    const getRecipeList = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/recipe/favorite/${loginData.user_id}`, {
            });

            setRecipeList(response.data.data as RecipeInterface[]);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };


    useEffect(() => {
        getRecipeList();
    }, []);
    return (
        <>
            <CustomNavbar />
            <Container fluid className="text-center mb-4">
                {recipeList.length > 0 ? (
                    <Col>
                        <p className="fw-semibold fs-3 m-0">Liked Recipe</p>
                    </Col>
                ) : null}

            </Container>
            <Container fluid>
                <Row>
                    {recipeList.length == 0 ? (
                        <Col className="text-center" style={{marginTop: "100px", marginBottom: "160px"}}>
                            <h3>No Favorite Recipe Yet</h3>
                            <p>Add Your Favorite Recipe at the recipe list</p>
                        </Col>
                    ) : (
                        recipeList.map((item, key) => (
                            <Col md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5" key={key}>
                                <LikedRecipesCard
                                    FoodID={item.recipe_id}
                                    FoodName={item.recipe_name}
                                    FoodDescription={item.recipe_description ? item.recipe_description : "Start your day with this delightful meal"}
                                    ImageLink={item.recipe_image ? item.recipe_image : '../src/Images/Burger.jpg'}
                                    onRecipeRemoved={getRecipeList}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
