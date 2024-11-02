import { Card, Col, Row } from 'react-bootstrap'
import HomePageCardProps from '../Interfaces/home-page-card-props';

const HomePageCard: React.FC<HomePageCardProps> = ({ FoodName, SavedBy, TotalCalorie, ImageLink, FoodDescription }) => {
    return (
        <>
            <Card className="shadow-sm" style={{ maxWidth: '650px', maxHeight: "330px", minHeight: "300px" }}>
                <Row className="g-0">
                    <Col md={5} className='d-flex align-items-stretch'>
                        <Card.Img
                            src={ImageLink}
                            alt={FoodName}
                            className="img-fluid rounded-start w-100 object-fit-none"
                        />
                    </Col>
                    <Col md={7}>
                        <Card.Body>
                            <Card.Title className='mb-2 fw-bold'>{FoodName}</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">Saved by {SavedBy} People</Card.Subtitle>
                            <Card.Text className="mb-3 fw-semibold">Total Cal: {TotalCalorie}</Card.Text>
                            <Card.Text className='fs-6'>
                                {FoodDescription}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default HomePageCard;