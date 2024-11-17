import { Col, Container, Row } from "react-bootstrap";
import ExpertDetailProps from "../Interfaces/expert-detail-props";
import { GoDotFill } from "react-icons/go";
import Footer from "../Components/footer";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import CustomNavbar from "../Components/navbar.tsx";
function ExpertDetail() {
    const { expertId } = useParams();
    const [expert, setExpert] = useState(null);

    const getExpert = async () => {
        const response = await axios.get(`http://localhost:8000/api/expert/detail/${expertId}`);
        const data = response.data.data;
        setExpert(data);
    };
    useEffect(() => {
        getExpert();
    }, []);
    return (
        <>
            <CustomNavbar></CustomNavbar>
            {expert ? ( <Container fluid style={{ marginBottom: "5vw" }}>
                <Col style={{ paddingTop: "4vw" }}></Col>
                <Col style={{ position: "relative", marginBottom: "5vw", paddingLeft: "4vw" }}>
                    <div>
                        <img src="../src/Images/DoctorBanner.png" alt="" style={{ objectFit: 'cover', height: "23vh", width: "90vw", borderRadius: "0.5vw" }} />
                    </div>
                    <div>
                        <img src= {expert.expert_picture ? expert.expert_picture : "../src/Images/Ankit.jpg" } alt="" style={{ borderRadius: "10vw", height: "18vh", width: "18vh", objectFit: "cover", position: "absolute", bottom: -40, left: 90 }} />
                    </div>
                </Col>
                <Col style={{ position: "relative", paddingRight: "5vw", paddingLeft: "4vw", paddingBottom: "2vw" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.2vw" }}>
                        <h2 className="m-0">Dr. {expert.expert_name} Ph.D</h2>
                        <GoDotFill />
                        {expert.expert_job_desc}
                    </div>
                    <div>
                        <h6>{expert.expert_address}</h6>
                    </div>
                </Col>

                <Row style={{ position: "relative", paddingRight: "5vw", paddingLeft: "4vw" }}>
                    <Col md={9} style={{ marginBottom: "1vw" }}>
                        <div>
                            <h4 style={{ marginBottom: "1vw" }}>Doctor Profile</h4>
                        </div>
                        <div>
                            <p style={{ textAlign: "justify" }}>
                                {expert.expert_profile}
                            </p>
                        </div>
                    </Col>
                    <Col style={{ paddingLeft: "5vw" }}>
                        <div>
                            <h4 style={{ marginBottom: "1vw" }}>Medical Specialization</h4>
                        </div>
                        <div style={{ marginBottom: "1vw" }}>
                            {expert.specialization.map((value, key) => (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <GoDotFill /><div key={key}>{value}</div>
                                </div>
                            ))}
                        </div>
                        <Col>
                            <button style={{ color: "white", backgroundColor: "green", width: '100%', height: '4vw', fontWeight: 'bold', border: "none", borderRadius: "1vw" }}>Chat Now</button>
                        </Col>
                    </Col>
                </Row>
            </Container>) : (
                <div className="text-center" style={{marginTop: "8vw", marginBottom: "13vw"}}>
                    <h3>Wait for a moment...</h3>
                </div>
            )
            }

            <Footer/>
        </>
    )
}

export default ExpertDetail;
