function StickyTableRows(props) {

    return (
        props.data.map(row => {
            return (
                <div
                    className='sticky-table-row scroll-copy'
                    key={row.id}>
                    {props.columns.map(col => {
                        return (<div
                            className="item"
                            style={props.columnStyles[col.key]}
                            key={row.id + '_' + col.key}>
                            {row[col.key]}
                        </div>)
                    })}
                </div>
            )
        })
    );
}

export default StickyTableRows;