import React from "react";

import styles from './Signup.module.css';

import formlogo from './formlogo.svg';

const Signup = () => {
    return (
      <section className="form__section">
        <div className="form__main--wrapper">
          <div className="form__form--wrapper">
            <form className="form">
              <div>
                <h3 className="form__header">Welcome here!!</h3>
              </div>
              <div className="form__input--grid">
                <div>
                  <label htmlFor="firstname">
                    <input
                      type="text"
                      placeholder="firstname"
                      id="firstname"
                      className="form__input"
                    />
                  </label>
                </div>
                <div className="form__icon--wrapper">
                  <i class="las la-user"></i>
                </div>
              </div>
              <div className="form__input--grid">
                <div>
                  <label htmlFor="lastname">
                    <input
                      type="text"
                      placeholder="lastname"
                      id="lastname"
                      className="form__input"
                    />
                  </label>
                </div>
                <div className="form__icon--wrapper">
                  <i class="las la-user"></i>
                </div>
              </div>
              <div className="form__input--grid">
                <div>
                  <label htmlFor="username">
                    <input
                      type="text"
                      placeholder="username"
                      id="username"
                      className="form__input"
                    />
                  </label>
                </div>
                <div className="form__icon--wrapper">
                  <i class="las la-user"></i>
                </div>
              </div>
              <div className="form__input--grid">
                <div>
                  <label htmlFor="password">
                    <input
                      type="password"
                      placeholder="password"
                      id="password"
                      className="form__input"
                    />
                  </label>
                </div>
                <div className="form__icon--wrapper">
                  <i class="las la-key"></i>
                </div>
              </div>
              <div className="grid__4060--uneven">
                <div>
                  <button type="submit" className="form__btn">
                    Signup
                  </button>
                </div>
                <div>
                  <p className={styles["forgot__pswd"]}>
                    <a href="#">Our terms and conditions</a>
                  </p>
                </div>
              </div>
              <div>
                <p className={styles["no__acc--p"]}>
                  Got an account? <a href="#">Signin now.</a>
                </p>
              </div>
            </form>
          </div>
          <div className="form__image--main-wrapper">
            <div className="form__image--wrapper">
              <img src={formlogo} alt="im" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Signup;