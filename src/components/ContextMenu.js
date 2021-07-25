import './css/context_menu.css';

function ContextMenu(props) {

    function handleClick(evt) {
        evt.stopPropagation();
    }

    return (
        <div
            className="context-menu-canvas"
            onClick={props.hide}
        >
            <div
                className="context-menu-form"
                onClick={handleClick}
            >
                <ul>
                    <li>Профиль</li>
                    <li>Выйти</li>
                </ul>
            </div>
        </div>
    )
}

export default ContextMenu;