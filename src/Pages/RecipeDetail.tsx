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
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function RecipeDetail() {
    const { recipeId } = useParams();
    const loginDataString = localStorage.getItem('login_data');
    const [commentText, setCommentText] = useState('');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const [forum, setForum] = useState<CommentsProps[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [ingredientData, setIngredientData] = useState<IngredientProps[]>([]);
    const [nutritionsData, setNutritionInfo] = useState<NutrientsContainedProps[]>([]);
    const [recipeName, setRecipeName] = useState("");
    const [recipeSteps, setRecipeSteps] = useState<RecipesStepsProps[]>([{step_number: 0, step_name: "", description: "" }]);
    const [recipe, setRecipe] = useState(null);
    const getIngredientList = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/recipe/detail', {
                recipe_id: recipeId,
                user_id:  loginData.user_id
            });
            const data = response.data;
            setRecipe(data);
            setImage(data.recipe_image);
            setIngredientData(data.ingredient_list);
            const calory = {
                name: "Calories",
                amount: data.calories
            }
            setNutritionInfo([calory, ...data.nutrition_info]);
            setRecipeSteps(data.recipe_step);
            setRecipeName(data.recipe_name);

        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    const getForum = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/forum/get-comment', {
                recipe_id: recipeId,
                user_id:  loginData.user_id
            });
            const data = response.data.data;
            setForum(data as CommentsProps[]);

            console.log(forum);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    const addComment = async () => {
        if (!commentText.trim()) {
            Swal.fire({
                title: 'Warning',
                text: 'Comment cannot be empty!',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/forum/post', {
                recipe_id: parseInt(recipeId),
                comment: commentText,
                user_id: loginData.user_id
            });

            if (response.data.error === 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Your comment has been posted!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    getForum();
                    setCommentText('');
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.data.message || 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };
    useEffect(() => {
        getIngredientList();
        getForum();
    }, []);
    return (
        <>
            {recipe ? (
                <>
                    <CustomNavbar />
                    <Container fluid>
                        {/* Image and Recipe Name */}
                        <Col className="pb-4">
                            <Row style={{ height: "40vw" }}>
                                {/* Image Part */}
                                <Col className="d-flex flex-column justify-content-center align-items-center pe-0">
                                    <div
                                        style={{
                                            width: "80%",
                                            height: "80%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <img
                                            src={image}
                                            className="d-block img-fluid"
                                            style={{ objectFit: "cover", borderRadius: "1vw" }}
                                        />
                                    </div>
                                    <h3>{recipeName ? recipeName : "Recipe Name"}</h3>
                                </Col>
                                {/* Table Part */}
                                <Col className="ps-0">
                                    <Row className="d-flex flex-column justify-content-between align-items-start mb-1">
                                        <Col className="text-center" md={10}>
                                            <h2>Ingredients</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={10}>
                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th
                                                        style={{
                                                            fontSize: "1.5vw",
                                                            fontWeight: "normal",
                                                            textAlign: "center",
                                                            padding: "1vw"
                                                        }}
                                                    >
                                                        Ingredient Name
                                                    </th>
                                                    <th
                                                        style={{
                                                            fontSize: "1.5vw",
                                                            fontWeight: "normal",
                                                            textAlign: "center",
                                                            padding: "1vw"
                                                        }}
                                                    >
                                                        Amount
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {ingredientData ? (
                                                    ingredientData.map((data, key) => (
                                                        <tr key={key}>
                                                            <td
                                                                style={{
                                                                    fontSize: "1.2vw",
                                                                    fontWeight: "normal",
                                                                    textAlign: "center",
                                                                    padding: "1vw"
                                                                }}
                                                            >
                                                                {data.ingredient_name}
                                                            </td>
                                                            <td
                                                                style={{
                                                                    fontSize: "1.2vw",
                                                                    fontWeight: "normal",
                                                                    textAlign: "center",
                                                                    padding: "1vw"
                                                                }}
                                                            >
                                                                {data.amount}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <div></div>
                                                )}
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        {/* Nutritions Table */}
                        <Col
                            className="pb-4"
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
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
                                                    <p>{nutrient.name}</p>
                                                    <p>{nutrient.amount} grams</p>
                                                </td>
                                            ))
                                        ) : (
                                            <div></div>
                                        )}
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Col>

                        {/* Directions */}
                        <Col className="dp-flex align-items-center justify-content-center pb-4">
                            <Row style={{ paddingLeft: "9.5%" }}>
                                <Col>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.5vw",
                                            alignItems: "center",
                                            marginBottom: "1vw"
                                        }}
                                    >
                                        <h2>Directions</h2>
                                    </div>
                                </Col>
                            </Row>
                            {recipeSteps ? (
                                recipeSteps.map((item, key) => (
                                    <RecipeStepsNoEdit
                                        key={key}
                                        index={key + 1}
                                        instructionLength={recipeSteps.length}
                                        recipeDetail={item}
                                    />
                                ))
                            ) : (
                                <div></div>
                            )}
                        </Col>

                        {/* Comments */}
                        <Col className="dp-flex align-items-center justify-content-center pb-4">
                            <Row style={{paddingLeft: "9.5%"}}>
                                <Col>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.5vw",
                                            alignItems: "center",
                                            marginBottom: "1vw"
                                        }}
                                    >
                                        <h2>Comments</h2>
                                    </div>
                                </Col>
                            </Row>
                            {forum.length > 0 ? (
                                forum.map((item, key) => (
                                    <CommentCard
                                        key={key}
                                        forum_comment_id={item.forum_comment_id}
                                        comment={item.comment}
                                        user_id={item.user_id}
                                        commenterImage={item.commenterImage ? item.commenterImage : "../src/Images/RecipePlaceHolderImage.png"}
                                        is_expert={item.is_expert}
                                        username={item.username}
                                        likes={item.likes}
                                        like_amount={item.like_amount}
                                        onLikeDislike={getForum}
                                    />
                                ))
                            ) : (<div></div>)}

                        </Col>
                        {recipe.user_id != loginData.user_id ? (
                                <Col style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <div style={{marginTop: "1vw", width: "80%"}}>
                                  <textarea
                                      value={commentText}
                                      onChange={(e) => setCommentText(e.target.value)}
                                      placeholder="Write a comment..."
                                      style={{
                                          width: "100%",
                                          height: "5vw",
                                          padding: "0.5vw",
                                          borderRadius: "5px",
                                          border: "1px solid #ccc",
                                          resize: "none"
                                      }}
                                  ></textarea>
                                        <button
                                            className="btn btn-primary"
                                            style={{
                                                marginTop: "0.5vw",
                                                marginBottom: "0.5vw",
                                                padding: "0.5vw 1vw",
                                                borderRadius: "5px",
                                                fontSize: "1vw"
                                            }}
                                            onClick={addComment}
                                        >
                                            Post Comment
                                        </button>
                                    </div>
                                </Col>
                            ) :
                            (<div></div>)
                        }

                    </Container>
                    <Footer/>
                </>
            ) : (
                <div className="text-center" style={{marginTop: "20vw"}}>
                    <h3>Wait for a moment...</h3>
                </div>
            )}
        </>
    );
}

export default RecipeDetail;
