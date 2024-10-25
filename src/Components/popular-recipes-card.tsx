import { Card } from 'react-bootstrap'

interface PopularRecipesProps {
    FoodName: string,
    ImageLink: string,
    TotalCalorie: number,
}

const PopularRecipesCard: React.FC<PopularRecipesProps> = ({ FoodName, ImageLink, TotalCalorie }) => {
    return (
        <>
            <Card className='shadow-sm' style={{ width: '225px' }}>
                <img
                    src={ImageLink}
                    alt={FoodName}
                    className='img-fluid rounded-top w-100 object-fit-none'
                    style={{ height: '15vw' }}
                />
                <Card.Body>
                    <Card.Title className='mb-3 text-center'>
                        {FoodName}
                    </Card.Title>
                    <Card.Subtitle className='fw-semibold text-muted fs-6 text-center'>
                        {TotalCalorie} Cal
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    );
}

export default PopularRecipesCard