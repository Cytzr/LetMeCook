import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import IngredientsCardProps from "../Interfaces/ingredients-card-props";

const IngredientsCard: React.FC<IngredientsCardProps> = (Data: IngredientsCardProps) => {
    const [Amount, setAmount] = useState(0);

    const handleAmount = (PrevAmount: number, Amount: number, Data: IngredientsCardProps) => {
        if (PrevAmount > Amount) {
            Data.onAmountChange({
                IngredientID: Data.IngredientID,
                ImageLink: Data.ImageLink,
                IngredientAmount: Amount,
                IngredientDescription: Data.IngredientDescription,
                IngredientName: Data.IngredientName,
                IngredientWeightPerPorsion: Data.IngredientWeightPerPorsion,
                NutrientsContained: Data.NutrientsContained,
                TotalCalorie: Data.TotalCalorie,
            }, "Reduce");
        }
        else if (PrevAmount < Amount) {
            Data.onAmountChange({
                IngredientID: Data.IngredientID,
                ImageLink: Data.ImageLink,
                IngredientAmount: Amount,
                IngredientDescription: Data.IngredientDescription,
                IngredientName: Data.IngredientName,
                IngredientWeightPerPorsion: Data.IngredientWeightPerPorsion,
                NutrientsContained: Data.NutrientsContained,
                TotalCalorie: Data.TotalCalorie,
            }, "Add");
        }
        setAmount(Amount);

    }

    return <>
        <Card className="shadow-sm" style={{ maxWidth: "300px" }}>
            <Card.Img
                src={Data.ImageLink}
                alt={Data.IngredientName}
                className="img-fluid rounded-top w-100 object-fit-cover"
                style={{ height: "13vw" }}
            />
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>{Data.IngredientName} ({Data.IngredientWeightPerPorsion}g)</Col>
                        <Col>
                            <Col className="d-flex justify-content-end" >
                                {Data.NutrientsContained.map((nutrient, index) => (
                                    index > 2 ? <div></div> : <div className="ms-1 fw-bold" key={index} style={{ fontSize: "1.5vh", justifyContent: "center", textAlign: "center", alignContent: "center" }}>{nutrient}</div>
                                ))}
                            </Col>
                            <div className="fw-bold" style={{ fontSize: "1.5vh", justifyContent: "center", textAlign: "end", alignContent: "center" }}>{Data.TotalCalorie} Cal</div>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Body style={{ padding: "0px" }}>
                    <Card.Text>
                        <div className="text-muted fw-semibold" style={{ textAlign: "justify" }}>{Data.IngredientDescription}</div>
                    </Card.Text>
                </Card.Body>
                <Col className="d-flex justify-content-between align-items-center mt-2">
                    <Col><button className="btn btn-dark rounded-pill" style={{ fontSize: "1vw" }} onClick={() => Amount != 0 ? handleAmount(Amount, Amount - 1, Data) : handleAmount(Amount, 0, Data)}>Remove</button></Col>
                    <Col className="text-center">{Amount}</Col>
                    <Col><button className="btn btn-dark rounded-pill px-4" style={{ fontSize: "1vw" }} onClick={() => handleAmount(Amount, Amount + 1, Data)}>Add</button></Col>
                </Col>
            </Card.Body>
        </Card>
    </>
}

export default IngredientsCard;