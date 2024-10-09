function CustomNavbar() {
    return (
        <nav className="navbar justify-content-between navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src="..\src\Images\AppIconHalf.png" alt="" height={40} />
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    )
}

export default CustomNavbar;