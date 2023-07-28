import { useState } from "react";
import Modal from "./Modal";
import PressHoldButton from "./PressHoldButton";

function ThumbnailEditForm(props) {
    const formId = 'thumbnail-edit-form';

    const [data, setData] = useState({
        imageUrl: props.imageUrl,
        size: props.size,
        posX: props.posX,
        posY: props.posY,
    });

    const handleInputChange = (e) => {
        setData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.name === 'imageUrl' ? e.target.value : Number(e.target.value),
            };
        });
    };

    const increasePosX = () => {
        setData((prevState) => {
            return {
                ...prevState,
                posX: prevState.posX + 1,
            };
        });
    };

    const decreasePosX = () => {
        setData((prevState) => {
            return {
                ...prevState,
                posX: prevState.posX - 1,
            };
        });
    };

    const increasePosY = () => {
        setData((prevState) => {
            return {
                ...prevState,
                posY: prevState.posY + 1,
            };
        });
    };

    const decreasePosY = () => {
        setData((prevState) => {
            return {
                ...prevState,
                posY: prevState.posY - 1,
            };
        });
    };

    const increaseSize = () => {
        setData((prevState) => {
            return {
                ...prevState,
                size: prevState.size + 1,
            };
        });
    };

    const decreaseSize = () => {
        setData((prevState) => {
            return {
                ...prevState,
                size: prevState.size - 1,
            };
        });
    };

    const {handleSubmit, handleCancel} = props;
    const {imageUrl, size, posX, posY} = data;

    return (
        <Modal handleCancel={handleCancel}>
            <h3>Edit Thumbnail</h3>
            <section id="thumbnail-edit-controller">
                <PressHoldButton
                    id="arrow-up-container" 
                    className="arrow" 
                    onMouseDown={decreasePosY} 
                    title="Move Up" 
                    aria-label="Move thumbnail up"
                >
                    <span className="fa-solid fa-arrow-up"></span>
                </PressHoldButton>
                <PressHoldButton 
                    id="arrow-down-container" 
                    className="arrow" 
                    onMouseDown={increasePosY} 
                    title="Move Down" 
                    aria-label="Move thumbnail down"
                >
                    <span className="fa-solid fa-arrow-down"></span>
                </PressHoldButton>
                <PressHoldButton 
                    id="arrow-left-container" 
                    className="arrow" 
                    onMouseDown={decreasePosX} 
                    title="Move Left" 
                    aria-label="Move thumbnail left"
                >
                    <span className="fa-solid fa-arrow-left"></span>
                </PressHoldButton>
                <PressHoldButton 
                    id="arrow-right-container" 
                    className="arrow" 
                    onMouseDown={increasePosX} 
                    title="Move Right" 
                    aria-label="Move thumbnail right"
                >
                    <span className="fa-solid fa-arrow-right"></span>
                </PressHoldButton>
                <PressHoldButton 
                    id="scale-up-container" 
                    className="scale" 
                    onMouseDown={increaseSize} 
                    title="Scale Up" 
                    aria-label="Scale thumbnail up"
                >
                    <span className="fa-solid fa-plus"></span>
                </PressHoldButton>
                <PressHoldButton 
                    id="scale-down-container" 
                    className="scale" 
                    onMouseDown={decreaseSize} 
                    title="Scale Down" 
                    aria-label="Scale thumbnail down"
                >
                    <span className="fa-solid fa-minus"></span>
                </PressHoldButton>
                <div 
                    className="thumbnail"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: `${size}%`,
                        backgroundPositionX: posX,
                        backgroundPositionY: posY,
                    }}
                ></div>
            </section>

            <form 
                action=""
                method="set"
                onSubmit={handleSubmit}
                name="thumbnail-edit"
                id={formId}
            >
                <div className="custom-input">
                    <label>
                        <input type="url" name="imageUrl" placeholder=" " value={imageUrl} onChange={handleInputChange} />
                        <span>Image URL</span>
                    </label>
                </div>

                <input type="hidden" name="posX" value={posX} onChange={handleInputChange} />
                <input type="hidden" name="posY" value={posY} onChange={handleInputChange} /> 
                <input type="hidden" name="size" value={size} onChange={handleInputChange} />

                <div className="form-btn-container">
                    <button type="submit">Add</button>
                    <button 
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ThumbnailEditForm;
