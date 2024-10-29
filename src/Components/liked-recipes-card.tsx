import { Card, Col, Row } from "react-bootstrap";
import LikedRecipesCardProps from "../Interfaces/liked-recipes-card-props";

const LikedRecipesCard: React.FC<LikedRecipesCardProps> = ({ FoodName, ImageLink }) => {
    return (
        <>
            <Card className='shadow-sm' style={{ width: '225px' }}>
                <img
                    src={ImageLink}
                    alt={FoodName}
                    className='img-fluid rounded-top w-100 object-fit-none'
                    style={{ height: '15vw' }}
                />
                <Card.Body>
                    <Card.Title className='mb-3 text-center'>
                        {FoodName}
                    </Card.Title>
                    <Row>
                        <Col></Col>
                        <Col>
                            <button className="btn-dark btn rounded-pill px-4 fw-bold" style={{ fontSize: "1vw" }}>
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