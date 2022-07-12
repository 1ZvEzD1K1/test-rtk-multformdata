import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__container _container">
          <div className="header__logo logo">
            <div className="logo__img">
              <img src={require("../img/logo.png")} alt="logo" />
            </div>
            <div className="logo__title">
              <h4>TESTTASK</h4>
            </div>
          </div>
          <div className="header__buttons buttons">
            <div className="button__container">
              <input type="button" className="header__button" value="Users" />
            </div>
            <div className="button__container">
              <input type="button" className="header__button" value="Sign up" />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header