import React from 'react';
import StickyTableHeader from './StickyTableHeader';
import StickyTableRows from './StickyTableRows';
import StickyTableXScroll from './StickyTableXScroll';
import './sticky_table.css';

class StickyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0
        }
    }

    doScroll = (scrollLeft = 0) => {
        this.setState({
            scroll: scrollLeft
        })
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
                        /></div>
                </div>
                <StickyTableHeader
                    columns={this.props.columns}
                    columnStyles={styles}
                    sortOptions={this.props.sortOptions}
                    doSort={this.props.doSort}                    
                    scroll={this.state.scroll}
                />
                <StickyTableRows
                    data={this.props.data}
                    columns={this.props.columns}
                    columnStyles={styles}
                    scroll={this.state.scroll}
                />
                <StickyTableXScroll
                    columns={this.props.columns}
                    columnStyles={styles}
                    doScroll={this.doScroll}
                />
            </div>

        );
    }
}

export default StickyTable;