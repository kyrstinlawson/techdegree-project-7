// A NotFound component for displaying a user-friendly message when the search returns no results.

const NotFound = ({keyword}) => {
    return (
        <li className="not-found">
            <h2>No results found</h2>
            <p>Sorry, no results for {keyword}. Please try again.</p>
        </li>
    );
};

export default NotFound;