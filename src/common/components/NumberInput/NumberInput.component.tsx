import { useState } from "react";
import styles from "./NumberInput.module.css";

export default function NumberInput() {

    const [ value, setValue ] = useState<number>();

    function onKeyUp(e: any) {
        const currentValue = value || 0;

        if (e.key === "ArrowUp" && currentValue < 9) {
            setValue(currentValue + 1);
        } else if (e.key === "ArrowDown" && currentValue > 0) {
            setValue(currentValue - 1);
        } else {
            const numericValue = parseInt(e.key, 10);
            if (!isNaN(numericValue)) {
                setValue(numericValue);
            }
        }
    }

    return (
        <div className={styles.root} onKeyUp={onKeyUp} tabIndex={0}>
            {value}
        </div>
    );
}