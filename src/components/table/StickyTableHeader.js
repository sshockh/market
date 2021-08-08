import React from 'react';
import TableCheckbox from './TableCheckbox';
import ContextMenu from '../context_menu/ContextMenu';

class StickyTableHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // для ContextMenu
            contextMenuRunning: false,
            contextMenuItems: [],
            mouseCoordinates: []
        }
    }

    // скрыть контекстное меню
    hideMenu = () => {
        this.setState({ contextMenuRunning: false })
    }

    // обработчик события contextmenu
    handleRightClick = (key, evt) => {
        evt.preventDefault();

        // координаты клика
        const mouseCoords = [evt.clientX, evt.clientY]
        // определить набор команд меню
        const items = ['Закрепить'];

        this.setState({
            mouseCoordinates: mouseCoords,
            contextMenuItems: items,
            contextMenuRunning: true
        });
    }

    // обработчик выбора пункта контекстного меню
    handleSelect = (value) => {
        if (value === 'Закрепить') {
            this.props.fixColumn();
        }
    }

    render() {
        const { key, desc } = this.props.sortOptions || {};

        // html с символом сортировки
        const arrowTag = () => {

            const [symbol, color] = desc ? ['▼', 'red'] : ['▲', 'blue'];
            const style = { color, fontSize: 18 };

            return <span className='arrow' style={style}>{symbol}</span>;
        }


        const handleClick = (col) => {
            if (col.sorted)
                this.props.doSort(col.key);
        }

        return (
            <>
                <div className='sticky-table-header scroll-copy'
                    style={{ scrollLeft: this.props.scroll }}
                >
                    <TableCheckbox />
                    {
                        this.props.columns.map(col => {
                            return (
                                <div
                                    className="sticky-table-header-cell"
                                    style={this.props.columnStyles[col.key]}
                                    key={'header_' + col.key}
                                    onClick={() => handleClick(col)}
                                    onContextMenu={this.handleRightClick.bind(null, col.key)}
                                >
                                    {col.title}
                                    {key === col.key ? arrowTag() : <div className='arrow'></div>}
                                </div>
                            )
                        })
                    }
                </div >
                <ContextMenu
                    running={this.state.contextMenuRunning}
                    items={this.state.contextMenuItems}
                    coords={this.state.mouseCoordinates}
                    hideMenu={this.hideMenu}
                    handleSelect={this.handleSelect}
                />
            </>
        )
    }
}

export default StickyTableHeader;