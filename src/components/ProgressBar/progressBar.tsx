
import { useEffect, useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar({ pg }) {

    const [ani, setAni] = useState(0)

    useEffect(() => {
        setTimeout(() => setAni(pg), 100)
    }, [pg]);


    return (
        <div className='progressbody'>
            <div className="outer">
                <div className="inner" style={{
                    transform: `translatex(${ani - 100}%)`
                }}
                    aria-valuenow={pg}
                    aria-valuemax={100}
                    aria-valuemin={0}
                >
                    {pg}
                </div>
            </div>
        </div>
    )
}