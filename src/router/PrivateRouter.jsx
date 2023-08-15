import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; //useSelector hookuyla veriyi cekeceğiz

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
