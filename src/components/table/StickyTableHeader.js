function StickyTableHeader(props) {

    return (
        <div className='sticky-table-header scroll-copy'>
            {
                props.columns.map(col => {
                    return (<div
                        className="sticky-table-header-cell"
                        style={props.columnStyles[col.key]}
                        key={'header_' + col.key}
                    >{col.title}</div>)
                })
            }
        </div>
    )
}

export default StickyTableHeader;