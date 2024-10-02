import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {

  const containerRef = useRef() ;

  useGSAP(()=>{
    gsap.from(".box", {
      rotate: 540,
      duration: 1.5,
      delay: 0.5,
      scale: 0
    })
  }, {scope: containerRef })


  return (
    <main>
      <div className="container" ref={containerRef}>
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kuchh">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )
}

export default App