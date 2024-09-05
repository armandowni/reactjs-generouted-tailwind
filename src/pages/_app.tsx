import { Outlet } from "react-router-dom";

// this file is for layout of the
export default function App() {
  return (
    <div>
      {/* for name app */}
      <title>naming</title>
      <span className="text-blue-500 text-xl">inside layout</span>

      <Outlet />
    </div>
  );
}
