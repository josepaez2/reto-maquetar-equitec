import React from 'react'

const Header = props => (
  // <header className="App-header">
  //   {/* <img src={props.logo} className="App-logo" alt="logo" /> */}
  //   <h1 className="App-title">Welcome to React </h1>
  // </header>

<header>
<nav class="navbar navbar-expand-lg navbar-color">
  <div class="container header">
    <div class="logo-container">
      <a href="/">
        <img class="logo-equitec" src="../assets/images/nav-bar/logo.png" alt="logo-equitec" />
</a>    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img src="../assets/images/nav-bar/hamburguer.png" alt="navbar-toggler" /></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

          <li class="nav-item">
            <a class="nav-link" href="/employees/sign_in">Empleados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/customers/sign_in">Clientes</a>
          </li>

      </ul>
    </div>
  </div>
</nav>
<div class="franja"></div>
</header>
)

export default Header
