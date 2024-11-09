import {useNavigate } from 'react-router-dom';
import {useState} from "react";
import '../Styles/login-signup.css'
import { Container, FloatingLabel, Col, Button} from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Styles/home.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onChangeUsername = (username: string) => {
        setUsername(username);
    }
    const onChangePassword = (password: string) => {
        setPassword(password);
    }
    const triggerKey = (event : any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            login();
        }
    };
    const login = async  () => {
        Swal.showLoading()
        const response = await axios.post('http://localhost:8000/api/user/login', {
            username,
            password,
        });
        if (response.data.error == 1) {
            Swal.fire({
                title: 'Invalid Credentials',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            }).then(() => {
                Swal.close();
            });

        } else {
            Swal.close();
            console.log(response.data.data);
            localStorage.setItem('login_data', JSON.stringify(response.data.data))
            navigate('/');
        }


    }

    return (
        <body className='budi d-flex justify-content-center'>
                <Container className='bg-white m-5 p-0'>
                    <div className="login d-flex text-center">
                        <div className="col-6 p-5">
                            <h4 className='m-5'>Welcome back, let's cook</h4>
                            <Col>
                                <Col className='mb-5'>
                                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Input Username"
                                                value={username}
                                                onChange={(e) => onChangeUsername(e.target.value)}
                                            />

                                        </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="position-relative">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
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
                                                color: '#6c757d' // Matches Bootstrap's muted text color
                                            }}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </FloatingLabel>
                                </Col>
                                
                                <Col className='d-flex align-items-center flex-column'>
                                    <Button variant="transparent" className='border p-3 mt-5 mb-3' style={{ width: '100%' }} onClick={login}>Log In</Button>
                                    <a href="/register">No Account? Register Here!</a>
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
