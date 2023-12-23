import { Link } from 'react-router-dom';

function Error404 () {
    return (
        <main>
            <h1>This site is not available!</h1>
            <Link to="/"> go back </Link>
        </main>
    );
}

export default Error404;