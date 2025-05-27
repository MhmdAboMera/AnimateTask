import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png"
export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  console.log("scrollY", scrollY);
  // window.console.log("scrollY", scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <>
      <nav className={`navbar navbar-expand-lg position-fixed text-light start-0 w-100 ${scrollY > "485.6000061035156" ? "" : "navbar-animation"}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

            <ul className="navbar-nav text-light">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About us</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Services </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Contact us </a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand nav-log" href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
    </>
  )
}