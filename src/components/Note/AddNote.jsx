export const AddNote = () => {

    return (
        <>
            <div className="container_note">
                <div className="head-1 highlightMainText">My Notes App</div>
                <div className="form container-card xxl-card-width pad-md">
                    <div className="custom-input-one mar-y-2">
                        <input
                            id="note-title"
                            type="text"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <label for="note-title" className="input-label text-2"
                        >Note Title</label
                        >
                    </div>
                    <textarea
                        id="note-text"
                        className="custom-input-one mar-y-2"
                        placeholder="Note Details"
                    ></textarea>

                    <div className="mar-y-3">
                        <button className="btn btn-primary" id="add-btn">Add Note</button>
                    </div>
                </div>
            </div>
        </>
    )
}