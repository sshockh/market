import React, { Fragment } from "react";
import classNames from "classnames";
import ContextMenu from "../context_menu/ContextMenu";
import TableCheckbox from './TableCheckbox';

class StickyTableRows extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // для ContextMenu
            contextMenuRunning: false,
            contextMenuItems: [],
            mouseCoordinates: []
        }
    }

    componentDidUpdate() {
        const divs = document.querySelectorAll('.scroll-copy');
        const shift = this.props.scroll;
        divs.forEach(d => {
            d.scrollLeft = shift;
        })
    }

    handleClick = (id, evt) => {
        this.props.doMark(id);
    }

    handleRightClick = (id, evt) => {
        evt.preventDefault();
        // делаем строку текущей
        this.props.doMark(id);
        // координаты клика
        const mouseCoords = [evt.clientX, evt.clientY]
        // определить набор команд меню
        const items = ['Добавить', 'Размножить', 'Исправить', 'Удалить', 'Обновить'];

        this.setState({
            mouseCoordinates: mouseCoords,
            contextMenuItems: items,
            contextMenuRunning: true
        });
    }

    hideMenu = (evt) => {
        this.setState({ contextMenuRunning: false });

        // TODO: продолжить всплытие события
    }


    render() {
        return (
            <>
                {
                    this.props.data.map(row => {
                        return (
                            <div
                                className={classNames({
                                    'sticky-table-row': true,
                                    'scroll-copy': true,
                                    'marked': this.props.marked === row.id
                                })}
                                key={row.id}
                                style={{ scrollLeft: this.props.scroll }}
                                onClick={this.handleClick.bind(null, row.id)}
                                onContextMenu={this.handleRightClick.bind(null, row.id)}
                            >
                                <TableCheckbox
                                    value={this.props.checked.has(row.id)}
                                    handleClick={this.props.handleCheckboxClick.bind(null, row.id)}
                                />
                                {this.props.columns.map(col => {
                                    return (
                                        <div
                                            className="item"
                                            style={this.props.columnStyles[col.key]}
                                            key={row.id + '_' + col.key}
                                            dangerouslySetInnerHTML={{ __html: row[col.key] }}
                                        >
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                <ContextMenu
                    running={this.state.contextMenuRunning}
                    items={this.state.contextMenuItems}
                    coords={this.state.mouseCoordinates}
                    hideMenu={this.hideMenu}
                />
            </>
        );
    }
}

export default StickyTableRows;