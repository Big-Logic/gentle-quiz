import React from "react";

import Card from "../../UI/Card";
import face from "./face.jpg";

import styles from "./ActiveUser.module.css";

const ActiveUser = () => {
    return (
      <Card className={styles["active__user--cont"]}>
        <div>
          <button>
            <i className={`${"las la-cog"} ${styles["user__btn--icon"]}`}></i>
          </button>
        </div>
        <div>
          <h2>Big Logic</h2>
        </div>
        <div>
          <div className={styles["user__img--wrapper"]}>
            <img src={face} alt="user-pic" />
          </div>
        </div>
        <div>
          <div className={styles["logout__btn--wrapper"]}>
            <button className={styles["logout__btn1"]}>
              <i
                className={`${"las la-angle-down"} ${
                  styles["user__btn--icon1"]
                }`}
              ></i>
            </button>
            <button className={styles["logout__btn2"]}>Logout</button>
          </div>
        </div>
      </Card>
    );
}

export default ActiveUser;