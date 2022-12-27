import React from "react";
import Card from "../../UI/Card";

import styles from './UserListing.module.css';

import face from './face.jpg';

const UserListing = () => {
    return (
      <Card className={styles["userlisting__cont"]}>
        <div>
          <h2 className={styles['userlisting__header']}>Active Players</h2>
        </div>
        <div className="form__input--grid">
          <div>
            <label htmlFor="search">
              <input
                type="text"
                placeholder="search"
                id="search"
                className="form__input"
              />
            </label>
          </div>
          <div className="form__icon--wrapper">
            <i class="las la-search"></i>
          </div>
        </div>
        <div>
          <div className={styles["user__cont"]}>
            <div>
              <div className={styles["user__img--wrapper"]}>
                <img src={face} alt="user-pic" />
              </div>
            </div>
            <div>
              <p className={styles["user__name"]}>Alfred</p>
              <p>
                Highest Score: <span className={styles['user__scores']}>100%</span>
              </p>
            </div>
          </div>
          <div className={styles["user__cont"]}>
            <div>
              <div className={styles["user__img--wrapper"]}>
                <img src={face} alt="user-pic" />
              </div>
            </div>
            <div>
              <p className={styles["user__name"]}>Alfred</p>
              <p>
                Highest Score: <span className={styles['user__scores']}>100%</span>
              </p>
            </div>
          </div>
          <div className={styles["user__cont"]}>
            <div>
              <div className={styles["user__img--wrapper"]}>
                <img src={face} alt="user-pic" />
              </div>
            </div>
            <div>
              <p className={styles["user__name"]}>Alfred</p>
              <p>
                Highest Score: <span className={styles['user__scores']}>100%</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
}

export default UserListing;