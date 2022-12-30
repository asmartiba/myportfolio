import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './../styles/Component.css';

let slotImages = [
  require("./../images/lemon.png"),
  require("./../images/prune.png"),
  require("./../images/melon.png"),
  require("./../images/seven.png"),
  require("./../images/cherry.png")
]

const numberOfSlots = 3;

interface SlotProps {
  value: number;
}

const getRandomSlots = (numberOfSlots: number) => {
  let slots: number[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    slots.push(Math.floor(Math.random() * 5));
  } 
  return slots;
}

const Slot = ({value}:SlotProps) => {
  return <img src={slotImages[value]} alt="slot" className='slot' />
}

interface SlotMachineProps {
  slots: number;
}

const SlotMachine = ({slots: amountOfSlots} : SlotMachineProps) => {
  let [slots, setSlots] = useState<number[]>(getRandomSlots(amountOfSlots));
  let [saldo, setSaldo] = useState<number>(100);

  let winning: boolean = slots.every((slot) => slot === slots[0]);

  const PullLever = () => {
    setSlots(getRandomSlots(amountOfSlots));
    if(winning)
    {
      saldo += 25;
      setSaldo(saldo);
    } else {
      saldo -= 5;
      setSaldo(saldo)
    }
  }

  let color: string = "white";
  if (saldo > 0) {color = "green"} else if (saldo < 0) {color = "red"}

  return (
    <div className="midContainer">
      <div className='SlotMachineContainer'>
        <div style={{color: color, position: 'absolute', paddingBottom: 250}}>
          <div style={{color: 'white'}}>Saldo:</div> €{saldo}
        </div>
        <button className='SlotMachineButton' onClick={PullLever}>Pull Lever</button>
        <div className='Slots'>
          {slots.map((slot, index) => (
            <Slot value={slot} key={index} />
          ))}
        </div>
      </div>
      <Link to={'/components'}><button className='compBtn'>back</button></Link>
    </div>
  )
}

export default SlotMachine;
