import React from 'react'
import '../index.css'

function Login() {
    return (
       <section className="sign-section">
           <h1 className="popup__title sign-form__title">Вход</h1>
            <form className="form sign-form">
                <input type="email" required className="form__input sign-form__input" placeholder="Email"></input>
                <input type="password" required className="form__input sign-form__input" placeholder="Пароль"></input>
                <button className="form__save-button sign-form__submit">Войти</button>
            </form>
       </section>
    )
}
export default Login