import React from "react";

import Card from "../../../UI/Card";

import styles from "./PlaygroundHeader.module.css";

const PlaygroundHeader = () => {
    return (
      <Card className={styles["playground__header"]}>
        <div>
          <h2>Gentle Quiz</h2>
        </div>
        <div>
          <p>H-Score 0%</p>
        </div>
      </Card>
    );
}

export default PlaygroundHeader;