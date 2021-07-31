import React from 'react';
import Table from './table/Table';
import './css/admin.css';

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='admin-layout'>
                <h1>AdminDashboard</h1>
                <Table name={'1'} />
            </div>
        )
    }

}

export default AdminDashboard;