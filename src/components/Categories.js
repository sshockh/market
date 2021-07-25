import { Link } from 'react-router-dom';

function Categories(props) {

    return (
        <div className="categories">
            <ul>
                {
                    Object.keys(props.categories).map(key => (
                        <Link to={"/catalog?category=" + key} className="category" key={key}>
                            <li>
                                {props.categories[key].name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;