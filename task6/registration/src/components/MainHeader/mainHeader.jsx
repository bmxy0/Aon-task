import Notification from "../svgs/notification";
import styles from "./mainHeader.module.css";
import search from "../../assets/search.svg";

const MainHeader = () => {

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <img src="logo.png" className={styles.logo} />
        <div className={styles.navigation}>
          <div className={styles.option}>
            <a className={styles.active}>Home</a>
            <div className={styles.active_line}></div>
          </div>
          <div className={styles.option}>
            <a>Dashboard</a>
            <div className={styles.inactive_line}></div>
          </div>
          <div className={styles.option}>
            <a>Settings</a>
            <div className={styles.inactive_line}></div>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.search}>
            <img src={search} />
            <input placeholder="Search" />
          </div>

          <button>
            <Notification stroke={"#9C9C9C"} fill={"none"} />
            <div className={styles.dot}></div>
          </button>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default MainHeader;
