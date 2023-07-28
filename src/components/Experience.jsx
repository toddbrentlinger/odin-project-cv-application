import { useState } from "react";
import { createDateSpanString } from "../utilities";
import Modal from "./Modal";
import ExperienceForm from "./ExperienceForm";

function Experience(props) {
    const [displayDeleteConfirm, setDisplayDeleteConfirm] = useState(false);
    const [displayEditForm, setDisplayEditForm] = useState(false);

    const handleDeleteClick = () => {
        setDisplayDeleteConfirm(true);
        setDisplayEditForm(false);
    };

    const handleDeleteConfirm = () => {
        props.handleDelete(props.experienceObj.id);

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
        props.handleEditSubmit(e, props.experienceObj.id);

        setDisplayEditForm(false);
    };

    const handleEditCancel = () => {
        setDisplayEditForm(false);
    };

    const renderDeleteConfirm = () => {
        return (
            <Modal handleCancel={handleDeleteCancel}>
                <section className="confirm-modal-content">
                    <p>Are you sure you want to delete this experience?</p>
                    <div className="experience">
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
                <ExperienceForm
                    experienceObj={props.experienceObj}
                    handleSubmit={handleEditSubmit}
                    handleCancel={handleEditCancel}
                    formName={`experience-edit-${props.experienceObj.id}`}
                    formTitle="Edit Experience"
                />
            </Modal>
        );
    };

    const renderProperties = () => {
        const {companyName, positionTitle, mainTasks, startDate, endDate} = props.experienceObj;

        const mainTaskComponents = mainTasks.map((task, index) => <li key={index}>{task}</li>);

        return (
            <>
                <div className="experience-position">{positionTitle}</div>
                <div className="experience-company">{companyName}</div>
                <div className="experience-date">{createDateSpanString(startDate, endDate)}</div>
                <ul className="experience-task-list">{mainTaskComponents}</ul>
            </>
        );
    };

    return (
        <li className="experience">
            {renderProperties()}
            <div className="edit-btn-container">
                <button
                    onClick={handleEditClick}
                    aria-label="Edit experience"
                    title="Edit experience"
                >
                    <span className="fa-solid fa-pen-to-square"></span>
                </button>
                <button
                    onClick={handleDeleteClick}
                    aria-label="Delete experience"
                    title="Delete experience"
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

export default Experience;
