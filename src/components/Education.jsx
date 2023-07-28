import { useState } from "react";
import { createDateSpanString } from "../utilities";
import Modal from "./Modal";
import EducationForm from "./EducationForm";

function Education(props) {
    const [displayDeleteConfirm, setDisplayDeleteConfirm] = useState(false);
    const [displayEditForm, setDisplayEditForm] = useState(false);

    const handleDeleteClick = () => {
        setDisplayDeleteConfirm(true);
        setDisplayEditForm(false);
    };

    const handleDeleteConfirm = () => {
        props.handleDelete(props.educationObj.id);

        setDisplayDeleteConfirm(false);
    };

    const handleDeleteCancel = () => {
        setDisplayDeleteConfirm(false);
    };

    const handleEditClick = () => {
        setDisplayDeleteConfirm(false);
        setDisplayEditForm(true);
    };

    const handleEditSubmit = (e) => {
        props.handleEditSubmit(e, props.educationObj.id);

        setDisplayEditForm(false);
    };

    const handleEditCancel = () => {
        setDisplayEditForm(false);
    };

    const renderDeleteConfirm = () => {
        return (
            <Modal handleCancel={handleDeleteCancel}>
                <section className="confirm-modal-content">
                    <p>Are you sure you want to delete this education?</p>
                    <div className="education">
                        {renderProperties()}
                    </div>
                    <div className="confirm-btn-container">
                        <button onClick={handleDeleteConfirm}>Yes</button>
                        <button onClick={handleDeleteCancel}>No</button>
                    </div>
                </section>
            </Modal>
        );
    };

    const renderEditForm = () => {
        return (
            <Modal handleCancel={handleEditCancel}>
                <EducationForm
                    educationObj={props.educationObj}
                    handleSubmit={handleEditSubmit}
                    handleCancel={handleEditCancel}
                    formName={`education-edit-${props.educationObj.id}`}
                    formTitle="Edit Education"
                />
            </Modal>
        );
    };

    const renderProperties = () => {
        const {schoolName, titleOfStudy, startDate, endDate} = props.educationObj;

        return (
            <>
                <div className="education-name">{schoolName}</div>
                <div className="education-study">{titleOfStudy}</div>
                <div className="education-date">{createDateSpanString(startDate, endDate)}</div>
            </>
        );
    };

    return (
        <li className="education">
            {renderProperties()}
            <div className="edit-btn-container">
                <button
                    onClick={handleEditClick}
                    aria-label="Edit education"
                    title="Edit education"
                >
                    <span className="fa-solid fa-pen-to-square"></span>
                </button>
                <button
                    onClick={handleDeleteClick}
                    aria-label="Delete education"
                    title="Delete education"
                >
                    <span className="fa-solid fa-trash"></span>
                </button>
            </div>
            {
                displayEditForm ? renderEditForm() : null
            }
            {
                displayDeleteConfirm ? renderDeleteConfirm() : null
            }
        </li>
    );
}

export default Education;
