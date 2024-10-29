import {Row, Container, Col} from 'react-bootstrap'
import '../Styles/footer.css'

function Footer() {
    return (
        <Container className='fluid p-5 footer'>
            <Row className='text-white'>
                <Col className=''>
                    <img src="..\src\Images\AppIcon.png" alt="LetMeCook" className="img-fluid" />
                </Col>
                <Col>
                    <Row>
                        <h5 className='mb-4'>Articles</h5> 
                        <Col>
                            <a href=""><p>How Can You Improve Your Nutrition Daily?</p></a>
                            <a href=""><p>What Is the Best Way to Stay Hydrated?</p></a>
                            <a href=""><p>What Role Do Antioxidants Play in Your Diet?</p></a>
                        </Col>
                    </Row>
                </Col>
                <Col className='ms-4'>
                    <Row>
                        <h5 className='mb-4'>Latest Book</h5> 
                        <a href=""><p>Fuel Your Body</p></a>
                        <a href=""><p>The Science of Eating Well</p></a>
                        <a href=""><p>Wholesome Nutrition</p></a>
                    </Row>
                </Col>
                <Col>
                    <h5 className='mb-4'>Our Mission</h5> 
                    <p>We are committed to delivering essential nutrition insights and personalized health advice tailored to your unique needs.</p>
                </Col>
            </Row> 
        </Container>
    )
}

export default Footer;