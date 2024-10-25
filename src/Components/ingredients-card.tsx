import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

interface IngredientsCardProps {
    IngredientName: string,
    IngredientWeightPerPorsion: number,
    NutrientsContained: string[],
    IngredientDescription: string,
    TotalCalorie: number,
    ImageLink: string,
}

const IngredientsCard: React.FC<IngredientsCardProps> = ({ IngredientName, IngredientDescription, NutrientsContained, ImageLink, TotalCalorie, IngredientWeightPerPorsion }) => {
    const [Amount, setAmount] = useState(0);
    return <>
        <Card className="shadow-sm" style={{ maxWidth: "250px" }}>
            <Card.Img
                src={ImageLink}
                alt={IngredientName}
                className="img-fluid rounded-top w-100 object-fit-none"
                style={{ height: "13vw" }}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: "1vw" }}>
                    <Row>
                        <Col>{IngredientName} ({IngredientWeightPerPorsion}g)</Col>
                        <Col>
                            <Col className="d-flex justify-content-end  " >
                                {NutrientsContained.map((nutrient, index) => (
                                    index > 2 ? <div></div> : <div className="ms-1 fw-bold" key={index} style={{ fontSize: "1vh", justifyContent: "center", textAlign: "center", alignContent: "center" }}>{nutrient}</div>
                                ))}
                            </Col>
                            <div className="fw-bold" style={{ fontSize: "1vh", justifyContent: "center", textAlign: "end", alignContent: "center" }}>{TotalCalorie} Cal</div>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Body style={{ padding: "0px" }}>
                    <Card.Text>
                        <div className="text-muted fw-semibold" style={{ fontSize: "0.9vw", textAlign: "justify" }}>{IngredientDescription}</div>
                    </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <button className="btn btn-dark rounded-pill" style={{ fontSize: "1vw" }} onClick={() => Amount != 0 ? setAmount(Amount - 1) : setAmount(0)}>Remove</button>
                    {Amount}
                    <button className="btn btn-dark rounded-pill px-4" style={{ fontSize: "1vw" }} onClick={() => setAmount(Amount + 1)}>Add</button>
                </div>
            </Card.Body>
        </Card>
    </>
}

export default IngredientsCard;