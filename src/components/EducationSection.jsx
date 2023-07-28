import { useState } from "react";
import Education from "./Education";
import uniqid from "uniqid";
import EducationForm from "./EducationForm";
import Modal from "./Modal";

const defaultEducation = [
    {
        id: uniqid(),
        schoolName: "University of Paris (Sorbonne)",
        titleOfStudy: "Linguistics (Graduate)",
        startDate: 1922,
        endDate: 1925,
    },
    {
        id: uniqid(),
        schoolName: "University of Chicago",
        titleOfStudy: "Archaeology (Undergraduate)",
        startDate: 1920,
        endDate: 1922,
    },
];

function EducationSection() {
    const [educationList, setEducationList] = useState(defaultEducation);
    const [displayCreateForm, setDisplayCreateForm] = useState(false);

    const handleCreateSubmit = (e) => {
        e.preventDefault();

        const newEducation = {
            id: uniqid(),
            schoolName: e.target.elements.name.value,
            titleOfStudy: e.target.elements.subject.value,
            startDate: Number(e.target.elements.startDate.value),
            endDate: e.target.elements.endDate.value
                ? Number(e.target.elements.endDate.value)
                : null,
        };

        const newEducationList = [
            ...educationList,
            newEducation,
        ];

        newEducationList.sort((a,b) => {
            // If both end dates are null, sort by start date
            if (a.endDate === null && b.endDate === null) {
                return b.startDate - a.startDate;
            }

            // If reach this point, at least one end date is NOT null
            // If one end date is null, sort that one first
            if (a.endDate === null) {
                return -1;
            }
            if (b.endDate === null) {
                return 1;
            }

            // If reach this point, both end dates are NOT null
            // Sort by end date, most recent date first
            return b.endDate - a.endDate;
        });

        setEducationList(newEducationList);
        setDisplayCreateForm(false);
    };

    const handleCreateClick = () => {
        setDisplayCreateForm(true);
    };

    const handleCreateCancel = () => {
        setDisplayCreateForm(false);
    };

    const handleEditSubmit = (e, educationId) => {
        e.preventDefault();

        // Create copy of education list
        const newEducationList = [...educationList];

        // Find matching education obj with matching id
        const educationToEdit = newEducationList.find((educationObj) => educationObj.id === educationId);
        
        // Return if no match was found
        if (educationToEdit === undefined) { return; }

        // Edit values of matching education object 
        educationToEdit.schoolName = e.target.elements.name.value;
        educationToEdit.titleOfStudy = e.target.elements.subject.value;
        educationToEdit.startDate = Number(e.target.elements.startDate.value);
        educationToEdit.endDate = e.target.elements.endDate.value 
            ? Number(e.target.elements.endDate.value)
            : null;

        // Sort new education list
        newEducationList.sort((a,b) => {
            // If both end dates are null, sort by start date
            if (a.endDate === null && b.endDate === null) {
                return b.startDate - a.startDate;
            }

            // If reach this point, at least one end date is NOT null
            // If one end date is null, sort that one first
            if (a.endDate === null) {
                return -1;
            }
            if (b.endDate === null) {
                return 1;
            }

            // If reach this point, both end dates are NOT null
            // Sort by end date, most recent date first
            return b.endDate - a.endDate;
        });

        setEducationList(newEducationList);
    };

    const handleDelete = (educationId) => {
        setEducationList((prevState) => prevState.filter((education) => education.id !== educationId));
    };

    const renderCreateForm = () => {
        return (
            <Modal handleCancel={handleCreateCancel}>
                <EducationForm 
                    handleSubmit={handleCreateSubmit} 
                    handleCancel={handleCreateCancel}
                />
            </Modal>
        );
    };

    return (
        <article id="education-section">
            <h2>Education</h2>
            <ul>
                {
                    educationList.map((educationInst) => {
                        return (
                            <Education
                                key={educationInst.id}
                                educationObj={educationInst}
                                handleEditSubmit={handleEditSubmit}
                                handleDelete={handleDelete}
                            />
                        );
                    })
                }
            </ul>
            {
                displayCreateForm
                    ? renderCreateForm()
                    : (
                        <div className="edit-btn-container">
                            <button type="button" onClick={handleCreateClick}>
                                <span className="fa-solid fa-plus"></span>
                                Add Education
                            </button>
                        </div>
                    )
            }
        </article>
    );
}

export default EducationSection;
