import headerLogo from '../images/logo.svg'
import React from 'react'
import { Link, useLocation } from "react-router-dom"
import '../index.css'

function Header({ loggedIn, email, onSignOut }) {
    const { location } = useLocation();
    const linkName = `${location === '/sign-up' ? 'Войти' : 'Регистрация'}`;
    const linkUrl = `${location === '/sign-up' ? '/sign-in' : '/sign-up'}`;
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип сервиса Mesto" />
            <div className="header__nav">
                (
                    {loggedIn ?
                    (
                        <>
                            <span className="header__email">{email}</span>
                            <Link className="header__link" to="/" onClick={onSignOut}>
                                Выйти
                            </Link>
                        </>
                    ) : (
                        <Link className="header__link" to={linkUrl}>
                            {linkName}
                        </Link>
                    )
                }
                )
      </div>
        </header>
    )
}

export default Header