import headerLogo from '../images/logo.svg'
import React  from 'react'
import { Link, useLocation } from "react-router-dom"

function Header() {
    const { pathname } = useLocation();
    const linkName = `${pathname === '/sign-up' ? 'Войти': 'Регистрация'}`;
    const linkUrl = `${pathname === '/sign-up' ? '/sign-in' : '/sign-up'}`;
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип сервиса Mesto" />
            <div className="header__nav">
                (
                    {/* Если пользователь уже залогинился, то выводим Email пользователя и кнопку выхода из профиля  */}
                    {/* { loggedIn ?
                        (
                            <>  
                                <span className="header__email">{email}</span>
                                <Link className="header__exit" to="/">Выйти</Link>
                            </>
                        ) : ( */}
                        {/* Если пользователь не залогинился, то вывод ссылки зависит от страницы нахождения пользователя */}
                        <Link className="header__link" to={linkUrl}>{linkName}</Link>
                        {/* )
                    } */}
                )
      </div>
        </header>
    )
}

export default Header