import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/footer";
import CustomNavbar from "../Components/navbar";
import DoctorCard from "../Components/doctor-card";
import axios from "axios";
import {useEffect, useState} from "react";
let PopularExpert = [
  {
    expert_name: "Ankit Gupta",
    expert_picture: "../src/Images/Ankit.jpg",
    expert_profile:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit, ut eaque quasi iusto similique, optio eum quia tempora facere rem quas dolorum recusandae asperiores modi esse eos saepe omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit, ut eaque quasi iusto similique, optio eum quia tempora facere rem quas dolorum recusandae asperiores modi esse eos saepe omnis?z",
  },
];

function OurExpertPage() {
  const [featured, setFeatured] = useState(null);
  const [experts, setExperts] = useState([]);
  const getFeatured = async () => {
      const response = await axios.get('http://localhost:8000/api/expert/get-featured');
      const data = response.data.data;
      setFeatured(data);
    };

  const getExpert = async () => {
    const response = await axios.get('http://localhost:8000/api/expert/get-all');
    const data = response.data.data;
    setExperts(data);
  };

  useEffect(() => {
    getExpert();
   getFeatured()
  }, []);

  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Container fluid className="p-4">
        <h2>Featured Expert</h2>
        <hr style={{ border: "2px solid black" }}></hr>
      </Container>
      <Container fluid className="p-4">
        {featured ? (<Row>
          <Col className="d-flex justify-content-center">
            <img
                src={featured.expert_picture}
                className="img-fluid rounded-circle"
                style={{ minWidth: "432px", minHeight: "432px" }}
            ></img>
          </Col>
          <Col className="py-3">
            <h1>Dr. {featured.expert_name}</h1>
            <br></br>
            {featured.expert_profile}
            <br></br>
            <br></br>
            <button className="btn btn-dark rounded-pill">
              <span className="fw-bolder px-4">Chat Now</span>
            </button>
          </Col>
        </Row>)
            :
            (<Row>
          <Col className="d-flex justify-content-center">
            <img
                src={PopularExpert[0].expert_picture}
                className="img-fluid rounded-circle"
                style={{ minWidth: "432px", minHeight: "432px" }}
            ></img>
          </Col>
          <Col className="py-3">
            <h1>Dr. {PopularExpert[0].expert_name}</h1>
            <br></br>
            {PopularExpert[0].expert_profile}
            <br></br>
            <br></br>
            <button className="btn btn-dark rounded-pill">
              <span className="fw-bolder px-4">Chat Now</span>
            </button>
          </Col>
        </Row>)}

      </Container>
      <Container fluid className="p-4">
        <h2>Other Expert</h2>
        <hr style={{ border: "2px solid black" }}></hr>
      </Container>
      <Container fluid>
        <Row>
          {experts.length > 0 ? (
              experts.map((data, key) => (
                  <Col
                      md={3}
                      className="d-flex align-items-center justify-content-center mb-5 mt-5"
                  >
                    <DoctorCard
                        expert_picture ={data.expert_picture ? data.expert_picture : "../src/Images/Ankit.jpg"}
                        expert_name={data.expert_name}
                        expert_job_desc={data.expert_job_desc}
                        expert_id={data.expert_id}
                    />
                  </Col>
              ))

          ) : (
              <Col className="text-center" style={{marginTop: "100px", marginBottom: "120px"}}>
                <h3>No Experts Available</h3>
              </Col>

          )}

        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default OurExpertPage;
