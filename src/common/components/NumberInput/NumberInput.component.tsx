import { forwardRef } from "react";
import styles from "./NumberInput.module.css";

interface Props {
    value?: number;
    onChange?(value: number | undefined): any;
}

export default forwardRef<HTMLDivElement, Props>(function NumberInput({
    value,
    onChange,
}: Props, ref): JSX.Element {

    function notifyChange(value: number | undefined) {
        onChange && onChange(value);
    }

    function onKeyUp(e: any) {
        const currentValue = value || 0;

        if (e.key === "Delete") {
            notifyChange(undefined);
        } else if (e.key === "ArrowUp" && currentValue < 9) {
            notifyChange(currentValue + 1);
        } else if (e.key === "ArrowDown") {
            if (value === undefined) {
                notifyChange(0);
            } else if (currentValue > 0) {
                notifyChange(currentValue - 1);
            }
        } else {
            const numericValue = parseInt(e.key, 10);
            if (!isNaN(numericValue)) {
                notifyChange(numericValue);
            }
        }
    }

    return (
        <div ref={ref} role="textbox" className={styles.root} onKeyUp={onKeyUp} tabIndex={0}>
            <span>{value}</span>
        </div>
    );
});