import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    //useSelector hookuyla user bilgisini al
  const {user} = useSelector((state) => state.auth)


  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
