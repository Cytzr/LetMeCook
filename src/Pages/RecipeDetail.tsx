import Footer from "../Components/footer";
import { RecipesStepsProps } from "../Interfaces/recipe-steps-props";
import CustomNavbar from "../Components/navbar";
import { Col, Container, Row, Table } from "react-bootstrap";
import NutrientsContainedProps from "../Interfaces/nutrients-contained-interface-props";
import { IngredientProps } from "../Interfaces/ingredients-card-props";
import RecipeStepsNoEdit from "../Components/recipe-steps-no-edit";
import { CommentsProps } from "../Interfaces/comments-props";
import CommentCard from "../Components/comment-card";
import { useParams } from "react-router-dom";

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
    }
];

const nutrientsData: NutrientsContainedProps[] = [
    { name: "Calories", amount: 274.52 },
    { name: "Fats", amount: 26.54 },
    { name: "Carbohydrates", amount: 31.27 },
    { name: "Protein", amount: 81.32 },
    { name: "Protein", amount: 47.45 }
];

const comments: CommentsProps[] = [
    {
        commenterID: "user123",
        commenterImage: "../src/Images/RecipePlaceholderImage.png",
        commenterName: "Alice Johnson",
        comment: "This recipe turned out amazing! I added a bit more spice, and it was perfect.",
        isDoctor: false,
    },
    {
        commenterID: "user456",
        commenterImage: "../src/Images/RecipePlaceholderImage.png",
        commenterName: "Dr. Sarah Brown",
        comment: "Great recipe! For a healthier version, consider using Greek yogurt instead of cream.",
        isDoctor: true,
    },
    {
        commenterID: "user789",
        commenterImage: "../src/Images/RecipePlaceholderImage.png",
        commenterName: "Michael Lee",
        comment: "Tried it last night, and my family loved it! Thanks for sharing!",
        isDoctor: false,
    },
    {
        commenterID: "user101",
        commenterImage: "../src/Images/RecipePlaceholderImage.png",
        commenterName: "Dr. Emily White",
        comment: "If anyone has dietary restrictions, you can use coconut cream as a substitute for dairy cream.",
        isDoctor: true,
    },
    {
        commenterID: "user202",
        commenterImage: "../src/Images/RecipePlaceholderImage.png",
        commenterName: "John Doe",
        comment: "Simple and delicious! Will definitely make this again.",
        isDoctor: false,
    }
];


const recipeDetail: RecipesStepsProps[] = [
    {
        stepName: "Marinate the Chicken",
        stepDescription: "In a bowl, mix yogurt, lemon juice, ginger-garlic paste, and spices (like turmeric, cumin, coriander, and garam masala). Coat the chicken pieces in the mixture and let it marinate for at least 30 minutes. "
    },
    {
        stepName: "Prepare the Sauce",
        stepDescription: "Heat some oil or butter in a pan, add chopped onions, and sauté until golden brown. Add ginger-garlic paste, spices (coriander, cumin, chili powder), and cook until fragrant."
    },
    {
        stepName: "Add Tomato Puree",
        stepDescription: "Pour in the tomato puree and cook for a few minutes until the sauce thickens and the oil separates. Stir in some sugar to balance the acidity."
    },
    {
        stepName: "Cook the Chicken",
        stepDescription: "Add the marinated chicken to the sauce and cook until the chicken is fully cooked, about 10-15 minutes. Stir occasionally to ensure even cooking."
    },
    {
        stepName: "Add Cream and Garnish",
        stepDescription: "Reduce the heat, stir in heavy cream, and cook for an additional few minutes. Garnish with fresh cilantro and serve hot with rice or naan."
    }
]

function RecipeDetail() {
    const { recipeId } = useParams();
    //Recipe ID udah bisa langsung diambil disini
    console.log(recipeId);
    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Col className="pb-4">
                    <Row style={{ height: "40vw" }}>
                        {/* Image Part */}
                        <Col className="d-flex flex-column justify-content-center align-items-center pe-0">
                            <div style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img src="../src/Images/RecipePlaceholderImage.png" className="d-block img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '1vw' }} />
                            </div>
                            <h3>Butter Chicken</h3>
                        </Col>
                        {/* Table Part */}
                        <Col className="ps-0">
                            <Row className="d-flex flex-column justify-content-between align-items-start mb-1">
                                <Col className="text-center" md={10}><h2>Ingredients</h2></Col>
                            </Row>
                            <Row>
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
                    <Row style={{ paddingLeft: "9.5%" }}>
                        <Col>
                            <div style={{ display: "flex", gap: "0.5vw", alignItems: "center", marginBottom: "1vw" }}>
                                <h2>Directions</h2>
                            </div>
                        </Col>
                    </Row>
                    {recipeDetail.map((item, key) => (
                        <RecipeStepsNoEdit key={key} index={key + 1} instructionLength={recipeDetail.length} recipeDetail={item} />
                    ))}
                </Col>

                {/* Comments */}
                <Col className="dp-flex align-items-center justify-content-center pb-4">
                    <Row style={{ paddingLeft: "9.5%" }}>
                        <Col>
                            <div style={{ display: "flex", gap: "0.5vw", alignItems: "center", marginBottom: "1vw" }}>
                                <h2>Comments</h2>
                            </div>
                        </Col>
                    </Row>
                    {comments.map((item, key) => (
                        <CommentCard key={key} comment={item.comment} commenterID={item.commenterID} commenterImage={item.commenterImage} isDoctor={item.isDoctor} commenterName={item.commenterName} />
                    ))}
                </Col>
            </Container>
            <Footer />
        </>
    );
}

export default RecipeDetail;