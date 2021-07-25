import React from 'react';
import LoginButton from './LoginButton';
import UserMenuButton from './UserMenuButton';

/** 
 * В зависимости от того, авторизован или нет пользователь,
 * отображается кнопка для перехода к форме ввода пароля 
 * или кнопка вызова меню пользователя
 */
function AuthMenuButton(props) {
    return (<>
        { props.isAuth
            ? <UserMenuButton />
            : <LoginButton />
        }
    </>)
}

export default AuthMenuButton;
