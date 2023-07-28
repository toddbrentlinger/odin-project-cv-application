import { useState } from "react";
import Modal from "./Modal";
import GeneralInfoForm from "./GeneralInfoForm";

function GeneralInfo(props) {
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const { name, title, email, phone, location } = props;

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

    const renderEditForm = () => {
        return (
            <Modal handleCancel={handleEditCancel}>
                <GeneralInfoForm
                    name={name}
                    title={title}
                    email={email}
                    phone={phone}
                    location={location}
                    handleCancel={handleEditCancel} 
                    handleSubmit={handleEditSubmit} 
                />
            </Modal>
        );
    };

    return (
        <section id="general-info-content">
            <div id="general-name">{name}</div>
            <div id="general-title">{title}</div>
            
            <div id="general-contact-info">
                <div id="general-email">
                    <span className="icon-container">
                        <span className="fa-solid fa-envelope"></span>
                    </span>
                    {email}
                </div>
                <div id="general-phone">
                    <span className="icon-container">
                        <span className="fa-solid fa-phone"></span>
                    </span>
                    {phone}
                </div>
                <div id="general-location">
                    <span className="icon-container">
                        <span className="fa-solid fa-address-book"></span>
                    </span>
                    {location}
                </div>
            </div>
            {
                displayEditForm 
                    ? renderEditForm() 
                    : (
                        <div id="general-info-edit-btn-container" className="edit-btn-container">
                            <button type="button" onClick={handleEditClick}>
                                <span className="fa-solid fa-pen-to-square"></span>
                                Edit General Info
                            </button>
                        </div>
                    )
            }
        </section>
    );
}

export default GeneralInfo;
