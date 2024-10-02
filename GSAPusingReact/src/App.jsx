import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const randomX = gsap.utils.random(-500,500, 100) ;
  const rotateX = gsap.utils.random(-180, 180, 30) ;

  const [xValue, setxValue] = useState(0)
  const [Roti, setRoti] = useState(0)

  const boxRef = useRef() ;

  useGSAP(()=>{
    gsap.to(boxRef.current, {
      x: xValue ,
      rotate: Roti,
      duration: 0.3,
    })
  }, [xValue, Roti])

  return (
    <main>
      <div className="container">
        <button onClick={()=>{
          setxValue(randomX) ;
          setRoti(rotateX) ;
        }}>animate</button>
        <div className="box" ref={boxRef}></div>
      </div>
    </main>
  )
}

export default App