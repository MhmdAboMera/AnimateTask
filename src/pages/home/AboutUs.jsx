import dog from '../../assets/images/dog.png'
import rightImge from '../../assets/images/rightImge.png'
import Scroll from '../../components/scroll'
export default function AboutUs() {
    return (
        <>
            <div className="about-us py-3 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h1 className="display-4 fw-bold text-white"  data-aos="fade-up">we make sure your idea & Creation delivered Properly</h1>
                            <h3 className='my-3 text-white' data-aos="fade-up">Who Are <br /> We <span style={{ color: "rgb(220 90 53)" }}>?</span></h3>
                            <p className='text-white-50' style={{ fontSize: "12px", fontFamily: "sans-serif" }} data-aos="fade-up">MEDIAZONE IS AN INTEGRATED MARKETING SOLUTIONS AGENCY THAT PROVIDES OUTSTANDING AND EFFECTIVE SERVICES TO HELP GROW YOUR BUSINESS AND ACHIEVE OBJECTIVES, INCREASE YOUR BRAND VALUE AND AWARENESS.</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h3 className="mt-2 fw-bold" style={{ color: "#FFD933" }} data-aos="fade-up">we make sure your idea & <br /> Creation delivered  <br /> <div className='d-flex align-items-center gap-3'>   Properly <small className='text-light fw-normal' style={{ fontSize: "10px", fontFamily: "sans-serif" }}>WE PROVIDE 360 DEGREES <br /> ADVERTISING TOOLS, </small>  </div> </h3>
                            <div className="box-img mt-5" style={{ height: "280px" }} data-aos="fade-left">
                                <img src={dog} alt="dog" className='d-block m-auto' style={{ width: "#100%", height: "100%" }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-box position-relative m-auto" style={{ width: "fit-content" }}>
                            <div className="about fw-bold display-1 text-white text-center" style={{
                                fontSize: "160px",
                                fontFamily: "fantasy",
                                fontWeight: "300 !important",
                                textTransform: "uppercase"
                            }}>
                                About U<span style={{ zIndex: "2", position: "relative" }}>s</span>
                            </div>
                            <p className='about-info Who text-white' style={{ backgroundColor: "red" }} data-aos="fade-up-right">Who are we</p>
                            <p className='about-info Projects' style={{ backgroundColor: "#FFD933", color: "#206BFF" }} data-aos="fade-down">Our Projects</p>
                            <p className='about-info text-white Services' style={{ backgroundColor: "#586BF4" }} data-aos="fade-up-right">Services</p>
                            <p className='about-info our-team' style={{ backgroundColor: "#37A87D", color: "#FFD933" }} data-aos="fade-up-right">Our Team</p>
                        </div>
                    </div>
                    <Scroll />
                </div>
                <img src={rightImge} alt="rightImge" className='rightImge' data-aos="fade-up-right" />
            </div>
        </>
    )
}