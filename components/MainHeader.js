import React from 'react'

const MainHeader = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img src="/img/logo.png" alt="" className="logo" />
        <ul>
          <li><button className="login">log in</button></li>
        </ul>
      </nav>

      <div className="header__content">
        <h4>Bundle with any hulu plan & save</h4>
        <img src="/img/logos.png" alt="logos" className="banner" />
        <div className="header__text--description">Get endless entertainment, live sports, and the shows and movies you love.</div>
        <button className="cta">get the disney bundle</button>
        <div className="legal__text">
          <a className='underline' href="#">What&apos;s included?</a>
          <span className='font-light'> See</span>
          <a className='underline' href="#"> Bundle terms</a>
        </div>
        <div className="helper__text">Sign up for Hulu only</div>
      </div>
    </header>
  )
}

export default MainHeader