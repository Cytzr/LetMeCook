import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/footer";
import CustomNavbar from "../Components/navbar";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillXCircleFill } from "react-icons/bs";
import "../Styles/premium-page.css"
import { useState } from "react";

function PremiumPage() {
    const [Basic, setBasic] = useState(false);
    const [Gourmet, setGourmet] = useState(false);
    const [Michellin, setMichellin] = useState(false);
    return (
        <>
            <CustomNavbar />
            <Container fluid style={{ height: "50vw", backgroundImage: "url(src/Images/premium-background.jpg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Container style={{ height: "40vw", width: "80vw", backgroundColor: "white", borderRadius: "1vw", padding: "2vw" }}>
                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <h3 style={{ fontWeight: "bold", fontSize: "2.5vw" }}>Best Plans For You</h3>
                        <div style={{ display: "flex", gap: "0.3vw", fontWeight: "bolder" }}>
                            <p style={{ color: "grey" }}>Current Plan:</p><p>Basic</p>
                        </div>
                    </Col>

                    {/* 1 */}
                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                        <Col md={4} style={{ width: "23vw", border: "solid 1px black", borderImage: Basic ? "linear-gradient(to top right, red, blue) 1" : "", padding: "2vw" }} onMouseEnter={() => { setBasic(true) }} onMouseLeave={() => { setBasic(false) }}>
                            <Row style={{ paddingBottom: "1vw", borderBottom: "solid 1px grey", marginBottom: "1vw" }}>
                                <Col className="d-flex align-items-left justify-content-center flex-column">
                                    <p className="m-0" style={{ fontSize: "1.25vw", fontWeight: "bold" }}>Basic</p>
                                    <p className="m-0" style={{ color: "grey" }}>Free</p>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '6vw', height: '4vw', backgroundColor: "grey", borderRadius: "0.5vw", fontSize: "1.5vw", color: "white" }}>
                                        0$
                                    </div>
                                </Col>
                            </Row>
                            <Col style={{ height: "15vw", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Find Recipes
                                </div>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Calculate BMI
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <BsFillXCircleFill size={21} color="red" />
                                    Doctor Contact
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <BsFillXCircleFill size={21} color="red" />
                                    Create Recipe
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <BsFillXCircleFill size={21} color="red" />
                                    All Feature Access
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <button className="premium-button">Current Plan</button>
                            </Col>
                        </Col>

                        {/* 2 */}
                        <Col md={4} style={{ width: "23vw", border: "solid 1px black", borderImage: Gourmet ? "linear-gradient(to top right, red, blue) 1" : "", padding: "2vw" }} onMouseEnter={() => { setGourmet(true) }} onMouseLeave={() => { setGourmet(false) }}>
                            <Row style={{ paddingBottom: "1vw", borderBottom: "solid 1px grey", marginBottom: "1vw" }}>
                                <Col className="d-flex align-items-left justify-content-center flex-column">
                                    <p className="m-0" style={{ fontSize: "1.25vw", fontWeight: "bold" }}>Gourmet</p>
                                    <p className="m-0" style={{ color: "grey" }}>Monthly</p>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '6vw', height: '4vw', backgroundColor: "green", borderRadius: "0.5vw", fontSize: "1.5vw", color: "white" }}>
                                        10$
                                    </div>
                                </Col>
                            </Row>
                            <Col style={{ height: "15vw", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Find Recipes
                                </div>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Calculate BMI
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Doctor Contact
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Create Recipe
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    1 Month All Feature Access
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <button className="premium-button">Purchase Plan</button>
                            </Col>
                        </Col>

                        {/* 3 */}
                        <Col md={4} style={{ width: "23vw", border: "solid 1px black", borderImage: Michellin ? "linear-gradient(to top right, red, blue) 1" : "", padding: "2vw", backgroundClip: "padding-box" }} onMouseEnter={() => { setMichellin(true); }} onMouseLeave={() => { setMichellin(false); }}>
                            <Row style={{ paddingBottom: "1vw", borderBottom: "solid 1px grey", marginBottom: "1vw" }}>
                                <Col className="d-flex align-items-left justify-content-center flex-column">
                                    <p className="m-0" style={{ fontSize: "1.25vw", fontWeight: "bold" }}>Michellin Star</p>
                                    <p className="m-0" style={{ color: "grey" }}>Yearly</p>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '6vw', height: '4vw', background: "linear-gradient(to top right, red, blue)", borderRadius: "0.5vw", fontSize: "1.5vw", color: "white" }}>
                                        100$
                                    </div>
                                </Col>
                            </Row>
                            <Col style={{ height: "15vw", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Find Recipes
                                </div>
                                <div style={{ display: "flex", gap: "0.3vw" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Calculate BMI
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Doctor Contact
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    Create Recipe
                                </div>
                                <div style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}>
                                    <IoIosCheckmarkCircle size={25} color="green" />
                                    12 Month All Feature Access
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <button className="premium-button">Purchase Plan</button>
                            </Col>
                        </Col>
                    </Col>
                    <Col>

                    </Col>
                </Container >
            </Container>
            <Footer />
        </>
    )
}
export default PremiumPage;