function Modal({ children, handleCancel }) {
    const handleModalOutsideClick = () => {
        handleCancel();
    };

    const handleModalInsideClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal" onClick={handleModalOutsideClick} >
            <div 
                className="modal-content"
                onClick={handleModalInsideClick}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
