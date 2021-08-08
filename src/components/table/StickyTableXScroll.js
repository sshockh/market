
function StickyTableXScroll(props) {

    if (props.columns.length === 0)
        return null;

    function handleScroll(evt) {
        props.doScroll(evt.target.scrollLeft);
    }


    return (
        <div
            className='sticky-table-x-scroll'
            onScroll={handleScroll}>
            <div className='table-checkbox'></div>
            {
                props.columns.map(col => {
                    return (
                        <div
                            className='scroll-item'
                            style={props.columnStyles[col.key]}
                            key={'scroll_' + col.key}
                        ></div>
                    )
                })
            }
        </div>
    )
}

export default StickyTableXScroll;