import { Card } from "react-bootstrap";
import DoctorCardProps from "../Interfaces/doctor-card-props";
import AuthenticationCheck from "./authentication-check.tsx";
import {useNavigate} from "react-router-dom";

const DoctorCard: React.FC<DoctorCardProps> = ({
  expert_name,
  expert_picture,
  expert_job_desc,
    expert_id
}) => {
  const navigate = useNavigate();
  const showDetail = async () => {
      navigate(`/expert-detail/${expert_id}`);
      window.scrollTo(0, 0);
  }
  return (
    <>
      <Card style={{ width: "225px", border: "none" }} onClick={showDetail}>
        <img
          src={expert_picture}
          alt={expert_picture}
          className="img-fluid rounded-top w-100 object-fit-none"
          style={{ height: "15vw", width: "100%" }}
        />
        <Card.Body className="pt-2 px-2">
          <Card.Title className="text-start">Dr. {expert_name}</Card.Title>
          <Card.Text className="text-muted">{expert_job_desc}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DoctorCard;
