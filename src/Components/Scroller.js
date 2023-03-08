import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./Wrapper.module.css";
const Scroller = () => {

    const [scroll, setScroll] = useState(0);
    const onscroll = () => {
        const winupscroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const resultscroll = (winupscroll / height) * 100;
        console.log(resultscroll);
        setScroll(resultscroll);
    }
    useEffect(() => {
        window.addEventListener("scroll", onscroll)
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.backscroller}>
                <div className={styles.frontscroller} style={{ width: `${scroll}%` }}></div>
            </div>
        </div>

    );
};

export default Scroller;