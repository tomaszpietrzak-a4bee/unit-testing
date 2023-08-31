import { UserRights, useAuthStore } from "../../store/authStore";
import classnames from "classnames/bind";
import styles from "./AuthButtons.module.scss";
const cx = classnames.bind(styles);

const AuthButtons = () => {
  const auth = useAuthStore((state) => state);

  const login = (right: UserRights) => {
    auth.authorize(right);
  };

  const logout = () => {
    auth.unauthorize();
  };

  return (
    <>
      <div className={cx("auth-buttons")}>
        <button onClick={() => login("user")}>Authorize</button>
        <button onClick={logout}>Unauthorize</button>
        <button onClick={() => login("admin")}>Authorize as Admin</button>
      </div>

      <div className={cx("current-right")}>
        <h3>Current right:</h3>
        <h1>{auth.userRights}</h1>
      </div>
    </>
  );
};

export default AuthButtons;
