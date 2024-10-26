import { Card, Col, Row } from "react-bootstrap";
import YouMightLikeCardProps from "../Interfaces/you-might-like-card-props";
import { FaClock } from "react-icons/fa";

const YouMightLikeCard: React.FC<YouMightLikeCardProps> = ({ ImageLink, FoodName, FoodCookTime, FoodDescription, FoodID }) => {
    return (
        <>
            <Card className="shadow-sm" style={{ maxWidth: "300px" }}>
                <Card.Img
                    src={ImageLink}
                    alt={FoodName}
                    className="img-fluid rounded-top w-100 object-fit-cover"
                    style={{ height: "13vw" }}
                />
                <Card.Body style={{ position: "relative" }}>
                    <Card.Title style={{ position: "absolute", top: "-10%", left: "20%" }}>
                        <Col className="text-center fw-bold fs-4 p-1" style={{ backgroundColor: "white" }}>{FoodName}</Col>
                    </Card.Title>
                    <Card.Body style={{}}>
                        <Card.Text>
                            <div className="text-muted fw-semibold" style={{ textAlign: "justify" }}>{FoodDescription}</div>
                        </Card.Text>
                    </Card.Body>
                    <Col className="d-flex justify-content-between align-items-center mt-2">
                        <Col className="d-flex justify-content-start align-items-center gap-1">
                            <FaClock />
                            <p className="m-0 fw-semibold">{FoodCookTime} mins</p>
                        </Col>
                        <Col><button className="btn btn-dark rounded-pill px-3">Add Recipe</button></Col>
                    </Col>
                </Card.Body>
            </Card>
        </>
    );
}

export default YouMightLikeCard;