import { useState, useEffect, useRef } from "react";
import { clamp } from "../utilities";

function PressHoldButton(props) {
    const {delayMax = 300, delayMin = 20, speedFactor = 1.3} = props;

    const [isPressed, setIsPressed] = useState(false);
    
    const timeoutRef = useRef(null);

    // TODO: Move functionality inside onclick handlers to remove missing dependency error?
    useEffect(() => {
        clearTimeout(timeoutRef.current);

        if (isPressed) {
            repeat();
        }
    }, [isPressed]);

    // Cleanup on unmount by clearing timeout if still running
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const repeat = (delay = delayMax) => {
        props.onMouseDown();

        const newDelay = clamp(
            delay / speedFactor,
            delayMin,
            delayMax
        );

        const timeout = setTimeout(() => {
            repeat(newDelay);
        }, newDelay);

        timeoutRef.current = timeout;
    };

    const handleOnMouseDown = () => {
        setIsPressed(true);
    };

    const handleOnMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <button
            id={props.id}
            className={props.className}
            title={props.title}
            aria-label={props['aria-label']}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
        >
            {props.children}
        </button>
    );
}

export default PressHoldButton;