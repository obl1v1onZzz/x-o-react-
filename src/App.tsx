import {TFieldElement} from "./Types/Types";
import {useState} from "react";
import {checkStatusGame, countAllElementsOnField, counter} from "./checkWin";
import {setNewFieldElement, fieldSize, field} from "./field";
import {currentPlayer, alternateTurn} from "./currentPlayer";
import {Game} from "./Components/Game";
import {StatusGame} from "./Components/StatusGame/StatusGame";

export enum statusGame {
    DRAW,
    INPROGRESS,
    WIN
}

let setStateCurrentPlayer: Function;
const onRenderHandler = (setStateCallback: Function): void => {
    setStateCurrentPlayer = setStateCallback;
}


function App() {

    const [currentStatusGame, setCurrentStatusGame] = useState(statusGame.INPROGRESS)

    const playerMove = (fieldElement: TFieldElement): string | void => {
        const isInField = setNewFieldElement(fieldElement)
        if (isInField) {
            counter()
            setStateCurrentPlayer(currentPlayer)
            alternateTurn()
            let movesCount = checkStatusGame(fieldElement.cords.x, fieldElement.cords.y)
            for (let val in movesCount) {
                if (movesCount[val] >= fieldSize) {
                    setCurrentStatusGame(statusGame.WIN)
                    break
                }
            }
            if (countAllElementsOnField === fieldSize * fieldSize) {
                setCurrentStatusGame(statusGame.DRAW)
            }

            return currentPlayer
        }

    }
    return (
        <div className="App">
            {
                currentStatusGame === statusGame.WIN || currentStatusGame === statusGame.DRAW ?
                    <StatusGame statusGameP={currentStatusGame}></StatusGame> :
                    <Game field={field} playerClickHandler={playerMove} onRenderHandler={onRenderHandler}></Game>
            }
        </div>
    );
}

export default App;
