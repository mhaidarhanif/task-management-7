import { NavLink, type NavLinkProps } from "react-router";

export function NavLinkCustom(props: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "font-bold text-blue-700" : "")}
      {...props}
    />
  );
}
