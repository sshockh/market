import PropTypes from 'prop-types';

function TableCheckbox(props) {

    return (
        <div className='table-checkbox' onClick={props.handleClick}>
            <input type="checkbox"
                checked={props.value}
                readOnly
            />
        </div>
    );
}

TableCheckbox.propTypes = {
    value: PropTypes.bool, // состояние чекбокса
    handleClick: PropTypes.func
}


TableCheckbox.defaultProps = {
    value: false
}

export default TableCheckbox;