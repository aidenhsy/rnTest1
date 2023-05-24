import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View
      style={{ display: 'flex', alignItems: 'center', gap: 30, padding: 20 }}
    >
      <ColorAdjuster
        color={'red'}
        currentValue={red}
        minus={() => setColor('red', -COLOR_INCREMENT)}
        add={() => setColor('red', COLOR_INCREMENT)}
      />
      <ColorAdjuster
        color={'green'}
        currentValue={green}
        minus={() => setColor('green', -COLOR_INCREMENT)}
        add={() => setColor('green', COLOR_INCREMENT)}
      />
      <ColorAdjuster
        color={'blue'}
        currentValue={blue}
        minus={() => setColor('blue', -COLOR_INCREMENT)}
        add={() => setColor('blue', COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
