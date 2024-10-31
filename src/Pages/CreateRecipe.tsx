import { Col, Container, Row, Table } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useState } from "react";
import { IngredientProps } from "../Interfaces/ingredients-card-props";
import RecipeSteps from "../Components/recipe-steps";
import { RecipesStepsProps } from "../Interfaces/recipe-steps-props";
import NutrientsContainedProps from "../Interfaces/nutrients-contained-interface-props";



const ingredientsData: IngredientProps[] = [
    {
        IngredientID: "6b2cd1e8-05df-4b8f-833b-45268cde5417",
        IngredientName: "Chicken Breast",
        IngredientWeightPerPorsion: 30,
        NutrientsContained: ["Omega-3", "Minerals"],
        IngredientDescription: "Rich in healthy fats.",
        TotalCalorie: 104.95,
        ImageLink: "",
        IngredientAmount: 2
    },
    {
        IngredientID: "c068a747-844d-447b-b6a7-f303ccea0755",
        IngredientName: "Sweet Potato",
        IngredientWeightPerPorsion: 20,
        NutrientsContained: ["Iron", "Minerals", "Fiber", "Protein", "Fats"],
        IngredientDescription: "Loaded with antioxidants and minerals.",
        TotalCalorie: 171.66,
        ImageLink: "",
        IngredientAmount: 8
    },
    {
        IngredientID: "7cd96b45-6d68-46d0-b083-415fde53669c",
        IngredientName: "Quinoa",
        IngredientWeightPerPorsion: 10,
        NutrientsContained: ["Minerals", "Antioxidants"],
        IngredientDescription: "Great source of complex carbs.",
        TotalCalorie: 192.60,
        ImageLink: "",
        IngredientAmount: 10
    },
    {
        IngredientID: "a00f107a-13c8-47a4-9da1-457fedc1701a",
        IngredientName: "Avocado",
        IngredientWeightPerPorsion: 10,
        NutrientsContained: ["Fats", "Vitamins", "Iron", "Calcium", "Carbohydrates"],
        IngredientDescription: "A lean protein source.",
        TotalCalorie: 260.58,
        ImageLink: "",
        IngredientAmount: 4
    },
    {
        IngredientID: "d41043a3-9362-47ef-82dc-d009af602610",
        IngredientName: "Shrimp",
        IngredientWeightPerPorsion: 20,
        NutrientsContained: ["Protein", "Fiber", "Vitamins", "Iron"],
        IngredientDescription: "High in vitamins and fiber.",
        TotalCalorie: 352.66,
        ImageLink: "",
        IngredientAmount: 1
    },
    {
        IngredientID: "d41043a3-9362-47ef-82dc-d009af602610",
        IngredientName: "Shrimp",
        IngredientWeightPerPorsion: 20,
        NutrientsContained: ["Protein", "Fiber", "Vitamins", "Iron"],
        IngredientDescription: "High in vitamins and fiber.",
        TotalCalorie: 352.66,
        ImageLink: "",
        IngredientAmount: 1
    },
    {
        IngredientID: "d41043a3-9362-47ef-82dc-d009af602610",
        IngredientName: "Shrimp",
        IngredientWeightPerPorsion: 20,
        NutrientsContained: ["Protein", "Fiber", "Vitamins", "Iron"],
        IngredientDescription: "High in vitamins and fiber.",
        TotalCalorie: 352.66,
        ImageLink: "",
        IngredientAmount: 1
    },
    {
        IngredientID: "d41043a3-9362-47ef-82dc-d009af602610",
        IngredientName: "Shrimp",
        IngredientWeightPerPorsion: 20,
        NutrientsContained: ["Protein", "Fiber", "Vitamins", "Iron"],
        IngredientDescription: "High in vitamins and fiber.",
        TotalCalorie: 352.66,
        ImageLink: "",
        IngredientAmount: 1
    },
];

const nutrientsData: NutrientsContainedProps[] = [
    { name: "Calories", amount: 274.52 },
    { name: "Fats", amount: 26.54 },
    { name: "Carbohydrates", amount: 31.27 },
    { name: "Protein", amount: 81.32 },
    { name: "Protein", amount: 47.45 }
];

function CreateRecipe() {
    const [image, setImage] = useState<File | null>(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const [recipeSteps, setRecipeSteps] = useState<RecipesStepsProps[]>([{ stepName: "", stepDescription: "" }]);

    const fileToDataString = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result as string);
        });
    };

    const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList
        setImage(selectedFiles?.[0]);

        if (!selectedFiles) {
            return;
        }
        try {
            const imgUrl = await fileToDataString(selectedFiles?.[0]);
            setPreviewImageUrl(imgUrl);
        } catch (error) {
            console.log(error);
        }
    }

    const handleStepsChange = (recipeDetail: RecipesStepsProps, index: number) => {
        setRecipeSteps((prevStep) => {
            const editedStep = [...prevStep];
            editedStep[index].stepName = recipeDetail.stepName;
            editedStep[index].stepDescription = recipeDetail.stepDescription;
            return editedStep;
        });
    }
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
                                            {ingredientsData.map((data, key) => (
                                                <tr key={key}>
                                                    <td style={{ fontSize: '1.2vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>{data.IngredientName}</td>
                                                    <td style={{ fontSize: '1.2vw', fontWeight: "normal", textAlign: "center", padding: "1vw" }}>{data.IngredientAmount * data.IngredientWeightPerPorsion}</td>
                                                </tr>
                                            ))}
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
                                    {nutrientsData.map((nutrient, key) => (
                                        <td key={key} className="text-center">
                                            <div style={{ padding: "0.5vw" }}></div>
                                            <p>{nutrient.name}</p>
                                            <p>{nutrient.amount} grams</p>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Col>

                {/* Directions */}
                <Col className="dp-flex align-items-center justify-content-center pb-4">
                    <Row style={{ paddingLeft: "9%" }}>
                        <Col>
                            <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                <h2>Directions</h2>
                                <div>
                                    <button onClick={() => setRecipeSteps([...recipeSteps, { stepName: "", stepDescription: "" }])}
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
                        <button onClick={() => {
                            console.log(image);
                            console.log(recipeName);
                            console.log(previewImageUrl);
                            console.log(recipeName);
                        }} style={{ color: "white", padding: "0.8vw", backgroundColor: "black", border: "none", borderRadius: "1vw" }}>Submit</button>
                    </Col>
                </Col>
            </Container>
            <Footer />
        </>
    );
}

export default CreateRecipe;