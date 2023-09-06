import { useCounter } from "./useCounter";

const Exercise3 = () => {

    const {message, setRun} = useCounter();

    return (
        <div className="container">
            <button className='start' onClick={() => {setRun(true)}}>Start</button>
            <button className='stop' onClick={() => {setRun(false)}}>Stop</button>
            <p className="message">{message}</p>
        </div>
    )
}
export default Exercise3;