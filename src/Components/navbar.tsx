function CustomNavbar() {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-between align-items-center text-center">
                <div className="col-8">
                    <div className="row dp-flex align-items-center fw-bold">
                        <div className="col">
                            <a href="/" className="navbar-brand">
                                <img src="..\src\Images\AppIconHalf.png" alt="" height={40} />
                            </a>
                        </div>
                        <div className="col">Recipes</div>
                        <div className="col">Ingredients</div>
                        <div className="col">Our Experts</div>
                        <div className="col">About Us</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row dp-flex align-items-center">
                        <div className="col"><img src="..\src\Images\SaveIcon.png" alt="" /></div>
                        <div className="col">Sign in</div>
                        <div className="col">Premium</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;