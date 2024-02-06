// import './App.css';
// import { Glow, Hexagon }from './components/MySplineComponent ';
// import CustomCursor from './components/CustomCursor';
// import Box1 from './components/Stackoverflow';
// function App() {
//   return (
//     <div>
//       {/* <CustomCursor/> */}
//       {/* <Glow/>
//       <Hexagon/> */}
//       {/* <Box1/> */}
//     </div>
//   );
// }
// export default App;




import './App.css';
import React from 'react';

const App = () => {
  const [ moveToEle , setMoveToEle] = React.useState(null);  

  React.useEffect(() => {
    if(moveToEle != null){
      const offsetTop = document.getElementById(moveToEle).offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
      });
    }
    return () => {
      setMoveToEle(null);
    }
  }
  , [moveToEle]);


  return (
    <div className="App">
    <div className="container">
        <div className="left">
          <button onClick={() => setMoveToEle('div8')}>NEPTUNE</button>
          <button onClick={() => setMoveToEle('div5')}>JUPITER</button>
          <button onClick={() => setMoveToEle('div3')}>EARTH</button>
          <button onClick={() => setMoveToEle('div12')}>UB313</button>
        </div>
        <div id="right" class="right">
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div1"> MERCURY</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div2"> VENUS</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div3"> EARTH</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div4"> MARS</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div5"> JUPITER</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div6"> SATURN</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div7"> URANUS</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div8"> NEPTUNE</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div9"> PLUTO</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div10"> CHARON</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div11"> 2003</div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div id="div12"> UB313</div>
        </div>
    </div>
  </div>
  );
};



export default App;
