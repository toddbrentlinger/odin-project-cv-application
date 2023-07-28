import { useState } from "react";
import Experience from "./Experience";
import uniqid from "uniqid";
import Modal from "./Modal";
import ExperienceForm from "./ExperienceForm";

const defaultExperience = [
    {
        id: uniqid(),
        companyName: "Princeton University",
        positionTitle: "Professor of Archaeology",
        mainTasks: [
            "Conduct research in a particular field of knowledge and present findings in professional journals, books, electronic media, or at professional conferences.",
            "Keep abreast of developments in the field by reading current literature, talking with colleagues, and participating in professional conferences.",
            "Prepare and deliver lectures to undergraduate or graduate students on topics such as research methods, urban anthropology, and language and culture.",
            "Initiate, facilitate, and moderate classroom discussions.",
            "Evaluate and grade students' class work, assignments, and papers.",
        ],
        startDate: 1925,
        endDate: "",
    },
    {
        id: uniqid(),
        companyName: "Princeton University",
        positionTitle: "Archaeologist",
        mainTasks: [
            "Assessing aerial photography, geographical survey data and historical records to identify locations for potential dig sites.",
            "Overseeing and documenting the extraction of artifacts at dig sites to maintain an accurate record and reduce the chances of damage during excavation.",
            "Identifying items from the excavation, analyzing and dating them.",
            "Creating computer-generated assessments and simulations of excavated locations to create estimated examples of the historical structures and civilization.",
            "Managing staff during both the excavation work and the recording and analysis of artifacts.",
            "Collecting data into a database and performing analysis to further understanding of the area and cultures being studied.",
            "Writing reports, academic papers and presentations on discoveries to share information.",
            "Assessing developer planning applications to ensure that any proposed construction will not disrupt potentially valuable archeological sites.",
            "Developing scientific hypotheses based on analysis of data, then testing these theories through excavation, further research and analysis.",
            "Conducting interviews and coordinating with other experts in the region and time period being studied to improve the accuracy of any assessments and projections.",
            "Working in a museum or school setting, providing education about historical items and societies.",
        ],
        startDate: 1925,
        endDate: "",
    },
    {
        id: uniqid(),
        companyName: "US Intelligence",
        positionTitle: "Intelligence Agent",
        mainTasks: [
            "Analyze intelligence collected around the world in order to identify threats and make decisions.",
            "Develop assessments based on all available information.",
            "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
            "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
        ],
        startDate: 1939,
        endDate: 1945,
    },
    {
        id: uniqid(),
        companyName: "Colosimo restaurant",
        positionTitle: "Waiter",
        mainTasks: [
            "Welcome and seat guests, take guest orders, communicate them effectively to the kitchen and in addition, memorize the menu and offer recommendations to upsell appetizers, desserts, or drinks."
        ],
        startDate: 1920,
        endDate: 1920,
    },
    {
        id: uniqid(),
        companyName: "French Intelligence",
        positionTitle: "Intelligence Agent",
        mainTasks: [
            "Analyze intelligence collected around the world in order to identify threats and make decisions.",
            "Develop assessments based on all available information.",
            "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
            "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
        ],
        startDate: 1917,
        endDate: 1918,
    },
    {
        id: uniqid(),
        companyName: "Belgian Intelligence",
        positionTitle: "Intelligence Agent",
        mainTasks: [
            "Analyze intelligence collected around the world in order to identify threats and make decisions.",
            "Develop assessments based on all available information.",
            "Develop relationships, manage networks, and facilitate information sharing with contacts in the intelligence and law enforcement community.",
            "Apply knowledge of a specific region's culture, history, and language to combat and stay ahead of threats.",
        ],
        startDate: 1917,
        endDate: 1917,
    },
    {
        id: uniqid(),
        companyName: "",
        positionTitle: "Soda Jerk",
        mainTasks: [
            "Operate the soda fountain in a drugstore.",
            "Repar and serve soda drinks and ice cream sodas.",
        ],
        startDate: 1916,
        endDate: 1916,
    },
];

function ExperienceSection() {
    const [experienceList, setExperienceList] = useState(defaultExperience);
    const [displayCreateForm, setDisplayCreateForm] = useState(false);

    const handleCreateSubmit = (e) => {
        e.preventDefault();

        const newExperience = {
            id: uniqid(),
            companyName: e.target.elements.company.value,
            positionTitle: e.target.elements.position.value,
            mainTasks: e.target.elements.tasks.value.split('\n'),
            startDate: Number(e.target.elements.startDate.value),
            endDate: e.target.elements.endDate.value 
                ? Number(e.target.elements.endDate.value)
                : null,
        };

        const newExperienceList = [
            ...experienceList,
            newExperience,
        ];

        newExperienceList.sort((a,b) => {
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

        setExperienceList(newExperienceList);
        setDisplayCreateForm(false);
    };

    const handleCreateClick = () => {
        setDisplayCreateForm(true);
    };

    const handleCreateCancel = () => {
        setDisplayCreateForm(false);
    };

    const handleEditSubmit = (e, experienceId) => {
        e.preventDefault();

        // Create copy of experience list
        const newExperienceList = [...experienceList];

        // Find matching experience obj with matching id
        const experienceToEdit = newExperienceList.find((experienceObj) => experienceObj.id === experienceId);
        
        // Return if no match was found
        if (experienceToEdit === undefined) { return; }

        // Edit values of matching experience object
        experienceToEdit.companyName = e.target.elements.company.value;
        experienceToEdit.positionTitle = e.target.elements.position.value;
        experienceToEdit.mainTasks = e.target.elements.tasks.value.split('\n');
        experienceToEdit.startDate = Number(e.target.elements.startDate.value);
        experienceToEdit.endDate = e.target.elements.endDate.value 
            ? Number(e.target.elements.endDate.value)
            : null;

        // Sort experience list
        newExperienceList.sort((a,b) => {
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

        setExperienceList(newExperienceList);
    };

    const handleDelete = (experienceId) => {
        setExperienceList((prevState) => prevState.filter((experience) => experience.id !== experienceId));
    };

    const renderCreateForm = () => {
        return (
            <Modal handleCancel={handleCreateCancel}>
                <ExperienceForm
                    handleSubmit={handleCreateSubmit}
                    handleCancel={handleCreateCancel} 
                />
            </Modal>
        );
    };

    return (
        <article id="experience-section">
            <h2>Experience</h2>
            <ul>
                {
                    experienceList.map((experienceInst) => {
                        return (
                            <Experience
                                key={experienceInst.id}
                                experienceObj={experienceInst}
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
                                Add Experience
                            </button>
                        </div>
                    )
            }
        </article>
    );
}

export default ExperienceSection;
