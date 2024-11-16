import React, { useState } from "react";
import { Form, Button, Card, Alert, Container, Row, Col } from "react-bootstrap";

const BMICalculator: React.FC = () => {
    const [weight, setWeight] = useState<number | "">("");
    const [height, setHeight] = useState<number | "">("");
    const [bmi, setBMI] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");

    const calculateBMI = (e: React.FormEvent): void => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const calculatedBMI = parseFloat(
                (weight / (heightInMeters ** 2)).toFixed(2)
            );
            setBMI(calculatedBMI);

            // Determine BMI category
            if (calculatedBMI < 18.5) {
                setCategory("Underweight");
            } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
                setCategory("Normal weight");
            } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
                setCategory("Overweight");
            } else {
                setCategory("Obesity");
            }
        }
    };

    const resetForm = (): void => {
        setWeight("");
        setHeight("");
        setBMI(null);
        setCategory("");
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h3 className="text-center">BMI Calculator</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={calculateBMI}>
                                <Form.Group className="mb-3" controlId="formWeight">
                                    <Form.Label>Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter your weight"
                                        value={weight}
                                        onChange={(e) => setWeight(Number(e.target.value) || "")}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formHeight">
                                    <Form.Label>Height (cm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter your height"
                                        value={height}
                                        onChange={(e) => setHeight(Number(e.target.value) || "")}
                                    />
                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary" type="submit">
                                        Calculate BMI
                                    </Button>
                                    <Button variant="secondary" onClick={resetForm}>
                                        Reset
                                    </Button>
                                </div>
                            </Form>
                            {bmi && (
                                <Alert className="mt-4" variant="info">
                                    <strong>Your BMI: {bmi}</strong> <br />
                                    <strong>Category: {category}</strong>
                                </Alert>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BMICalculator;
