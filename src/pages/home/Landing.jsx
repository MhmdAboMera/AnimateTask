import { useState, useEffect } from "react";
import mlogo from "../../assets/images/Mlogo.png"
import Scroll from "../../components/scroll"
import background1 from '../../assets/images/background-1.png'
import background2 from '../../assets/images/background-2.jpeg'
import background3 from '../../assets/images/background-3.jpeg'

export default function Landing() {
    const [currentBackground, setCurrentBackground] = useState(background3);

    useEffect(() => {
        // Change background after 8 seconds (matches your animation duration)
        const timer = setTimeout(() => {
            setCurrentBackground(background2);
        }, 8000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="landing" >
            <div className="background-layer" style={{
                backgroundImage: `url(${currentBackground})`,
                backgroundSize: `${currentBackground == background2 ? "contain" : "cover"}`
            }} ></div>
            <div className="container">
                <div className="logo-img m-auto justify-content-center align-items-center">
                    <img src={mlogo} className="d-block m-auto landing-logo" alt="logo" />
                </div>
                <div className="row align-items-end mt-3">
                    <div className="col-sm-12 col-md-8">
                        <div className="box-text">
                            <h1 className="text-white fw-bold ">we make it simple, but..</h1>
                            <h1 className="heed-text fw-bold ">SIGNIFICANT</h1>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="text-light sm-text small-text ">
                            <small>Marketing Agency</small>
                            <br />
                            <small className="text-end d-block mt-3">
                                Egypt
                                <br />
                                EST  2010
                            </small>
                        </div>
                    </div>
                </div>
                <Scroll />
            </div>
        </div>
    )
}