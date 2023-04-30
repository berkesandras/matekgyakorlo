import styles from "./NumberInput.module.css";

interface Props {
    value?: number;
    onChange?(value: number | undefined): any;
}

export default function NumberInput({
    value,
    onChange,
}: Props): JSX.Element {

    function notifyChange(value: number | undefined) {
        onChange && onChange(value);
    }

    function onKeyUp(e: any) {
        const currentValue = value || 0;

        if (e.key === "Delete") {
            notifyChange(undefined);
        } else if (e.key === "ArrowUp" && currentValue < 9) {
            notifyChange(currentValue + 1);
        } else if (e.key === "ArrowDown" && currentValue > 0) {
            notifyChange(currentValue - 1);
        } else {
            const numericValue = parseInt(e.key, 10);
            if (!isNaN(numericValue)) {
                notifyChange(numericValue);
            }
        }
    }

    return (
        <div className={styles.root} onKeyUp={onKeyUp} tabIndex={0}>
            {value}
        </div>
    );
}