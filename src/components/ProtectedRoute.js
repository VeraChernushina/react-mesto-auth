import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ components: Component, ...props }) => {
  return (
    <Route>
      {() => {
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
