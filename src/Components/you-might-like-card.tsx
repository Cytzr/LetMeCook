import { Card, Col } from "react-bootstrap";
import YouMightLikeCardProps from "../Interfaces/you-might-like-card-props";
import { FaClock } from "react-icons/fa";
import AuthenticationCheck from "./authentication-check.tsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


const YouMightLikeCard: React.FC<YouMightLikeCardProps> = ({ ImageLink, FoodName, FoodCookTime, FoodDescription, FoodID }) => {
const navigate = useNavigate();
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
const saveRecipe = async () => {
   AuthenticationCheck(navigate, '/recipes');

    try {
        Swal.showLoading();
        const response = await axios.post('http://localhost:8000/api/recipe/favorite/add', {
            user_id: loginData.user_id,
            recipe_id: FoodID
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
                navigate('/recipes');
            });
        }
    } catch (error) {
        console.error("Error fetching recommended items:", error);
    }

    return;
}
const showDetail = async () => {
    navigate(`/recipe-detail/${FoodID}`);
    window.scrollTo(0, 0);
}
    return (
        <>
            <Card className="shadow-sm" style={{ maxWidth: "300px" , height:"380px"}} >
                <Card.Img onClick={showDetail}
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
                    <Col className="d-flex justify-content-between align-items-center mt-2">
                        <Col className="d-flex justify-content-start align-items-center gap-1">
                            <FaClock />
                            <p className="m-0 fw-semibold">{FoodCookTime} mins</p>
                        </Col>
                        <Col><button className="btn btn-dark rounded-pill px-3" onClick={saveRecipe}>Add Recipe</button></Col>
                    </Col>
                </Card.Body>
            </Card>
        </>
    );
}

export default YouMightLikeCard;
