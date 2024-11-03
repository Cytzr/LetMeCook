import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/footer";
import CustomNavbar from "../Components/navbar";
import DoctorCardProps from "../Interfaces/doctor-card-props";
import DoctorCard from "../Components/doctor-card";

let PopularExpert = [
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit, ut eaque quasi iusto similique, optio eum quia tempora facere rem quas dolorum recusandae asperiores modi esse eos saepe omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit, ut eaque quasi iusto similique, optio eum quia tempora facere rem quas dolorum recusandae asperiores modi esse eos saepe omnis?z",
  },
];

const TempData: DoctorCardProps[] = [
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
  {
    DoctorName: "Ankit Gupta",
    ImageLink: "../src/Images/Ankit.jpg",
    DoctorTitle: "string",
  },
];

function OurExpertPage() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Container fluid className="p-4">
        <h2>Featured Expert</h2>
        <hr style={{ border: "2px solid black" }}></hr>
      </Container>
      <Container fluid className="p-4">
        <Row>
          <Col className="d-flex justify-content-center">
            <img
              src={PopularExpert[0].ImageLink}
              className="img-fluid rounded-circle"
              style={{ minWidth: "432px", minHeight: "432px" }}
            ></img>
          </Col>
          <Col className="py-3">
            <h1>{PopularExpert[0].DoctorName}</h1>
            <br></br>
            {PopularExpert[0].DoctorBio}
            <br></br>
            <br></br>
            <button className="btn btn-dark rounded-pill">
              <span className="fw-bolder px-4">Chat Now</span>
            </button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-4">
        <h2>Other Expert</h2>
        <hr style={{ border: "2px solid black" }}></hr>
      </Container>
      <Container fluid>
        <Row>
          {TempData.map((data, key) => (
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center mb-5 mt-5"
            >
              <DoctorCard
                ImageLink={data.ImageLink}
                DoctorName={data.DoctorName}
                DoctorTitle={data.DoctorTitle}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default OurExpertPage;
