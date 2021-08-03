function handleXScroll(evt) {
    const divs = document.querySelectorAll('.scroll-copy');
    const shift = evt.target.scrollLeft;
    divs.forEach(d => {
        d.scrollLeft = shift;
    })
}

function StickyTableXScroll(props) {

    if (props.columns.length === 0)
        return null;

    return (
        <div
            className='sticky-table-x-scroll'
            onScroll={handleXScroll}>
            {
                props.columns.map(col => {
                    return (<div
                        className='scroll-item'
                        style={props.columnStyles[col.key]}
                        key={'scroll_' + col.key}
                    ></div>)
                })
            }
        </div>
    )
}

export default StickyTableXScroll;