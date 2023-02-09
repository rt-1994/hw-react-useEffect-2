import React, {useState, useEffect, useRef} from "react";
import styles from "./Clock.scss";

const Clock = () => {

    const [time, setTime] = useState(new Date())
    const hour = useRef(null)
    const minute = useRef(null)
    const second = useRef(null)


    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)

        let s = time.getSeconds()
        let m = time.getMinutes()
        let h = time.getHours() > 12 ? time.getHours()-12 : time.getHours()


        second.current.style.transform = `rotate(${s * 6+180}deg) translateX(-50%)`
        minute.current.style.transform = `rotate(${m * 6 + 180}deg) translateX(-50%)`
        hour.current.style.transform = `rotate(${(h * 30 + 180)+m/2}deg) translateX(-50%)`
    })

    return (
        <div className={styles.clock}>
            <div className={styles.clockFrame}>
                <span ref={hour} className={styles.houre}></span>
                <span ref={minute} className={styles.minute}></span>
                <span ref={second} className={styles.second}></span>
                <span className={styles.center}></span>
                <ul className={styles.numbers}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>
            </div>

        </div>
    )
}

export default Clock;