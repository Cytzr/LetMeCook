import { Carousel, Col, Container, Form, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import React, { useState } from "react";

interface RecipesOptionFilter {
    value: string;
    label: string;
}

const options: RecipesOptionFilter[] = [
    { value: "all", label: "All" },
    { value: "beef", label: "Beef" },
    { value: "shrimp", label: "Shrimp" },
    { value: "lamb", label: "Lamb" },
];

interface ReccomendedItemsInterface {
    FoodName: string,
    FoodID: string,
    FoodImage: string,
    FoodDescription: string,
}

const ReccomendedItems: ReccomendedItemsInterface[] = [
    { FoodName: "Burger 1", FoodDescription: "Warm, Juicy and Delicious Burger", FoodID: "This is id1", FoodImage: "../src/Images/Burger.jpg" },
    { FoodName: "Burger 2", FoodDescription: "Warm, Juicy and Delicious Burger", FoodID: "This is id2", FoodImage: "../src/Images/Burger.jpg" },
    { FoodName: "Burger 3", FoodDescription: "Warm, Juicy and Delicious Burger", FoodID: "This is id3", FoodImage: "../src/Images/Burger.jpg" },
];

export default function RecipesPage() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleSelectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value);
    }

    return (
        <>
            <CustomNavbar />
            <Container fluid className="dp-flex justify-content-center align-items-between text-center mb-4">
                <Row className="px-2">
                    <Col className="pt-2">
                        <Form.Select
                            value={selectedFilter}
                            onChange={(event) => {
                                handleSelectedFilter(event);
                            }}
                        >
                            {options.map((item, key) => (
                                <option key={key} value={item.value}>{item.label}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col></Col>
                    <Col>
                        <p className="fw-semibold fs-3 m-0">Popular Recipes</p>
                    </Col>
                    <Col></Col>
                    <Col className="pt-2">
                        Search Bar
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-0 mb-4">
                <Carousel>
                    {ReccomendedItems.map((item, key) => (
                        <Carousel.Item interval={3000} onClick={() => console.log(item.FoodID)} key={key}>
                            <Container fluid className="p-0" style={{ height: '40vh' }}>
                                <img src={item.FoodImage}
                                    className="d-block w-100 h-100"
                                    style={{ objectFit: 'cover' }} />
                            </Container>
                            <Carousel.Caption>
                                <h3>{item.FoodName}</h3>
                                <p>{item.FoodDescription}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <Container fluid className="text-center mb-4">
                <Col>
                    <p className="fw-semibold fs-3 m-0">You Might Like</p>
                </Col>
            </Container>
            <Container fluid className="mb-4">

            </Container>

            <Footer />
        </>
    )
}
