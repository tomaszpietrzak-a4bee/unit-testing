import classnames from "classnames/bind";
import styles from "./Users.module.scss";
import { useEffect, useState } from "react";
import { getZipcode } from "./getZipcode";

const cx = classnames.bind(styles);

export type User = {
  address: {
    zipcode: string;
  };
};

const Navbar = () => {
  const [zipcode, setZipcode] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    getZipcode()
      .then((zipcode) => setZipcode(zipcode))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className={cx("users")}>
      <h2 className={cx("title")}>users</h2>
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

export default Navbar;
