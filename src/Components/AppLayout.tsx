import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav className="sticky top-0 bg-amber-300 px-2 py-8 flex justify-between">
        <h1>NAME</h1>
        <ul className="flex gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"/calendar"}>Calendar</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
