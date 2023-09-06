import { useEffect, useState } from "react";

export const useCounter = () => {
    const [message, setMessage] = useState('');
    const [run, setRun] = useState(false);

    useEffect(() => {
        if(run) {
            setMessage('Counting finished');

        } else {
            setMessage('Counting didn`t start')
        }
    },[run])

    return {
        message,
        setRun,
    }
    
};
