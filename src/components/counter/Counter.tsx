import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../store/counterSlice";
import { CounterPayload } from "../../store/counterInterface";

export function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    const incrementClick = (): CounterPayload => {
        return dispatch(increment());
    }

    const decrementClick = (): CounterPayload => {
        return dispatch(decrement());
    }

    const resetClick = (): CounterPayload => {
        return dispatch(reset())
    }

    return (
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
    )
}