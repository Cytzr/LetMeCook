import '../Styles/login-signup.css'
import { Container, FloatingLabel, Col, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onChangeEmail = (email: string) => {
        setEmail(email);
    }
    const onChangeUsername = (username: string) => {
        setUsername(username);
    }
    const onChangePassword = (password: string) => {
        setPassword(password);
    }
    const triggerKey = (event : any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            register();
        }
    };
    const register = async () => {
        Swal.showLoading();

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if (!emailPattern.test(email)) {
             Swal.fire({
                 title: 'Something went wrong',
                 text: 'Please Input The Correct Email',
                 icon: 'error',
                 confirmButtonText: 'Ok'
             }).then(() => {
                 Swal.close();
             })
             return;
         }
         if (password.length < 8) {
             Swal.fire({
                 title: 'Something went wrong',
                 text: 'Password Length Must Be 8 Or More',
                 icon: 'error',
                 confirmButtonText: 'Ok'
             }).then(() => {
                 Swal.close();
             })
             return;
         }

        const response = await axios.post('http://localhost:8000/api/user/register', {
            username,
            password,
            email
        })
        if (response.data.error === 1) {
            Swal.fire({
                title: 'Something went wrong',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => {
                Swal.close();
            })
            return;
        }else if (response.data.error === 0) {
            Swal.fire({
                title: 'Success',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                Swal.close();
                navigate('/login');
            })
        }
    }
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
                                            <Form.Control
                                                type="username"
                                                placeholder="Input Username"
                                                value={username}
                                                onChange={(e) => onChangeUsername(e.target.value)}/>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="Email Address" className='mb-3'>
                                            <Form.Control
                                                type="email"
                                                placeholder="Input Email"
                                                value={email}
                                                onChange={(e) => onChangeEmail(e.target.value)}/>
                                        </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="position-relative">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Input Password"
                                            value={password}
                                            onChange={(e) => onChangePassword(e.target.value)}
                                            onKeyDown={triggerKey}
                                        />
                                        <span
                                            onClick={togglePasswordVisibility}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                color: '#6c757d'
                                            }}
                                        >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
                                    </FloatingLabel>
                                </Col>
                                
                                <Col className='d-flex align-items-center flex-column'>
                                    <Button variant="transparent" className='border p-3 mb-3' style={{ width: '100%' }} onClick={register}>Register</Button>
                                    <a href="/login">Already Have Account? Log in here</a>
                                </Col>
                            </Col>
                                
                        </div>
                    </div>
            </Container>
        </body>
    )
}

export default Register;
