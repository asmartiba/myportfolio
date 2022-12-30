import {useState} from 'react';
import {Link} from 'react-router-dom';
import './../styles/Component.css';

export const ColorPicker = () => {
  const [color, selectColor] = useState("#000000");

  return (
    <div className='compMain'>
      <div className="colorPicker">
        <input type="color" value={color} onChange={(event) => selectColor(event.target.value)}/>
        <select onChange={(event) => selectColor(event.target.value)}>
            <option value="#000000">#000000</option>
            <option value="#FF0000">#FF0000</option>
            <option value="#00FF00">#00FF00</option>
            <option value="#0000FF">#0000FF</option>
        </select> 

        <div style ={{width: 100, height: 100, backgroundColor: color}}></div>

        <label style={{color: 'white', paddingTop: 20}}>or type your hexcode: </label>
        <input type="text" value={color} onChange={(event) => selectColor(event.target.value)} />
      </div>
      
      <Link to={'/components'}><button className='compBtn'>back</button></Link>
    </div>
  )
}

export default ColorPicker