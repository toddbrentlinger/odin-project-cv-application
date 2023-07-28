import { useState } from "react";
import ThumbnailEditForm from "./ThumbnailEditForm";

function Thumbnail(props) {
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const { imageUrl, size = 100, posX = 0, posY = 0 } = props;

    const handleEditClick = () => {
        setDisplayEditForm(true);
    };

    const handleEditCancel = () => {
        setDisplayEditForm(false);
    };

    const handleEditSubmit = (e) => {
        props.handleEditSubmit(e);

        setDisplayEditForm(false);
    };

    return (
        <section className="thumbnail-container">
            <div 
                className="thumbnail"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: `${size}%`,
                    backgroundPositionX: posX,
                    backgroundPositionY: posY,
                }}
            >
                {imageUrl ? null : <span className="fa-solid fa-person"></span>}
                <button 
                    onClick={handleEditClick}
                    aria-label="Edit thumbnail"
                    title="Edit thumbnail"
                >
                    <span
                        className="fa-solid fa-pen-to-square"
                    ></span>
                </button>
            </div>
            {displayEditForm 
                ? (
                    <ThumbnailEditForm 
                        imageUrl={imageUrl}
                        size={size}
                        posX={posX}
                        posY={posY}
                        handleSubmit={handleEditSubmit}
                        handleCancel={handleEditCancel}
                    />
                )
                : null
            }
        </section>
    );
}

export default Thumbnail;
