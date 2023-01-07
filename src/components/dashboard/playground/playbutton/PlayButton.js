import React from "react";

import styles from "./PlayButton.module.css";
import Card from "../../../UI/Card";

const PlayButton = ({setPlaygroundView}) => {
    const handleClick = () => {
        setPlaygroundView('setup');
    }
    return (
        <Card className={styles['playbutton__wrapper']}>
            <button className={styles['play__button']} onClick={handleClick}>Start new quiz</button>
        </Card>
    )
}

export default PlayButton;