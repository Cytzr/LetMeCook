import { Card } from "react-bootstrap";

interface DoctorCardProps {
    DoctorName: string,
    ImageLink: string,
    DoctorTitle: string,
}

const DoctorCard: React.FC<DoctorCardProps> = ({ DoctorName, ImageLink, DoctorTitle }) => {
    return (
        <>
            <Card style={{ width: '225px', border: 'none' }}>
                <img
                    src={ImageLink}
                    alt={DoctorName}
                    className='img-fluid rounded-top w-100 object-fit-none'
                    style={{ height: '15vw' }}
                />
                <Card.Body className="pt-2" style={{ padding: "0px" }}>
                    <Card.Title className='text-start'>
                        Dr. {DoctorName}
                    </Card.Title>
                    <Card.Text className="text-muted">
                        {DoctorTitle}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default DoctorCard;