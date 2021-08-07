import React from 'react';
import ContextMenu from './context_menu/ContextMenu';

class UserMenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contextMenu: false
        }
    }

    toggleContextMenu = () => {
        this.setState({ contextMenu: !this.state.contextMenu })
    }

    hideContextMenu = () => {
        this.setState({
            contextMenu: false
        });
    }

    render() {
        return (
            /*
            <div onClick={props.logout}>
                {props.username}
            </div>*/
            <div>
                <button
                    onClick={this.toggleContextMenu}
                >context menu</button>
                { this.state.contextMenu ? <ContextMenu hide={this.hideContextMenu} /> : null}
            </div>
        )
    }
}

export default UserMenuButton;