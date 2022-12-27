import React from "react";

import formlogo from './formlogo.svg';

import styles from './Login.module.css';

const Login = () => {
    return (
      <section className="form__section">
        <div className="form__main--wrapper">
          <div className="form__form--wrapper">
            <form className="form">
              <div>
                <h3 className="form__header">You are back!!</h3>
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
                    Signin
                  </button>
                </div>
                <div>
                  <p className={styles["forgot__pswd"]}>
                    oops! <a href="#">Forgot Password?</a>
                  </p>
                </div>
              </div>
              <div>
                <p className={styles["no__acc--p"]}>
                  Got no account? <a href="#">Register now.</a>
                </p>
              </div>
              <div></div>
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

export default Login;