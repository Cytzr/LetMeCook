import { useLocation } from 'react-router-dom';
import '../Styles/navbar-style.css'
import { Dropdown } from 'react-bootstrap';

function CustomNavbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="container-fluid main-container">
            <div className="row d-flex justify-content-between align-items-center text-center p-10">
                <div className="col-8">
                    <div className="row dp-flex align-items-center fw-bold">
                        <div className="col">
                            <a href="/" className="navbar-brand">
                                <img src="..\src\Images\AppIconHalf.png" alt="" height={40} />
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
                            <a href="/about-us"><button className={`navbar-button ${isActive('/about-us') ? 'active' : ''}`}>About Us</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row dp-flex align-items-center">
                        <div className="col"></div>

                        {/* conditional rendering based on local storage not available */}
                        {/* <div className="col-10 d-flex align-items-center justify-content-end mr-1">Sign in</div>
                        <div className="col-1"></div> */}

                        {/* conditional rendering based on local storage available */}
                        <div className="col">
                            <a href="/premium">
                                <button className='premium-button'>
                                    <div className="premium-text">Premium</div>
                                </button>
                            </a>
                        </div>
                        <div className="col d-flex flex-row align-items-center justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Username
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/user-id/saved-menu">Saved Menu</Dropdown.Item>
                                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;