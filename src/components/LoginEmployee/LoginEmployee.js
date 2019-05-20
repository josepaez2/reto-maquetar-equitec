import React from 'react'

const LoginEmployee = props => (
  <>
  <div id="father"> {/* eslint-disable-next-line */}
      {/* <div id="notice_wrapper" class="alert alert-success alert-dismissible fade show" role="alert" style="display: none;">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        Cerraste sesión correctamente.
      </div> */}
  </div>
  <div class="center-container">
  <div class="login-container">
    <h2 class="azul-oscuro">Empleados</h2>

    <form class="new_employee" id="new_employee" action="/employees/sign_in" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" /><input type="hidden" name="authenticity_token" value="RTV8iGVgBljIwxgUzws91/NTRc1QcQElFrZ24p6BgptXYt4u4WvHiDKywRTohSCPGLo+jg+EeeR5d3o1h7RRGQ==" />
      <div class="field">
        <input placeholder="Correo" autofocus="autofocus" class="mail-password-input" type="text" value="" name="employee[login]" id="employee_login" />
      </div>

      <div class="field">
        <input placeholder="Contraseña" autocomplete="off" class="mail-password-input" type="password" name="employee[password]" id="employee_password" />
      </div>

      <div class="actions">
        <input type="submit" name="commit" value="Ingresar" class="login-button" data-disable-with="Ingresar" />
      </div>

        <div class="field">
          <input name="employee[remember_me]" type="hidden" value="0" /><input type="checkbox" value="1" name="employee[remember_me]" id="employee_remember_me" />
          <label for="employee_No cerrar sesión">No cerrar sesión</label>
        </div>

</form>
      <a class="gris-oscuro" href="/employees/password/new">Olvidaste tu contraseña?</a><br />
  </div>
</div>

<div class="franja"></div>



</>
)

export default LoginEmployee
