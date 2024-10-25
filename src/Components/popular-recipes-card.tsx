import { Card } from 'react-bootstrap'
import PopularRecipesCardProps from '../Interfaces/popular-recipes-card-props';

const PopularRecipesCard: React.FC<PopularRecipesCardProps> = ({ FoodName, ImageLink, TotalCalorie }) => {
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