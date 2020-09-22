import React, { useState, useEffect } from 'react';
import CircleSelector from './CircleSelector/CircleSelector'
import Circle from './Circle/Circle'
import './App.css';

const circleNo = ['0','1','2','3']

const App = () => {

  const [circleIdx, setCircleIdx] = useState(0);

  useEffect((newIdx=0) => {
    setCircleIdx(newIdx)
  }, [])

  return ( 
    <div className="App">
      <header className="App-header">UNIT 3 FINAL ASSESSMENT
      </header>
      <main>
        <CircleSelector circleNo={circleNo} circleIdx={circleIdx} handleClick={setCircleIdx} />
        <Circle circleNo={circleNo} circleIdx={circleIdx} handleClick={setCircleIdx}/>
      </main>
    </div>
);
}
 
export default App;