import { Card } from "react-bootstrap";
import DoctorCardProps from "../Interfaces/doctor-card-props";

const DoctorCard: React.FC<DoctorCardProps> = ({
  DoctorName,
  ImageLink,
  DoctorTitle,
}) => {
  return (
    <>
      <Card style={{ width: "225px", border: "none" }}>
        <img
          src={ImageLink}
          alt={DoctorName}
          className="img-fluid rounded-top w-100 object-fit-none"
          style={{ height: "15vw", width: "100%" }}
        />
        <Card.Body className="pt-2 px-2">
          <Card.Title className="text-start">Dr. {DoctorName}</Card.Title>
          <Card.Text className="text-muted">{DoctorTitle}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DoctorCard;
