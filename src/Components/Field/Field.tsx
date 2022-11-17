import {FieldElement} from "../FieldElement/FieldElement";
import style from './Field.module.css'
import {TFieldElement} from '../../Types/Types'

interface FieldProps {
    field: string[][]
    playerClickHandler: (fieldElement: TFieldElement) => string | void,
}

const Field = ({field, playerClickHandler}: FieldProps) => {
    return (
        <div className={style.field}>
            {field.map((arr, x) => {
                return arr.map((symbol, y) => {
                    return symbol == null ?
                        <FieldElement
                            playerClickHandler={playerClickHandler}
                            cords={{x, y}}></FieldElement> :
                        <FieldElement playerClickHandler={playerClickHandler}
                                      cords={{x, y}}
                        ></FieldElement>
                })
            })}
        </div>
    );
}

export default Field;