import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import IngredientsCardProps from "../Interfaces/ingredients-card-props";

const IngredientsCard: React.FC<IngredientsCardProps> = (Data: IngredientsCardProps) => {
    const [Amount, setAmount] = useState(0);

    // Update the local state whenever the Data.Amount changes from props
    useEffect(() => {
        setAmount(Data.IngredientAmount);
    }, [Data.IngredientAmount]);

    const handleAmount = (PrevAmount: number, newAmount: number) => {
        if (PrevAmount > newAmount) {
            Data.onAmountChange({
                IngredientID: Data.IngredientID,
                ImageLink: Data.ImageLink,
                IngredientAmount: newAmount,
                IngredientDescription: Data.IngredientDescription,
                Nutrient: Data.Nutrient,
                IngredientName: Data.IngredientName,
                NutrientsContained: Data.NutrientsContained,
                TotalCalorie: Data.TotalCalorie,
            }, "Reduce");
        } else if (PrevAmount < newAmount) {
            Data.onAmountChange({
                IngredientID: Data.IngredientID,
                ImageLink: Data.ImageLink,
                IngredientAmount: newAmount,
                Nutrient: Data.Nutrient,
                IngredientDescription: Data.IngredientDescription,
                IngredientName: Data.IngredientName,
                NutrientsContained: Data.NutrientsContained,
                TotalCalorie: Data.TotalCalorie,
            }, "Add");
        }
        setAmount(newAmount);
    };

    return (
        <Card className="shadow-sm" style={{ width: "300px", height: "400px" }}>
            <Card.Img
                src={Data.ImageLink}
                alt={Data.IngredientName}
                className="img-fluid rounded-top w-100 object-fit-cover"
                style={{ height: "210px" }}
            />
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col style={{ width: "300px", fontSize: "19px" }}>{Data.IngredientName}</Col>
                        <Col>
                            <div className="fw-bold" style={{ fontSize: "1.5vh", justifyContent: "center", textAlign: "end", alignContent: "center", paddingRight: "0px" }}>
                                {Data.TotalCalorie} Cal
                            </div>
                        </Col>
                    </Row>
                    <Col style={{ width: "300px", fontSize: "13px" }}>{Data.Nutrient} : {Data.NutritionAmount}g per 10g</Col>
                </Card.Title>
                <Card.Body style={{ padding: "0px" }}>
                    <Card.Text>
                        <div className="text-muted fw-semibold" style={{ textAlign: "justify" }}>{Data.IngredientDescription}</div>
                    </Card.Text>
                </Card.Body>
                <Col className="d-flex justify-content-between align-items-center mt-2">
                    <Col>
                        <button className="btn btn-dark rounded-pill" style={{ fontSize: "1vw" }} onClick={() => handleAmount(Amount, Math.max(0, Amount - 10))}>Remove</button>
                    </Col>
                    <Col className="text-center">{Amount}g</Col>
                    <Col>
                        <button className="btn btn-dark rounded-pill px-4" style={{ fontSize: "1vw" }} onClick={() => handleAmount(Amount, Amount + 10)}>Add</button>
                    </Col>
                </Col>
            </Card.Body>
        </Card>
    );
}

export default IngredientsCard;
