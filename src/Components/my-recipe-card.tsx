// MyComponent.tsx
import { Card, Col, Row, Button } from 'react-bootstrap';
import MyRecipe from '../Interfaces/my-recipe-card-props'; 
import '../Styles/myRecipe.css';

interface MyComponentProps {
  recipe: MyRecipe;
}

const MyComponent: React.FC<MyComponentProps> = ({ recipe }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={12} lg={10} className="mb-4"> {/* Lebih besar pada layar medium dan besar */}
        <Card className="recipe-card" style={{ maxWidth: '1000px', width: '100%' }}> {/* Atur batas maksimal */}
          <Card.Img variant="top" src={recipe.imageLink} />
          <Card.Body>
            <Card.Title>{recipe.FoodName}</Card.Title>
            <Button variant="primary" className="me-2">
              Edit
            </Button>
            <Button variant="danger">
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MyComponent;
