import React from "react";

class StickyTableRows extends React.Component {

    componentDidUpdate() {
        const divs = document.querySelectorAll('.scroll-copy');
        const shift = this.props.scroll;
        divs.forEach(d => {
            d.scrollLeft = shift;
        })
    }
    render() {
        return (
            this.props.data.map(row => {
                return (
                    <div
                        className='sticky-table-row scroll-copy'
                        key={row.id}
                        style={{ scrollLeft: this.props.scroll }}
                    >
                        {this.props.columns.map(col => {
                            return (
                                <div
                                    className="item"
                                    style={this.props.columnStyles[col.key]}
                                    key={row.id + '_' + col.key}>
                                    {row[col.key]}
                                </div>
                            )
                        })}
                    </div>
                )
            })
        );
    }
}

export default StickyTableRows;