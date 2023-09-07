import { useAuthStore } from "../../store/authStore";
import classnames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { UserRights } from "../../store/AuthTypes";

const cx = classnames.bind(styles);

const routes: { title: string; restrictions: UserRights[] }[] = [
  {
    title: "Login",
    restrictions: ["unauthorized"],
  },
  {
    title: "Register",
    restrictions: ["unauthorized"],
  },
  {
    title: "Profile",
    restrictions: ["user", "admin"],
  },
  {
    title: "Logout",
    restrictions: ["user", "admin"],
  },
  {
    title: "Profile manager",
    restrictions: ["admin"],
  },
];

const Navbar = () => {
  const userRights = useAuthStore((state) => state.userRights);

  return (
    <nav className={cx("navbar")}>
      {routes.map(
        ({ restrictions, title }) =>
          restrictions.includes(userRights) && (
            <span className={cx("link")} key={title}>
              {title}
            </span>
          )
      )}
    </nav>
  );
};

export default Navbar;
