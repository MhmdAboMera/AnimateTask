import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>


    </>
  )
}

export default App
