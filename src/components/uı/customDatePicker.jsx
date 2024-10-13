//import liraries
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Datepicker} from '@ui-kitten/components';

// create a component
const CustomDatePicker = props => {
  console.log(props);
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CustomDatePicker;
