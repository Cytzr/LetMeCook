import { Carousel, Col, Container, Form, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import React, { useState } from "react";
import YouMightLikeCardProps from "../Interfaces/you-might-like-card-props";
import YouMightLikeCard from "../Components/you-might-like-card";
import SearchBar from "../Components/search-bar";

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

const YouMightLikeItems: YouMightLikeCardProps[] = [
    { FoodID: 1, FoodCookTime: 20, FoodDescription: "Start your day with a bowl of wholesome, creamy porridge made from premium grains and cooked to perfection", FoodName: "Bubur Ayam", ImageLink: "../src/Images/HoneyChicken.png" },
    { FoodID: 2, FoodCookTime: 20, FoodDescription: "Start your day with a bowl of wholesome, creamy porridge made from premium grains and cooked to perfection", FoodName: "Bubur Ayam", ImageLink: "../src/Images/HoneyChicken.png" },
    { FoodID: 3, FoodCookTime: 20, FoodDescription: "Start your day with a bowl of wholesome, creamy porridge made from premium grains and cooked to perfection", FoodName: "Bubur Ayam", ImageLink: "../src/Images/HoneyChicken.png" },
    { FoodID: 4, FoodCookTime: 20, FoodDescription: "Start your day with a bowl of wholesome, creamy porridge made from premium grains and cooked to perfection", FoodName: "Bubur Ayam", ImageLink: "../src/Images/HoneyChicken.png" },
];

export default function RecipesPage() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleSelectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value);
    }

    const [searchBarValue, setSearchBarValue] = useState("");

    console.log(searchBarValue);

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
                        <SearchBar onSearchChange={setSearchBarValue} />
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
            <Container fluid>
                <Row>
                    {YouMightLikeItems.map((item, key) => (
                        <Col md={3} className="d-flex align-items-center justify-content-center mb-5 mt-5">
                            <YouMightLikeCard FoodCookTime={item.FoodCookTime} FoodDescription={item.FoodDescription} FoodID={item.FoodID} FoodName={item.FoodName} ImageLink={item.ImageLink} key={key} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
