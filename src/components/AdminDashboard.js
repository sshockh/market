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
            <div className='admim-layout'>
                <h1>AdminDashboard</h1>
                <Table />
            </div>
        )
    }

}

export default AdminDashboard;