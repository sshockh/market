import React from 'react';
import TableContainer from '../table/TableContainer';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                users: [
                    { id: 1, username: "tsar", email: 'tsar@mail.ru' },
                    { id: 2, username: "kaa", email: 'kaa@mail.ru' },
                    { id: 3, username: "ivanov", email: 'ivanov@mail.ru' },
                    { id: 4, username: "pusyr", email: 'pusyr@mail.ru' },
                    { id: 5, username: "aushkin", email: 'aushkin@mail.ru' }
                ]
            });
        }, 250);
    }

    render() {
        const columns = [
            {
                key: "id",
                title: 'id',
                width: 50,
                propName: 'id',
                sorted: true,
                searchable: true
            },
            {
                key: "username",
                title: 'Имя пользователя',
                width: 200,
                propName: 'username',
                sorted: true,
                searchable: true
            },
            {
                key: "email",
                title: 'email',
                width: 500,
                propName: 'email',
                sorted: true,
                searchable: true
            }
        ];
        return (
            <div className='users-admin'>
                { this.state.users.length > 0
                    ?
                    <TableContainer
                        columns={columns}
                        data={this.state.users}
                    />
                    : null
                }
            </div>
        )
    }

}

export default Users;