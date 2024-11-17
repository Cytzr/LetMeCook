import { Col, Container, Row } from "react-bootstrap";
import ExpertDetailProps from "../Interfaces/expert-detail-props";
import { GoDotFill } from "react-icons/go";
import Footer from "../Components/footer";

const expertDetail: ExpertDetailProps = {
    DoctorName: "Ankit Gupta",
    DoctorSpecialty: "Cardiologist",
    DoctorLocation: "New York, NY",
    DoctorProfile: "My name is Ankit Gupta, and I am a dedicated Registered Dietitian Nutritionist with over eight years of experience in clinical nutrition and wellness coaching. I obtained my Bachelor’s Degree in Nutrition from the University of California, Davis, and followed that with a Master’s Degree in Public Health from Johns Hopkins University. My specializations include weight management, sports nutrition, and nutritional counseling for diabetes, and I am passionate about developing personalized nutrition plans that empower my clients to achieve their health goals. I believe in a balanced approach to nutrition, emphasizing whole foods and mindful eating practices that foster sustainable habits for lifelong wellness. In my practice, I offer one-on-one consultations, group workshops, and meal planning assistance tailored to individual needs. My clients often appreciate my ability to help them transform their eating habits without feeling deprived, which reflects my commitment to making nutrition enjoyable and accessible.",
    DoctorSpecialization: ["Cardiology", "Electrocardiography", "Heart Failure Management", "Preventive Cardiology"]
};

function ExpertDetail() {
    return (
        <>
            <Container fluid style={{ marginBottom: "5vw" }}>
                <Col style={{ paddingTop: "4vw" }}></Col>
                <Col style={{ position: "relative", marginBottom: "5vw", paddingLeft: "4vw" }}>
                    <div>
                        <img src="../src/Images/DoctorBanner.png" alt="" style={{ objectFit: 'cover', height: "23vh", width: "90vw", borderRadius: "0.5vw" }} />
                    </div>
                    <div>
                        <img src="../src/Images/Ankit.jpg" alt="" style={{ borderRadius: "10vw", height: "18vh", width: "18vh", objectFit: "cover", position: "absolute", bottom: -40, left: 90 }} />
                    </div>
                </Col>
                <Col style={{ position: "relative", paddingRight: "5vw", paddingLeft: "4vw", paddingBottom: "2vw" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.2vw" }}>
                        <h2 className="m-0">Dr. {expertDetail.DoctorName} Ph.D</h2>
                        <GoDotFill />
                        {expertDetail.DoctorSpecialty}
                    </div>
                    <div>
                        <h6>{expertDetail.DoctorLocation}</h6>
                    </div>
                </Col>

                <Row style={{ position: "relative", paddingRight: "5vw", paddingLeft: "4vw" }}>
                    <Col md={9} style={{ marginBottom: "1vw" }}>
                        <div>
                            <h4 style={{ marginBottom: "1vw" }}>Doctor Profile</h4>
                        </div>
                        <div>
                            <p style={{ textAlign: "justify" }}>
                                {expertDetail.DoctorProfile}
                            </p>
                        </div>
                    </Col>
                    <Col style={{ paddingLeft: "5vw" }}>
                        <div>
                            <h4 style={{ marginBottom: "1vw" }}>Medical Specialization</h4>
                        </div>
                        <div style={{ marginBottom: "1vw" }}>
                            {expertDetail.DoctorSpecialization.map((value, key) => (
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
            </Container>
            <Footer />
        </>
    )
}

export default ExpertDetail;