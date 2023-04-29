import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

export default function MainLayout() {

    return (
        <div className={styles.root}>
            <Outlet />
        </div>
    );
}