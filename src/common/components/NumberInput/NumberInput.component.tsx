import { useEffect, useState } from "react";
import styles from "./NumberInput.module.css";

interface Props {
    value?: number;
    onChange?(value: number | undefined): any;
}

export default function NumberInput({
    value,
    onChange,
}: Props): JSX.Element {

    const [ valueInternal, setValueInternal ] = useState<number>();

    useEffect(() => {
        setValueInternal(value);
    }, []);

    useEffect(() => {
        onChange && onChange(valueInternal);
    }, [ valueInternal ]);

    function onKeyUp(e: any) {
        const currentValue = valueInternal || 0;

        if (e.key === "Delete") {
            setValueInternal(undefined);
        } else if (e.key === "ArrowUp" && currentValue < 9) {
            setValueInternal(currentValue + 1);
        } else if (e.key === "ArrowDown" && currentValue > 0) {
            setValueInternal(currentValue - 1);
        } else {
            const numericValue = parseInt(e.key, 10);
            if (!isNaN(numericValue)) {
                setValueInternal(numericValue);
            }
        }
    }

    return (
        <div className={styles.root} onKeyUp={onKeyUp} tabIndex={0}>
            {valueInternal}
        </div>
    );
}