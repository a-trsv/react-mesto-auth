import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Register() {
    return (
       <section className="sign-section">
           <h1 className="popup__title sign-form__title">Регистрация</h1>
            <form className="form sign-form">
                <input type="email" required className="form__input sign-form__input" placeholder="Email"></input>
                <input type="password" required className="form__input sign-form__input" placeholder="Пароль"></input>
                <button className="form__save-button sign-form__submit">Зарегистрироваться</button>
            </form>
            <Link className="sign-form__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
       </section>
    )
}
export default Register