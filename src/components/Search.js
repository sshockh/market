import React from 'react';

function Search(props) {

    let refInput = React.createRef();

    function handleSubmit(e) {
        console.log(refInput.current.value);
        e.preventDefault();
    }

    return (
        <form className='search' onSubmit={handleSubmit} >
            <input ref={refInput} type="text" placeholder='Искать на ZoMarket' />
        </form>
    )
}

export default Search;