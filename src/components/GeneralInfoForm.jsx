function GeneralInfoForm({ handleSubmit, handleCancel, name, title, email, phone, location }) {
    return (
        <section id="general-info-edit-form">
            <h3>Edit General Info</h3>
            <form
                action=""
                method="set"
                onSubmit={handleSubmit}
                name="general-info-edit"
            >
                <div className="custom-input">
                    <label>
                        <input type="text" name="name" placeholder=" " defaultValue={name} required autoFocus />
                        <span>Name</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="title" placeholder=" " defaultValue={title} required />
                        <span>Title</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="email" name="email" placeholder=" " defaultValue={email} required />
                        <span>Email</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="tel" name="phone" placeholder=" " defaultValue={phone} required />
                        <span>Phone</span>
                    </label>
                </div>
                <div className="custom-input">
                    <label>
                        <input type="text" name="location" placeholder=" " defaultValue={location} required />
                        <span>Location</span>
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

export default GeneralInfoForm;
