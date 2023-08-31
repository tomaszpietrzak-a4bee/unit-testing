import { useAuthStore } from "../../store/authStore";
import classnames from "classnames/bind";
import styles from "./Navbar.module.scss";
const cx = classnames.bind(styles);

const routes = [
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
  const auth = useAuthStore((state) => state);

  return (
    <nav className={cx("navbar")}>
      {routes.map(
        ({ restrictions, title }) =>
          restrictions.includes(auth.userRights) && (
            <span className={cx("link")} key={title}>
              {title}
            </span>
          )
      )}
    </nav>
  );
};

export default Navbar;
