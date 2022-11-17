import {statusGame} from '../../App'
import style from './StatusGame.module.css'

interface StatusGameProps {
    statusGameP: statusGame
}

export const StatusGame = ({statusGameP}: StatusGameProps) => {
    return (
        <div>
            {statusGameP === statusGame.WIN ? <div className={style.statusGame}>WIN</div> :
                <div className={style.statusGame}>DRAW</div>}
        </div>
    );
};