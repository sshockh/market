import React from 'react';
import './admin.css';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';
import AdminContent from './AdminContent';

class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='admin-layout'>
                <AdminHeader />
                <div className='admin-main'>
                    <AdminNavbar />
                    <AdminContent />
                </div>
            </div>
        )
    }

}

export default AdminDashboard;