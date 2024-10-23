

function Footer() {
    return (
        <div className="row bg-dark footer">
            <div className="col-md-3">
                <img src="..\src\Images\AppIcon.png" alt="LetMeCook" className="img fluid" />
            </div>
            <div className="col-md-3">
                <div className="row-6">
                   <h5>Articles</h5> 
                </div>
                
                <div className="flex-col align-items-center">
                    <a href=""><p>How Can You Improve Your Nutrition Daily?</p></a>
                    <a href=""><p>What Is the Best Way to Stay Hydrated?</p></a>
                    <a href=""><p>What Role Do Antioxidants Play in Your Diet?</p></a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="row-6">
                    <h5>Latest Book</h5> 
                </div>
                    
                    <div className="flex-col align-items-center">
                        <a href=""><p>Fuel Your Body</p></a>
                        <a href=""><p>The Science of Eating Well</p></a>
                        <a href=""><p>Wholesome Nutrition</p></a>
                    </div>
            </div>
            <div className="col-md-3">
                <div className="row-6">
                    <h5>Our Mission</h5> 
                </div>
                    
                    <div className="flex-col align-items-center">
                        <p>We are committed to delivering essential nutrition insights and personalized health advice tailored to your unique needs.</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;