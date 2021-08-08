import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

// Контейнерный компонент. Инкапсулирует процесс аутентификации
class Authentification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    login = (username, password) => {
        console.log(username, password);
        fetch("http://localhost:8090/api/auth/signin",
            {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:8090'
                }),
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(data => {
                            localStorage.setItem('token', data['accessToken']);
                            this.props.setAuth(true, username);
                            this.setState({ redirect: true });
                        })
                }
                console.log(res.status, res.statusText);
            })
            .catch(err => {
                alert(err.message);
            });
    }

    render() {
        return (<>
            {
                this.state.redirect
                    ? <Redirect to="/" />
                    : <LoginForm login={this.login} />
            }
        </>
        )
    }
}
export default Authentification;