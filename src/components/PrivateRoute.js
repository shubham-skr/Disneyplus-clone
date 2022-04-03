import { Route, Redirect } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to='/' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
