import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h1>Error loading page</h1>
      <Link to='/'>Get back to home page by clicking here</Link>
    </>
  );
}

export default ErrorPage;