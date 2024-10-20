import { useLocation } from 'react-router-dom';
import '../Styles/navbar-style.css'

function CustomNavbar() {
    const location = useLocation();

    console.log(location);

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
                            <button className='navbar-button'>Recipes</button>
                        </div>
                        <div className="col">
                            <button className='navbar-button'>Ingredients</button>
                        </div>
                        <div className="col">
                            <button className='navbar-button'>Our Experts</button>
                        </div>
                        <div className="col">
                            <button className='navbar-button'>About Us</button>
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
                            <button className='premium-button'>
                                Premium
                            </button>
                        </div>
                        <div className="col d-flex flex-row align-items-center justify-content-end">
                            <div className="col-2">
                                <button className='save-button'>
                                    <img src="..\src\Images\SaveIcon.png" alt="" className="img-fluid save-icon" />
                                </button>
                            </div>
                            <div className="col-10">
                                <button className='username-button'>Username</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;