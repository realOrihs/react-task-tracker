import React, { useState } from 'react';

const AddRoadmap = ({onAdd}) => {
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [creator, setCreator] = useState('');
    const [typeOfAccess, setTypeOfAccess] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Please add a roadmap');
            return;
        }

        onAdd({text: name, day, creator, typeOfAccess});

        setName('');
        setDay('');
        setCreator('');
        setTypeOfAccess('');
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Roadmap</label>
                <input
                    type="text"
                    placeholder="Add Roadmap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="date"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check ">
                <label>Creator</label>
                <input
                    type="text"
                    placeholder="Creator input for now"
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value="Save Roadmap"
                className="btn btn-block"
            />
        </form>
    );
};

export default AddRoadmap;
