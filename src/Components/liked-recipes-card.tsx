import { Card, Col, Row } from "react-bootstrap";
import LikedRecipesCardProps from "../Interfaces/liked-recipes-card-props";
import axios from "axios";
import Swal from 'sweetalert2';

const LikedRecipesCard: React.FC<LikedRecipesCardProps> = ({ FoodName, ImageLink, FoodID, FoodDescription, onRecipeRemoved  }) => {
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const removeRecipe = async () => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to remove this recipe from favorites?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove it!',
                cancelButtonText: 'Cancel'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await axios.post(`http://localhost:8000/api/recipe/favorite/remove`, {
                        user_id: loginData.user_id,
                        recipe_id: FoodID
                    });

                    if (response.data.error == 1) {
                        Swal.fire({
                            title: 'Failed',
                            text: response.data.message,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    } else {
                        Swal.fire({
                            title: 'Success',
                            text: response.data.message,
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        onRecipeRemoved();
                    }
                }
            });

        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
    return (
        <>
            <Card className="shadow-sm" style={{ maxWidth: "300px" , height:"380px"}}>
                <Card.Img
                    src={ImageLink}
                    alt={FoodName}
                    className="img-fluid rounded-top w-100 object-fit-cover"
                    style={{ height: "13vw" }}
                />
                <Card.Body style={{ position: "relative" }}>
                    <Card.Title className="m-0 p-0 rounded" style={{ position: "absolute", top: "-10%", left: "10%",right: "10%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <Col className="rounded text-center fw-bold fs-6 p-2" style={{
                            backgroundColor: "white",
                        }}>{FoodName}</Col>
                    </Card.Title>
                    <Card.Body style={{}}>
                        <Card.Text>
                            <div className="text-muted fw-semibold" style={{ textAlign: "justify" , height:"60px", marginTop: "10px"}}>{FoodDescription}</div>
                        </Card.Text>
                    </Card.Body>
                    <Row>
                        <Col></Col>
                        <Col>
                            <button className="btn-dark btn rounded-pill px-4 fw-bold" onClick={removeRecipe} style={{ fontSize: "1vw" }}>
                                Remove
                            </button>
                        </Col>
                        <Col></Col>
                    </Row>


                </Card.Body>
            </Card>
        </>
    )
}

export default LikedRecipesCard;
