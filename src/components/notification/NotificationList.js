import ReactDOM from 'react-dom';

function NotificationList(props) {
    return ReactDOM.createPortal(
        <div className='notification-list-container'>hi</div>,
        document.querySelector('body')
    )
}

export default NotificationList;