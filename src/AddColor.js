import { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState('skyblue');
  const styles = {
    backgroundColor: color,
  };

  const Initial_Color_List = ['red', 'Orange', 'purple'];
  const [colorList, setColorList] = useState(Initial_Color_List);
  return (
    <div className='color-game'>
      <input
        value={color}
        style={styles} onChange={(event) => setColor(event.target.value)}></input>
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
