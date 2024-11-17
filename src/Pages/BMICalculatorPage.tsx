import React, { useState } from "react";
import { Form, Button, Card, Modal, Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/footer";
import CustomNavbar from "../Components/navbar";

type Gender = "male" | "female" | "";

const BMICalculator: React.FC = () => {
    const [weight, setWeight] = useState<number | "">("");
    const [height, setHeight] = useState<number | "">("");
    const [gender, setGender] = useState<Gender>("");
    const [bmi, setBMI] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);

    const calculateBMI = (e: React.FormEvent): void => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100;
            const calculatedBMI = parseFloat(
                (weight / (heightInMeters ** 2)).toFixed(2)
            );
            setBMI(calculatedBMI);

            let bmiCategory = "";
            if (calculatedBMI < 18.5) {
                bmiCategory = "Underweight";
            } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
                bmiCategory = "Normal weight";
            } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
                bmiCategory = "Overweight";
            } else {
                bmiCategory = "Obesity";
            }
            if (gender === "male") {
                bmiCategory +=
                    ". Men generally have higher muscle mass, so BMI might slightly overestimate fat.";
            } else if (gender === "female") {
                bmiCategory +=
                    ". Women tend to have higher fat percentage, so BMI might slightly underestimate fat.";
            }

            setCategory(bmiCategory);
            setShowModal(true);
        }
    };

    const resetForm = (): void => {
        setWeight("");
        setHeight("");
        setGender("");
        setBMI(null);
        setCategory("");
        setShowModal(false);
    };

    return (
        <>
            <CustomNavbar />
            <Container >
                <Row className="justify-content-center align-items-center" style={{ height: "90vh" }}>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <h3 className="text-center">BMI Calculator</h3>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={calculateBMI}>
                                    <Form.Group className="mb-3" controlId="formGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value as Gender)}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Form.Select>
                                    </Form.Group>
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
                                        <Button variant="success" type="submit">
                                            Calculate BMI
                                        </Button>
                                        <Button variant="secondary" onClick={resetForm}>
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>BMI Results</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {bmi !== null && (
                            <>
                                <p>
                                    <strong>Your BMI:</strong> {bmi}
                                </p>
                                <p>
                                    <strong>Category:</strong> {category}
                                </p>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="success" onClick={resetForm}>
                            Reset
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </>
    );
};

export default BMICalculator;
