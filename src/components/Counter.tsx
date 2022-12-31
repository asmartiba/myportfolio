import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Counter = () => {
    const [count, setCount] = useState(0);
  
    let color = "white";
    if (count < 0) {color = "red";}
    else if (count > 0) {color = "green";}
  
    return (
      <div className='compMain'>
        <div className="mainContainer">
          <div style={{color: color, fontSize: 32}}>
            {count}
          </div>
          <div className='mainContainerRow'>
            <button className="CounterButton" style={{color: "red", fontWeight: "bolder"}} onClick={() => setCount(count => count - 10)}>-10</button>
            <button className="CounterButton" style={{color: "red", fontWeight: "bolder"}} onClick={() => setCount(count => count - 5)}>-5</button>
            <button className="CounterButton" style={{color: "red", fontWeight: "bolder"}} onClick={() => setCount(count => count - 0.5)}>-0.5</button>
            <button className="CounterButton" style={{color: "red", fontWeight: "bolder"}} onClick={() => setCount(count => count - 1)}>-1 </button>
            <button className="CounterButton" style={{color: "green", fontWeight: "bolder"}} onClick={() => setCount(count => count + 0.25)}>0.25</button>
            <button className="CounterButton" style={{color: "green", fontWeight: "bolder"}} onClick={() => setCount(count => count + 0.5)}>0.5</button>
            <button className="CounterButton" style={{color: "green", fontWeight: "bolder"}} onClick={() => setCount(count => count + 1)}>1</button>
            <button className="CounterButton" style={{color: "green", fontWeight: "bolder"}} onClick={() => setCount(count => count + 5)}>5</button>
            <button className="CounterButton" style={{color: "green", fontWeight: "bolder"}} onClick={() => setCount(count => count + 10)}>10</button>
          </div>

          <div className="mainContainerRow" style={{marginTop: 50}}> 
          <button className="Button" onClick={() => setCount(count => 0)}>Reset</button>
          <button className="Button" onClick={() => setCount(count => -9999)}> ¯\_(ツ)_/¯ </button>
          </div>
        </div>
        <Link to={'/components'}><button className='compBtn'>back</button></Link>
      </div>
    )
  }

  export default Counter;