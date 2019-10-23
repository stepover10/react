import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BHC_eventPage from 'event/BHC_eventPage'

const evetPages =  createStackNavigator({
  BHC_eventPage
})

export default createAppContainer(evetPages)