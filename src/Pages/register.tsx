import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/login-signup.css'
import { Container, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Register() {
    const navigate = useNavigate();
    var sectionStyle = {
        backgroundImage: `url(./src/Images/loginBG.png)`,
    };

    return (
        <body className='budi d-flex justify-content-center'>
                <Container className='bg-white m-5 p-0'>
                    <div className="login d-flex text-center">
                        <div className="col-6">
                            <img src="..\src\Images\LetMeCookLogin.png" alt="LetMeCook" className="img" />
                        </div>
                        
                        <div className="col-6 p-5">
                            <h4 className='m-5'>Register Your Account</h4>
                            <Col>
                                <Col className='mb-5'>
                                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                            <Form.Control type="username" placeholder="Input Username" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Email Address" className='mb-3'>
                                            <Form.Control type="email" placeholder="Input Email" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">   
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                </Col>
                                
                                <Col className='d-flex align-items-center flex-column'>
                                    <Button variant="transparent" className='border p-3 mb-3' style={{ width: '100%' }}>Register</Button>
                                    <a href="">Already Have Account? Log in here</a> 
                                </Col>
                            </Col>
                                
                        </div>
                    </div>
            </Container>
        </body>
        
            
        // <Container fluid style={sectionStyle} className=''>
        
        // </Container>
    )
}

export default Register;