import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/navbar-style.css'
import { Dropdown } from 'react-bootstrap';
import {useState} from "react";

function CustomNavbar() {
    const location = useLocation();
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const isActive = (path: string) => location.pathname === path;
    const premiumText = isHovered
        ? loginData.is_premium === 0
            ? 'Sign in Premium Now'
            : 'You are Premium'
        : 'Premium';
    const toLoginPage = () => {
        navigate('/login');
    };
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="container-fluid main-container">
            <div className="row d-flex justify-content-between align-items-center text-center p-10">
                <div className="col-8">
                    <div className="row dp-flex align-items-center fw-bold">
                        <div className="col">
                            <a href="/" className="navbar-brand">
                                <img src="..\src\Images\logoLetMeCook.png" alt="" height={70} />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/recipes"><button className={`navbar-button ${isActive('/recipes') ? 'active' : ''}`}>Recipes</button></a>
                        </div>
                        <div className="col">
                            <a href="/ingredients"><button className={`navbar-button ${isActive('/ingredients') ? 'active' : ''}`}>Ingredients</button></a>
                        </div>
                        <div className="col">
                            <a href="/experts"><button className={`navbar-button ${isActive('/experts') ? 'active' : ''}`}>Our Experts</button></a>
                        </div>
                        <div className="col">
                            <a href="/bmi-calculator"><button className={`navbar-button ${isActive('/bmi-calculator') ? 'active' : ''}`}>BMI Calculator</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row dp-flex align-items-center">
                        <div className="col"></div>

                        {!loginData && (<div>
                            <div className="col-10 d-flex align-items-center justify-content-end mr-1 cursor-pointer" onClick={toLoginPage}>
                                Sign in
                            </div>
                            <div className="col-1"></div>
                        </div>)}

                        {loginData && (<div className='d-flex align-items-center justify-content-between'>
                            <div className="col">
                                {loginData.is_premium === 0 ? (
                                    <a href="/premium">
                                        <button
                                            className="premium-button"
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            <div className="premium-text">{premiumText}</div>
                                        </button>
                                    </a>
                                ) : (
                                    <button
                                        className="premium-button"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <div className="premium-text">{premiumText}</div>
                                    </button>
                                )}
                            </div>
                            <div className="col d-flex flex-row align-items-center justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {loginData['username']}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/saved-menu">Saved Recipe</Dropdown.Item>
                                        <Dropdown.Item href="/my-recipe">My Recipe</Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;
