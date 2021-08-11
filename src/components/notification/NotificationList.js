import ReactDOM from 'react-dom';
import './notifications.css';

function NotificationList(props) {
    return ReactDOM.createPortal(
        <div className='notification-list-container'>
            {
                props.notifications.map(not => (
                    <div className='notification' key={not.id}>
                        {not.text}
                        <button
                            className='button'
                            onClick={props.markAsRead.bind(null, not.id)}
                        >x</button>
                    </div>
                ))
            }
        </div>,
        document.querySelector('body')
    )
}

export default NotificationList;