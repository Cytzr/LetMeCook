// import Footer from "../Components/footer";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import { useState } from "react";

interface IngredientButtonProps {
    Label: string,
    LinkIcon: string,
    ItemNumber: number,
}

const IngredientItems: IngredientButtonProps[] = [
    { Label: "Protein", LinkIcon: "../src/Images/protein-icon.png", ItemNumber: 1 },
    { Label: "Carbo", LinkIcon: "../src/Images/carbo-icon.png", ItemNumber: 2 },
    { Label: "Fiber", LinkIcon: "../src/Images/fiber-icon.png", ItemNumber: 3 },
    { Label: "Vitamin", LinkIcon: "../src/Images/vitamin-icon.png", ItemNumber: 4 },
    { Label: "Fats", LinkIcon: "../src/Images/fats-icon.png", ItemNumber: 5 },
    { Label: "Mineral", LinkIcon: "../src/Images/minerals-icon.png", ItemNumber: 6 },
    { Label: "Water", LinkIcon: "../src/Images/water-icon.png", ItemNumber: 7 },
];

function IngredientsPage() {
    const [Selected, setSelected] = useState(1);

    return (
        <>
            <CustomNavbar />
            <Container fluid className="d-flex flex-row align-items-center justify-content-between w-100 px-5">
                {IngredientItems.map((item) => (
                    <Row>
                        <button onClick={() => setSelected(item.ItemNumber)} className={`${Selected == item.ItemNumber ? "active" : ""} navbar-button ps-0 pe-2 d-flex flex-row align-items-center justify-content-between`} style={{ maxWidth: "100px", backgroundColor: "white", maxHeight: "30px" }}>
                            <Col className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row align-items-center justify-content-center px-1">
                                    <img src={item.LinkIcon} alt={item.Label} width={20} />
                                </div>
                                {item.Label}
                            </Col>
                        </button>
                    </Row>
                ))}
            </Container>
            {/* <Footer /> */}
        </>
    )
}

export default IngredientsPage;