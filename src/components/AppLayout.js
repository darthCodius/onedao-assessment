import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container w-75 my-5">
      <Outlet />
    </div>
  );
};

export default AppLayout;
