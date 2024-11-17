import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Footer from "../Components/footer";
import CustomNavbar from "../Components/navbar";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillXCircleFill } from "react-icons/bs";
import "../Styles/premium-page.css"
import { useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";
function PremiumPage() {
    const [Basic, setBasic] = useState(false);
    const [Gourmet, setGourmet] = useState(false);
    const [Michellin, setMichellin] = useState(false);
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();
    const setPremium = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user/set-premium/${loginData.user_id}`);

            if (response.data.error === 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Premium status has been set successfully!',
                }).then(() => {
                    // Save data to local storage
                    localStorage.setItem('login_data', JSON.stringify(response.data.data));

                    // Navigate and reload the page only after the success modal is closed
                    navigate('../');
                    window.location.reload();
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while setting premium status.',
                });
                return;
            }
            setShowModal(false);
        } catch (error) {
            console.error("Error fetching recommended items:", error);
        }
    };
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
                                <button className="premium-button" onClick={() => setShowModal(true)}>Purchase Plan</button>
                            </Col>
                        </Col>
                    </Col>
                </Container >

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header>
                        <Modal.Title style={{ width: "100%", textAlign: "center" }}>Please Finish Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col>
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={"https://youtu.be/dQw4w9WgXcQ?si=OQy-HubX5nssX7GW"}
                                viewBox={`0 0 256 256`}
                            />
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={() => setPremium()}>
                            Finish Payment
                        </Button>
                        <Button variant="danger" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </>
    )
}
export default PremiumPage;
