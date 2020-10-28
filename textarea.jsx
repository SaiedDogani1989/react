import React from 'react';


const Textarea = ({ name, label, value, onChange, error }) => {
    return (
        <div className="form-group">

            <label>
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            />
            {error && <div className="alert alert-danger" >{error}</div>}
        </div>
    );
}

export default Textarea;