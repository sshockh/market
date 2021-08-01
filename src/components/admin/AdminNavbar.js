import { Link } from 'react-router-dom';

function AdminNavbar(props) {

    return (
        <div className='admin-navbar'>
            <ul>
                <Link to='/admin/users'><li>Пользователи</li></Link>
                <Link to='/admin/orders'><li>Заказы</li></Link>
                <Link to='/admin/products'><li>Товары</li></Link>
                <Link to='/admin/categories'><li>Категории</li></Link>
            </ul>
        </div>
    )

}

export default AdminNavbar;