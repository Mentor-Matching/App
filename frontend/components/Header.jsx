import React from 'react';
// import logo from '../static/MM.png'

const Header = () => (
  <>
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <a href="/">
          <img className="mm-logo" src="https://lh3.google.com/u/0/d/1xBt1GdJNYN4a2RwNNBIFPyy89wDNzLDb=w1267-h944-iv1" />
        </a>
      </div>
      <div className="menu-wrapper">
        <div className="menu-items-container">
          <a href="/" className="menu-item">멘토 되기</a>
          <a href="/" className="menu-item">멘토 찾기</a>
          <a href="/login" className="menu-item">로그인</a>
          <a href="/sign-up" className="menu-item">가입</a>
        </div>
      </div>
    </div>
  </>
)

export default Header;