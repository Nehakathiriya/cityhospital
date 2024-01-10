import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice/counter.slice';
// import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    console.log(counter);
    
    const handleInc = () => {
        dispatch(increment())
    }

    const handleDic = () => {
        dispatch(decrement())
    }

    return (
        <div className='counter_container'>
            
            <br></br>
            
            <button  onClick={handleInc}>+</button>
            {counter.count}
            <button onClick={handleDic}>-</button>
        </div>
    );
}

export default Counter;

