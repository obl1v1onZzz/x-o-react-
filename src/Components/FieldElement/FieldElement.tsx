import style from "./FieldElement.module.css";
import {TFieldElement} from "../../Types/Types";
import {useState} from "react";

interface FieldElementProps {
    cords: {
        x: number,
        y: number,
    },
    playerClickHandler: (fieldElement: TFieldElement) => string | void
}

export const FieldElement = ({cords, playerClickHandler}: FieldElementProps) => {
    const [symbol, setSymbol] = useState("")
    const clickFieldElementHandler = () => {
        let currentPlayer = playerClickHandler({cords, symbol})
        if (currentPlayer) {
            setSymbol(currentPlayer)
        }
    }
    return (
        <div onClick={clickFieldElementHandler} className={style.fieldElement}>{symbol}</div>
    );
}
