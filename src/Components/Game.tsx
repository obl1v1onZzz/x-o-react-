import Field from "./Field/Field";
import CurrentPlayer from "./CurrentPlayer";
import {TFieldElement} from "../Types/Types";

interface GameProps {
    field: string[][],
    playerClickHandler: (fe: TFieldElement) => string | void
    onRenderHandler: (c: Function) => void
}


export function Game({field, onRenderHandler, playerClickHandler}: GameProps) {
    return (
        <div>
            <CurrentPlayer onRenderHandler={onRenderHandler}></CurrentPlayer>
            <Field field={field} playerClickHandler={playerClickHandler}></Field>
        </div>
    );
}

