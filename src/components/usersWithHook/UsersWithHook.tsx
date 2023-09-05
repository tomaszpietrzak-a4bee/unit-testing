import classnames from "classnames/bind";
import styles from "./UsersWithHook.module.scss";
import useFetchZipcode from "./useFetchZipcode";

const cx = classnames.bind(styles);

export type User = {
  address: {
    zipcode: string;
  };
};

const UsersWithHook = () => {
  const { zipcode, error } = useFetchZipcode();

  return (
    <div className={cx("users")}>
      <h2 className={cx("title")}>users with hook</h2>
      {error ? (
        <h1 className={cx("error")}>{error}</h1>
      ) : (
        <h1 className={cx("zipcode")}>
          zipcode: <span className={cx("number")}>{zipcode}</span>
        </h1>
      )}
    </div>
  );
};

export default UsersWithHook;
