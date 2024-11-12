    import '../Styles/login-signup.css'
    import { Container, Col, Row, Button } from 'react-bootstrap';
    import Navbar from '../Components/navbar.tsx'
    import Footer from '../Components/footer.tsx'
    import YouMightLikeCard from "../Components/you-might-like-card.tsx";
    import {useEffect, useState} from "react";
    import {RecipeInterface} from "./RecipesPage.tsx";
    import axios from "axios";
    import {useNavigate} from "react-router-dom";

    function Home() {
        const navigate = useNavigate();
        const [popularItems, setPopularItems] = useState<RecipeInterface[]>([]);


        const goToRecipeList = () => {
            navigate('../recipes');
            window.scrollTo(0, 0);
        }

        const goToIngredientList = () => {
            navigate('../ingredients');
            window.scrollTo(0, 0);
        }
        const getPopularRecipeList = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/recipe/get-popular');
                setPopularItems(response.data.data as RecipeInterface[]);
            } catch (error) {
                console.error("Error fetching recommended items:", error);
            }
        };
        useEffect(() => {
            getPopularRecipeList()
        }, []);
        return (
            <><Navbar></Navbar>
                <section className='bg-1 align-content-center'>
                    <Container className='pt-5 pb-5'>
                        <Col className=''>
                            <div className="col-6 text-white">
                                <h1 className='fw-bold'>LetMeCook</h1>
                                <h3>Cook Smart, Eat Well, Delicious Recipes with Nutrition at Your Fingertips!</h3>
                                <a href="#mainPage"><Button className='border-white btn-dark'>Start Now</Button></a>
                            </div>
                            <div className="col-6"></div>
                        </Col>
                    </Container>
                </section>
                <section className='bg-2 align-content-center'>
                    <Container>
                        <Col>
                            <div className="col-5">
                                <h1 className='fw-bold'>What's Our Purpose?</h1>
                            <p className='font-large'>We started this platform with one goal in mind: to help people discover the joy of cooking. From quick weeknight meals to elaborate feasts, we provide step-by-step recipes, tips, and tricks that make it easier for anyone to create delicious and healthy meals with professional guide.</p>
                            </div>
                            <div className="col-7"></div>
                        </Col>
                        
                    </Container>
                </section>
                <section className='p-5' id='mainPage'>
                    <Container className='bg-3 p-5 border-radius text-white justify-content-around d-flex'>
                            <div className="col-5">
                                <Row className='d-flex justify-content-between'>
                                    <Row className='mb-5'>
                                        <h1 className='fw-bold'>Experience, Flavour and Nutrition</h1>
                                        <p>Fresh, Flavorful, Fit - Your Guide to Healthy Deliciousness!</p>
                                    </Row>
                                    <Col className='d-flex'>
                                        <Button onClick={goToRecipeList} className='border-white border-radius-3 btn-dark btn-spacing'>Find Recipes</Button>
                                        <Button onClick={goToIngredientList} className='border-white border-radius-3 btn-dark'>Create Recipes</Button>
                                    </Col>  
                                </Row>
                            </div>
                            <div className="col-7"></div>
                    </Container>

                    <Container className='pt-5 mt-4'>
                        <h2 className='fw-bold color-dark'>Popular Recipes</h2>
                    </Container>
                    <Container fluid>
                        <Row>
                            {!popularItems ? (
                                <Col className="text-center" style={{marginTop: "20px", marginBottom: "20px"}}>
                                    <h3>No Recipes Available</h3>
                                    <p>Please try again later or check your search criteria.</p>
                                </Col>
                            ) : (
                                popularItems.map((item, key) => (
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
                </section>
            <Footer></Footer></> 
        )
    }

    export default Home;
