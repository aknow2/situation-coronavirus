import React, { useState } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './container/Map';
import AppToolbar from './component/AppBar';
import Chart from './container/Chart';

const initState = {
  tabIndex: 0
}

function App() {
  const [state, setState] = useState(initState)
  const onChangeTabIndex = tabIndex => {
    setState({ tabIndex })
  };
  return (
    <div>
    <AppToolbar 
      tabIndex={state.tabIndex}
      onChangeTabIndex={onChangeTabIndex}
    />
    {
      state.tabIndex === 0 && <Map /> 
    }
    {
      state.tabIndex === 1 && <Chart/>
    }
    </div>
  );
}

export default App;
