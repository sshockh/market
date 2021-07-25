import React from 'react';

function LoginForm(props) {

    var usernameRef = React.createRef();
    var passwordRef = React.createRef();

    const auth = (evt) => {
        evt.preventDefault();
        props.login(usernameRef.current.value, passwordRef.current.value);
    }

    return (
        <form className='login-form' onSubmit={auth}>
            <label>Пользователь<input type="text" className='login-username' ref={usernameRef} autoFocus /></label><br />
            <label>Пароль<input type="password" className='login-password' ref={passwordRef} /></label><br />
            <input type="submit" className='login-submit' value="Войти" />
        </form>
    )
}
export default LoginForm;