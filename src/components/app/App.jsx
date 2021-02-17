import React, { useReducer, useState } from 'react';
import colorReducer,{ initialState } from '../reducer/Reducer';

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const undo = () => {dispatch({ type: 'undo'});};
  const redo = () => {dispatch({ type: 'redo'});};


  return (
    <>
      <button disabled={!state.before.length} data-testid="before" onClick={undo}>undo</button>
      <button disabled={!state.after.length} data-testid="after" onClick={redo}>redo</button>
      <input data-testid="current" type="color" id="current" value={state.current}
        onChange={({ target }) => {dispatch({type: target.id, payload: target.value })}} />
      <div  data-testid="display" style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}>
      </div>
    </>
  );
}

export default App;