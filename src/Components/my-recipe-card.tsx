import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';
import MyRecipeCardProps from "../Interfaces/my-recipe-card-props.tsx";
import {useNavigate} from "react-router-dom";

const MyRecipeCard: React.FC<MyRecipeCardProps> = ({ FoodName, ImageLink, FoodID, FoodDescription, onRecipeRemoved  }) => {
  const loginDataString = localStorage.getItem('login_data');
  const loginData = loginDataString ? JSON.parse(loginDataString) : null;
  const navigate = useNavigate();
  const removeRecipe = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete this recipe?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.delete(`http://localhost:8000/api/recipe/${FoodID}`);

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
  const showDetail = async () => {
    navigate(`/recipe-detail/${FoodID}`);
    window.scrollTo(0, 0);
  }
  return (
      <>
        <Card className="shadow-sm" style={{ maxWidth: "300px" , height:"380px"}}>
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
            <Row>
              <Col></Col>
              <Col>
                <button
                    className="btn rounded-pill px-4 fw-bold"
                    style={{ fontSize: "1vw", backgroundColor: "green", color: "white" }}
                >
                  Edit
                </button>
              </Col>
              <Col>
                <button
                    className="btn rounded-pill px-4 fw-bold"
                    onClick={removeRecipe}
                    style={{ fontSize: "1vw", backgroundColor: "red", color: "white" }}
                >
                  Delete
                </button>
              </Col>
              <Col></Col>
            </Row>


          </Card.Body>
        </Card>
      </>
  )
}

export default MyRecipeCard;
