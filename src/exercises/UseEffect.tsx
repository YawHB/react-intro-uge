import { useEffect, useState } from 'react';
import { BaseProps } from '../types';

export default function UseEffectDemo({ title }: BaseProps) {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    //infinite loop without a dependency array and clearInterval.
    useEffect(() => {
        if (!isCounting) return;
        const intervalID = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 500);
        return () => {
            clearInterval(intervalID);
        };
    }, [isCounting]);

    return (
        <>
            <h2>{title}</h2>
            <p>{count}</p>
            <button onClick={() => setIsCounting((prev) => !prev)}>{isCounting ? 'Stop Count' : 'Start Count'}</button>
        </>
    );
}
