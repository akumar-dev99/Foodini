import * as React from 'react';
import { Text as RNText } from 'react-native';

export function Text(props) {
  return <RNText {...props} style={[props.style, { fontFamily: 'rubik' }]} />;
}
