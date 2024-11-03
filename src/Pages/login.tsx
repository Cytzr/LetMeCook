import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/login-signup.css'
import { Container, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {

    const navigate = useNavigate();

    return (
        <body className='budi d-flex justify-content-center'>
                <Container className='bg-white m-5 p-0'>
                    <div className="login d-flex text-center">
                        <div className="col-6 p-5">
                            <h4 className='m-5'>Welcome back, let's cook</h4>
                            <Col>
                                <Col className='mb-5'>
                                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                            <Form.Control type="username" placeholder="Input Username" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">   
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                </Col>
                                
                                <Col className='d-flex align-items-center flex-column'>
                                    <Button variant="transparent" className='border p-3 mt-5 mb-3' style={{ width: '100%' }}>Log In</Button>
                                    <a href="">No Account? Register Here!</a> 
                                </Col>
                            </Col>
                        </div>

                        <div className="col-6">
                            <img src="..\src\Images\LetMeCookLogin.png" alt="LetMeCook" className="img" />
                        </div>
                        
                        
                    </div>
            </Container>
        </body>
    )
}

export default Login;
