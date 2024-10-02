import { useRef , useState} from 'react'
import './App.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap' ;

function App() {

  const [xMove, setxMove] = useState(0)
  const [roti, setroti] = useState(0)
  const [yMove, setyMove] = useState(0)

  const xRandom = gsap.utils.random(-500,500,50)
  const xRotate = gsap.utils.random(0,180, 30) ;
  const yRandom = gsap.utils.random(-300,300, 100) ;

  const flyRef = useRef() ;

  useGSAP(()=>{
    gsap.to(flyRef.current, {
      x: xMove,
      y: yMove,
      rotate: roti,
      duration: 0.5
    })
  }, [xMove,yMove,roti])

  return (
    <main>
      <h1>Click on the <span>Makhi</span></h1>
      <div className="container">
        <img onClick={()=>{
          setxMove(xRandom)
          setyMove(yRandom)
          setroti(xRotate)
        }} ref={flyRef} src="https://static.vecteezy.com/system/resources/thumbnails/018/874/065/small/insect-green-fly-drawing-png.png" alt="" />
      </div>
    </main>
  )
}

export default App
