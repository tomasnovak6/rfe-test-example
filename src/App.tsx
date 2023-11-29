import React from 'react';
import './App.css';
import Tags from './components/tags/Tags';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from './store/counterInterface';
import { decrement, increment, reset } from './store/counterSlice';

function App() {

    const count = useSelector((state: StateInterface) => state.counter.value);
    const dispatch = useDispatch();

    const incrementClick = () => {
        return dispatch(increment());
    }

    const decrementClick = () => {
        return dispatch(decrement());
    }

    const resetClick = () => {
        return dispatch(reset())
    }

    let tagsList: JSX.Element[] = [];
    for (let i: number = 0; i < count; i++) {
        tagsList.push(<Tags example={i + 1}/>);
    }

    return (
      <div className="App">
          <header className="App-header">
              <h1>React Test Example</h1>
          </header>

          <div className="container mt-5">
              <div className="row">
                  <div className="col-2">
                      <span className="fw-bold">Count: { count }</span>
                  </div>
                  <div className="col-2">
                      <button type="button" className="btn btn-primary" onClick={incrementClick}>Increment</button>
                  </div>
                  <div className="col-2">
                      <button type="button" className="btn btn-secondary" onClick={decrementClick}>Decrement</button>
                  </div>
                  <div className="col-2">
                      <button type="button" className="btn btn-secondary"onClick={resetClick}>Reset</button>
                  </div>
              </div>
          </div>

          { tagsList }

      </div>
    );
}

export default App;
