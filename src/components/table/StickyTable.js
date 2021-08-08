import React from 'react';
import StickyTableHeader from './StickyTableHeader';
import StickyTableRows from './StickyTableRows';
import StickyTableXScroll from './StickyTableXScroll';
import './sticky_table.css';

class StickyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            marked: null, // текущая запись
            checked: new Set(), // список записей, отмеченных через checkbox
            fixedColumn: null // закрепленная колонка
        }
    }

    doSearch = (evt) => {
        this.props.doSearch(evt.target.value);
    }

    doScroll = (scrollLeft = 0) => {
        this.setState({
            scroll: scrollLeft
        })
    }
    doMark = (id) => {
        this.setState({ marked: id });
    }

    handleCheckboxClick = (id) => {
        const set = new Set(this.state.checked)

        if (set.has(id))
            set.delete(id);
        else set.add(id);

        this.setState({ checked: set })
    }

    // закрепляет колонку таблицы
    fixColumn = (id) => {
        if (this.state.fixColumn !== id)
            this.setState({ fixedColumn: id })
    }

    render() {
        const styles = {};
        this.props.columns.forEach(col => {
            styles[col.key] = {
                minWidth: col.width,
                maxWidth: col.width,
            }
        });

        return (
            <div className='sticky-table-container'>
                <div className='table-settings-panel'>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder='Поиск'
                            onChange={this.doSearch}
                        /></div>
                </div>
                <StickyTableHeader
                    columns={this.props.columns}
                    columnStyles={styles}
                    sortOptions={this.props.sortOptions}
                    doSort={this.props.doSort}
                    scroll={this.state.scroll}
                    fixedColumn={this.state.fixedColumn}
                // TODO: фиксированная колонка
                />
                <StickyTableRows
                    data={this.props.data}
                    columns={this.props.columns}
                    columnStyles={styles}
                    scroll={this.state.scroll}
                    doMark={this.doMark}
                    marked={this.state.marked}
                    checked={this.state.checked}
                    handleCheckboxClick={this.handleCheckboxClick}
                    fixedColumn={this.state.fixedColumn}
                />
                <StickyTableXScroll
                    columns={this.props.columns}
                    columnStyles={styles}
                    doScroll={this.doScroll}
                    fixedColumn={this.state.fixedColumn}
                />
            </div>

        );
    }
}

export default StickyTable;