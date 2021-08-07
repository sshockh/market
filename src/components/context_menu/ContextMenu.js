import React from 'react';
import ReactDOM from 'react-dom';
import './context_menu.css';
import PropTypes from 'prop-types';

class ContextMenu extends React.Component {

    static propTypes = {
        running: PropTypes.bool,
        coords: PropTypes.arrayOf(PropTypes.number),
        items: PropTypes.arrayOf(PropTypes.string),
        handleSelect: PropTypes.func,
        hideMenu: PropTypes.func
    }
    static defaultProps = {
        running: false,
        handleSelect: function (val) { console.log(`Выбран пункт '${val}'`) }
    }

    style = () => {
        const [x = 400, y = 500] = this.props.coords || [];
        return {
            left: x,
            top: y
        }
    }

    handleFormClick = (evt) => {
        evt.stopPropagation();
    }

    hide = (evt) => {
        evt.preventDefault();
        this.props.hideMenu();
    }

    handleSelect = (value, evt) => {
        this.props.hideMenu();
        this.props.handleSelect(value);
    }

    render() {
        return this.props.running
            ? ReactDOM.createPortal(
                <div
                    className="context-menu-canvas"
                    onClick={this.hide}
                    onContextMenu={this.hide}
                >
                    <div
                        className="context-menu-form"
                        onClick={this.handleFormClick}
                        style={this.style()}
                    >
                        {
                            this.props.items.map(val => (
                                <div
                                    className='context-menu-item'
                                    onClick={this.handleSelect.bind(null, val)}
                                    key={val}
                                >
                                    {val + '...'}
                                </div>
                            ))
                        }
                    </div>
                </div>,
                document.querySelector('body'))
            : null;
    }
}

export default ContextMenu;