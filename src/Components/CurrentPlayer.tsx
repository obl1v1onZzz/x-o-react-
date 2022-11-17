import React, {useEffect, useState} from 'react';

interface CurrentPlayerProps {
    onRenderHandler: (s: Function) => void;

}

function CurrentPlayer({onRenderHandler}: CurrentPlayerProps) {
    const [currentPlayer, setCurrentPlayer] = useState("X move")
    useEffect(() => {
        onRenderHandler(setCurrentPlayer)
    }, [])
    return (
        <div>{currentPlayer}</div>
    );
}

export default CurrentPlayer;