import './App.css';
import { useState } from 'react';

function App() {

  const[color, setColor] = useState({color: getRandomColor()});

  const changeColor = () => {
    setColor({color: getRandomColor()});
  }

  function getRandomColor() {
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return `rgb(${r}, ${g}, ${b})`;
  }

  return(
    <>
    <p style={color}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam praesentium doloribus quidem vitae blanditiis iste nemo aut, eum deserunt, deleniti veritatis labore nobis, dicta eveniet omnis veniam earum impedit incidunt!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium numquam ipsum excepturi ullam, eligendi in. Ipsa, debitis? Perspiciatis id iure exercitationem perferendis officiis beatae repudiandae atque, expedita numquam itaque labore.</p>
    <button onClick={changeColor}>Зміна кольору</button>
    </>
  )
}

export default App;
