import { Card, Col, Row } from 'react-bootstrap'

interface HomePageProps {
    FoodName: string,
    SavedBy: number,
    TotalCalorie: number,
    ImageLink: string,
    FoodDescription: string,
}

const HomePageCard: React.FC<HomePageProps> = ({ FoodName, SavedBy, TotalCalorie, ImageLink, FoodDescription }) => {
    return (
        <>
            <Card className="shadow-sm" style={{ maxWidth: '650px' }}>
                <Row className="g-0">
                    <Col md={5} className='d-flex align-items-stretch'>
                        <Card.Img
                            src={ImageLink}
                            alt="Honey Chicken"
                            className="img-fluid rounded-start w-100 h-100 object-fit-none"
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