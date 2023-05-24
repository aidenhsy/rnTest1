import { useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ChangeRed':
      return red + action.payload > 255 || red - action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'ChangeGreen':
      return { ...state, green: state.green + action.payload };
    case 'ChangeBlue':
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const COLOR_INCREMENT = 15;

  return (
    <View
      style={{ display: 'flex', alignItems: 'center', gap: 30, padding: 20 }}
    >
      <ColorAdjuster
        color={'red'}
        currentValue={state.red}
        minus={() => dispatch({ type: 'ChangeRed', payload: -COLOR_INCREMENT })}
        add={() => dispatch({ type: 'ChangeRed', payload: COLOR_INCREMENT })}
      />
      <ColorAdjuster
        color={'green'}
        currentValue={state.green}
        minus={() =>
          dispatch({ type: 'ChangeGreen', payload: -COLOR_INCREMENT })
        }
        add={() => dispatch({ type: 'ChangeGreen', payload: COLOR_INCREMENT })}
      />
      <ColorAdjuster
        color={'blue'}
        currentValue={state.blue}
        minus={() =>
          dispatch({ type: 'ChangeBlue', payload: -COLOR_INCREMENT })
        }
        add={() => dispatch({ type: 'ChangeBlue', payload: COLOR_INCREMENT })}
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
