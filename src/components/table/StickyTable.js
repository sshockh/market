import React from 'react';
import StickyTableHeader from './StickyTableHeader';
import StickyTableRows from './StickyTableRows';
import StickyTableXScroll from './StickyTableXScroll';
import './sticky_table.css';

class StickyTable extends React.Component {

    render() {
        const styles = {}
        this.props.columns.forEach(col => {
            styles[col.key] = {
                minWidth: col.width,
                maxWidth: col.width
            }
        });

        return (
            <div className='sticky-table-container'>
                <StickyTableHeader
                    columns={this.props.columns}
                    columnStyles={styles}
                />
                <StickyTableRows
                    data={this.props.data}
                    columns={this.props.columns}
                    columnStyles={styles}
                />
                <StickyTableXScroll
                    columns={this.props.columns}
                    columnStyles={styles}
                />
            </div>
        );
    }
}

export default StickyTable;