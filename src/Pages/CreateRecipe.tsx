import axios from 'axios';
import Swal from 'sweetalert2';
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useState , useEffect} from "react";
import { IngredientProps } from "../Interfaces/ingredients-card-props";
import RecipeSteps from "../Components/recipe-steps";
import { RecipesStepsProps } from "../Interfaces/recipe-steps-props";
import NutrientsContainedProps from "../Interfaces/nutrients-contained-interface-props";
import {useNavigate } from 'react-router-dom';

function CreateRecipe() {
    const navigate = useNavigate();
    const [image, setImage] = useState<File | null>(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [ingredientData, setIngredientData] = useState<IngredientProps[]>([]);
    const [nutritionsData, setNutritionInfo] = useState<NutrientsContainedProps[]>([]);
    const [calories, setCalories] = useState(0);
    const [recipeName, setRecipeName] = useState("");
    const [recipeSteps, setRecipeSteps] = useState<RecipesStepsProps[]>([{step_number: 0, step_name: "", description: "" }]);
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;

    const fileToDataString = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result as string);
        });
    };

    const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const file = selectedFiles[0];
            setImage(file);
            try {
                const imgUrl = await fileToDataString(file);
                setPreviewImageUrl(imgUrl);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleStepsChange = (recipeDetail: RecipesStepsProps, index: number) => {
        setRecipeSteps((prevStep) => {
            const editedStep = [...prevStep];
            editedStep[index].step_number = index+1;
            editedStep[index].step_name = recipeDetail.step_name;
            editedStep[index].description = recipeDetail.description;
            return editedStep;
        });
    }
    const [cookTime, setCookTime] = useState(0);
    const [recipeDescription, setRecipeDescription] = useState('');

    const handleCookTimeChange = (event) => {
        setCookTime(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setRecipeDescription(event.target.value);
    };

    const createRecipe = async () => {
        const formData = new FormData();
        const filteredNutritionData = nutritionsData.filter(nutrient => nutrient.category_name !== "Calories");

        formData.append('nutrition_info', JSON.stringify(filteredNutritionData));
        formData.append('recipe_step', JSON.stringify(recipeSteps));
        formData.append('ingredient_list', JSON.stringify(ingredientData));
        formData.append('recipe_image', image);
        formData.append('recipe_name', recipeName);
        formData.append('user_id', loginData.user_id);
        formData.append('recipe_description', recipeDescription);
        formData.append('cook_time', cookTime.toString());
        formData.append('calories', calories)

        try {
            const response = await axios.post('http://localhost:8000/api/recipe/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.error == 1) {
                Swal.fire({
                    title: 'Failed',
                    text: response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    Swal.close();
                });
            } else {
                Swal.fire({
                    title: 'Success',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    Swal.close();
                    localStorage.removeItem('ingredients');
                    navigate('/recipes');
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Failed',
                text: 'Failed to make recipe',
                icon: 'error',
                confirmButtonText: 'OK'
            }).then(() => {
                Swal.close();
            });
            console.log('error ', error);
        }
        return;
    };
    useEffect(() => {
        const ingredientString = localStorage.getItem('ingredients');
        const ingredients = ingredientString ? JSON.parse(ingredientString) : null;
        setIngredientData(ingredients as IngredientProps[]);

        const categoryTotals: Record<string, { amount: number; category_id?: number }> = {}; // Initialize as an object with amounts and category_id

        ingredients?.forEach((ingredient) => {
            const ingredientFactor = ingredient.amount / 10; // Factor to adjust nutrient amount

            ingredient.nutrition_contains.forEach((nutrient: { category_name: string, amount: number; category_id?: number }) => {
                const adjustedAmount = parseFloat((nutrient.amount * ingredientFactor).toFixed(1));
                const categoryName = nutrient.category_name.includes("Vitamin") ? "Vitamins" : nutrient.category_name;

                // Accumulate the total for each category with category_id
                if (categoryTotals[categoryName]) {
                    categoryTotals[categoryName].amount += adjustedAmount;
                } else {
                    categoryTotals[categoryName] = { amount: adjustedAmount, category_id: nutrient.category_id };
                }
            });

            const totalCalories = parseFloat((ingredient.calories * ingredient.amount).toFixed(1));
            setCalories(totalCalories);
            categoryTotals["Calories"] = {
                amount: (categoryTotals["Calories"]?.amount || 0) + totalCalories,
            };
        });

        const result = Object.entries(categoryTotals).map(([name, data]) => ({
            category_name: name,
            amount: parseFloat(data.amount.toFixed(1)),
            category_id: data.category_id
        }));

        console.log("Total amounts per category:", result);
        setNutritionInfo(result as NutrientsContainedProps[]);
    }, []);
    console.log(recipeSteps);

    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Col className="pb-4">
                    <Row>
                        {/* Image Part */}
                        <Col className="d-flex flex-column justify-content-center align-items-center pe-0">
                            <div style={{ width: "65%", height: "65%", marginBottom: "3vw" }}>
                                <input className="mb-3" type="file" name="recipe-image" onChange={(event) => handleImage(event)} />
                                <img src={previewImageUrl === "" ? "../src/Images/RecipePlaceholderImage.png" : previewImageUrl} className="d-block mb-3 img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '1vw' }} />
                            </div>
                            <input placeholder="Recipe Name" type="text" style={{ width: "65%", textAlign: "center", border: "solid 1px black", borderRadius: "5px", height: "30px" }} onChange={(e) => { setRecipeName(e.target.value) }} />
                        </Col>
                        {/* Table Part */}
                        <Col className="ps-0">
                            <Row className="d-flex flex-column justify-content-between align-items-start mb-1">
                                <Col className="text-center" md={10}><h2>Ingredients</h2></Col>
                            </Row>
                            <Row className="d-flex flex-column justify-content-between align-items-start">
                                <Col md={10}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th style={{ fontSize: '1.5vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>Ingredient Name</th>
                                                <th style={{ fontSize: '1.5vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {ingredientData ? (ingredientData.map((data, key) => (
                                            <tr key={key}>
                                                <td style={{ fontSize: '1.2vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>{data.ingredient_name}</td>
                                                <td style={{ fontSize: '1.2vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>{data.amount} gram</td>
                                            </tr>
                                        ))) : <div></div>}

                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* Nutritions Table */}
                <Col className="pb-4" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Col md={10}>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th colSpan={5} className="text-center">
                                        <h3>Nutritional Information</h3>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    {nutritionsData ? (
                                        nutritionsData.map((nutrient, key) => (
                                            <td key={key} className="text-center">
                                                <div style={{ padding: "0.5vw" }}></div>
                                                <p>{nutrient.category_name}</p>
                                                <p>{nutrient.amount} grams</p>
                                            </td>
                                        ))
                                    ) : <div></div>}

                                </tr>
                            </tbody>
                        </Table>

                        {/* Recipe Information Form Below the Table */}
                        <h3 className="mt-4">Recipe Information</h3>
                        <Form>
                            <Form.Group controlId="formCookTime">
                                <Form.Label>Cook Time (in minutes)</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={cookTime}
                                    onChange={handleCookTimeChange}
                                    placeholder="Enter cook time"
                                    min={0}
                                />
                            </Form.Group>

                            <Form.Group controlId="formDescription">
                                <Form.Label>Recipe Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={recipeDescription}
                                    onChange={handleDescriptionChange}
                                    placeholder="Enter recipe description"
                                />
                            </Form.Group>
                        </Form>

                    </Col>
                </Col>

                {/* Directions */}
                <Col className="dp-flex align-items-center justify-content-center pb-4">
                    <Row style={{ paddingLeft: "9%" }}>
                        <Col>
                            <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                <h2>Directions</h2>
                                <div>
                                    <button onClick={() => setRecipeSteps([...recipeSteps, {step_number: 0, step_name: "", description: "" }])}
                                        style={{ backgroundColor: "green", color: "white", marginRight: "0.5vw", border: "none", borderRadius: "1vw", paddingLeft: "0.9vw", paddingRight: "0.9vw" }}>
                                        +
                                    </button>
                                    <button onClick={() => {
                                        const temp = [...recipeSteps];
                                        temp.pop();
                                        setRecipeSteps(temp);
                                    }}
                                        style={{ backgroundColor: "red", color: "white", border: "none", borderRadius: "1vw", paddingLeft: "1vw", paddingRight: "1vw" }}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {recipeSteps.map((item, key) => (
                        <RecipeSteps key={key} index={key + 1} recipeDetail={item} onStepEdit={handleStepsChange} />
                    ))}
                    <Col style={{ width: "90%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: "9.7%" }}>
                        <div
                            className="me-3"
                            style={{ backgroundColor: "black", textAlign: "center", color: "white", borderRadius: "20vw", height: "3.5vw", width: "3.5vw", fontSize: "1.5vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <p className="m-0"></p>
                        </div>
                        <button onClick={createRecipe} style={{ color: "white", padding: "0.8vw", backgroundColor: "black", border: "none", borderRadius: "1vw" }}>Submit</button>
                    </Col>
                </Col>
            </Container>
            <Footer />
        </>
    );
}

export default CreateRecipe;
