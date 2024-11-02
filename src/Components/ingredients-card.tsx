import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import IngredientsCardProps from "../Interfaces/ingredients-card-props";

const IngredientsCard: React.FC<IngredientsCardProps> = ({ IngredientName, IngredientDescription, NutrientsContained, ImageLink, TotalCalorie, IngredientWeightPerPorsion }) => {
    const [Amount, setAmount] = useState(0);
    return <>
        <Card className="shadow-sm" style={{ maxWidth: "300px" }}>
            <Card.Img
                src={ImageLink}
                alt={IngredientName}
                className="img-fluid rounded-top w-100 object-fit-cover"
                style={{ height: "13vw" }}
            />
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>{IngredientName} ({IngredientWeightPerPorsion}g)</Col>
                        <Col>
                            <Col className="d-flex justify-content-end" >
                                {NutrientsContained.map((nutrient, index) => (
                                    index > 2 ? <div></div> : <div className="ms-1 fw-bold" key={index} style={{ fontSize: "1.5vh", justifyContent: "center", textAlign: "center", alignContent: "center" }}>{nutrient}</div>
                                ))}
                            </Col>
                            <div className="fw-bold" style={{ fontSize: "1.5vh", justifyContent: "center", textAlign: "end", alignContent: "center" }}>{TotalCalorie} Cal</div>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Body style={{ padding: "0px" }}>
                    <Card.Text>
                        <div className="text-muted fw-semibold" style={{ textAlign: "justify" }}>{IngredientDescription}</div>
                    </Card.Text>
                </Card.Body>
                <Col className="d-flex justify-content-between align-items-center mt-2">
                    <Col><button className="btn btn-dark rounded-pill" style={{ fontSize: "1vw" }} onClick={() => Amount != 0 ? setAmount(Amount - 1) : setAmount(0)}>Remove</button></Col>
                    <Col className="text-center">{Amount}</Col>
                    <Col><button className="btn btn-dark rounded-pill px-4" style={{ fontSize: "1vw" }} onClick={() => setAmount(Amount + 1)}>Add</button></Col>
                </Col>
            </Card.Body>
        </Card>
    </>
}

export default IngredientsCard;