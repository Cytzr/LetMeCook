    import '../Styles/login-signup.css'
    import { Container, Col, Row, Button } from 'react-bootstrap';
    import Navbar from '../Components/navbar.tsx'
    import Footer from '../Components/footer.tsx'

    function Home() {

        return (
            <><Navbar></Navbar>
                <section className='bg-1 align-content-center'>
                    <Container className='pt-5 pb-5'>
                        <Col className=''>
                            <div className="col-6 text-white">
                                <h1 className='fw-bold'>LetMeCook</h1>
                                <h3>Cook Smart, Eat Well, Delicious Recipes with Nutrition at Your Fingertips!</h3>
                                <a href="#mainPage"><Button className='border-white btn-dark'>Start Now</Button></a>
                            </div>
                            <div className="col-6"></div>
                        </Col>
                    </Container>
                </section>
                <section className='bg-2 align-content-center'>
                    <Container>
                        <Col>
                            <div className="col-5">
                                <h1 className='fw-bold'>What's Our Purpose?</h1>
                            <p className='font-large'>We started this platform with one goal in mind: to help people discover the joy of cooking. From quick weeknight meals to elaborate feasts, we provide step-by-step recipes, tips, and tricks that make it easier for anyone to create delicious and healthy meals with professional guide.</p>
                            </div>
                            <div className="col-7"></div>
                        </Col>
                        
                    </Container>
                </section>
                <section className='p-5' id='mainPage'>
                    <Container className='bg-3 p-5 border-radius text-white justify-content-around d-flex'>
                            <div className="col-5">
                                <Row className='d-flex justify-content-between'>
                                    <Row className='mb-5'>
                                        <h1 className='fw-bold'>Experience, Flavour and Nutrition</h1>
                                        <p>Fresh, Flavorful, Fit - Your Guide to Healthy Deliciousness!</p>
                                    </Row>
                                    <Col className='d-flex'>
                                        <a href=""><Button className='border-white border-radius-3 btn-dark btn-spacing'>BMI Calculator</Button></a>
                                        <a href=""><Button className='border-white border-radius-3 btn-dark'>Create Recipes</Button>  </a>
                                    </Col>  
                                </Row>
                            </div>
                            <div className="col-7"></div>
                    </Container>

                    <Container className='pt-5 mt-4'>
                        <h2 className='fw-bold color-dark'>Popular Recipes</h2>
                    </Container>
                </section>
            <Footer></Footer></> 
        )
    }

    export default Home;