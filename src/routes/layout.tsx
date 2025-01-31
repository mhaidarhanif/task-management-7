import { NavLinkCustom } from "@/components/ui/navlink";
import { Outlet } from "react-router";

export function LayoutRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-center">
        <nav className="py-4">
          <ul className="flex gap-4">
            <li>
              <NavLinkCustom to="/">App</NavLinkCustom>
            </li>
            <li>
              <NavLinkCustom to="/about">About</NavLinkCustom>
            </li>
            <li>
              <NavLinkCustom to="/counter">Counter</NavLinkCustom>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex-[1]">
        <Outlet />
      </div>

      <footer className="flex justify-center">
        <p>{new Date().getFullYear()} &copy; Task Management</p>
      </footer>
    </div>
  );
}
