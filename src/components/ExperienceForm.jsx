function ExperienceForm({ handleSubmit, handleCancel, experienceObj = {}, formName = 'experience-create', formTitle = 'Add New Experience' }) {
    const {companyName, positionTitle, mainTasks, startDate, endDate} = experienceObj;

    return (
        <section id={`${formName}-form`}>
            <h3>{formTitle}</h3>
            <form
                action=""
                method="set"
                onSubmit={handleSubmit}
                name={formName}
            >
                <div className="custom-input">
                    <label>
                        <input type="text" name="company" placeholder=" " defaultValue={companyName} required autoFocus />
                        <span>Company Name</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="position" placeholder=" " defaultValue={positionTitle} required />
                        <span>Position Title</span>
                    </label>
                </div>
                <div className="custom-textarea">
                    <label>
                        <textarea type="text" name="tasks" placeholder=" " defaultValue={mainTasks ? mainTasks.join('\n') : mainTasks} rows={3} required>
                        </textarea>
                        <span>Main Tasks</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="startDate" placeholder=" " defaultValue={startDate} required />
                        <span>Start Date</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="endDate" placeholder=" " defaultValue={endDate} />
                        <span>End Date (optional)</span>
                    </label>
                </div>
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
        </section>
    );
}

export default ExperienceForm;
