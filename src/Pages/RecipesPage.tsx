import { Carousel, Col, Container, Form, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import React, { useState, useEffect } from "react";
import YouMightLikeCard from "../Components/you-might-like-card";
import axios from "axios";

interface CategoryInterface {
    category_id: number;
    category_name: string;
}
interface RecipeInterface {
    recipe_name: string;
    recipe_id: number;
    recipe_image: string | null;
    recipe_description: string | null;
    cook_time: number;
    calories: number;
}
export default function RecipesPage() {
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [popularItems, setPopularItems] = useState<RecipeInterface[]>([]);
    const [recipeList, setRecipeList] = useState<RecipeInterface[]>([]);
    const [categoryList, setCategoryList] = useState<CategoryInterface[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        getRecipeList(selectedFilter, value);
    };
    const handleSelectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const currentValue = parseInt(e.target.value);
        setSelectedFilter(currentValue);

        getRecipeList(currentValue, searchTerm);
    };
    const getPopularRecipeList = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipe/get-popular');
            setPopularItems(response.data.data as RecipeInterface[]);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    const getRecipeList = async (category_id : number, search: string) => {
        try {
            const response = await axios.post('http://localhost:8000/api/recipe/all', {
                category_id: category_id !== 0 ? category_id : null,
                search: search,
            });
            if (response.data.error === 1) {
                setCategoryList([]);
            }
            setRecipeList(response.data.data as RecipeInterface[]);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    const getCategoryList = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/ingredient/category-list', {});
            const categories = response.data.data as CategoryInterface[];
            const updatedCategories = [{ category_id: null, category_name: "All" }, ...categories] as CategoryInterface[];

            setCategoryList(updatedCategories);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };

    useEffect(() => {
        getPopularRecipeList()
        getRecipeList(0, "");
        getCategoryList();
    }, []);
    return (
        <>
            <CustomNavbar />
            <Container fluid className="dp-flex justify-content-center align-items-between text-center mb-4">
                <Row className="px-2">
                    <Col className="pt-2">
                        <Form.Select
                            value={selectedFilter}
                            onChange={(event) => {
                                handleSelectedFilter(event);
                            }}
                        >
                            {categoryList.map((item, key) => (
                                <option key={key} value={item.category_id}>{item.category_name}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col></Col>
                    <Col>
                        <p className="fw-semibold fs-3 m-0">Popular Recipes</p>
                    </Col>
                    <Col></Col>
                    <Col className="pt-2">
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-0 mb-4">
                <Carousel>
                    {popularItems.map((item, key) => (
                        <Carousel.Item interval={3000} onClick={() => console.log(item.recipe_id)} key={key}>
                            <Container fluid className="p-0" style={{ height: '40vh' }}>
                                <img src={item.recipe_image ? item.recipe_image : '../src/Images/Burger.jpg'}
                                     className="d-block w-100 h-100"
                                    style={{ objectFit: 'cover' }} />
                            </Container>
                            <Carousel.Caption>
                                <h3>{item.recipe_name}</h3>
                                <p>{item.recipe_description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <Container fluid className="text-center mb-4">
                {recipeList? (
                    <Col>
                        <p className="fw-semibold fs-3 m-0">You Might Like</p>
                    </Col>
                ) : null}

            </Container>
            <Container fluid>
                <Row>
                    {!recipeList ? (
                        <Col className="text-center" style={{marginTop: "20px", marginBottom: "20px"}}>
                            <h3>No Recipes Available</h3>
                            <p>Please try again later or check your search criteria.</p>
                        </Col>
                    ) : (
                        recipeList.map((item, key) => (
                            <Col md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5" key={key}>
                                <YouMightLikeCard
                                    FoodCookTime={item.cook_time}
                                    FoodDescription={item.recipe_description ? item.recipe_description : "Start your day with this delightful meal"}
                                    FoodID={item.recipe_id}
                                    FoodName={item.recipe_name}
                                    ImageLink={item.recipe_image ? item.recipe_image : '../src/Images/Burger.jpg'}
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
