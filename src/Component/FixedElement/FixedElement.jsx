import React, { useEffect, useState } from 'react'

export default function FixedElement() {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  


  return (
    <>
    {showArrow && (
        <button onClick={scrollToTop} className="Up-section fw-bold text-white position-fixed z-1  d-flex  justify-content-center align-items-center  ">
        <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  )
}
