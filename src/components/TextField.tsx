import React, { FC } from 'react';

interface TextFieldProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    stateValue?: string
}

const TextField : FC<TextFieldProps> = ({
    onChange,
    label,
    stateValue,
}) => (
    (
        <div className="field">
            <label className="label" htmlFor="name">{label}</label>
            <div className="control">
                <input
                    className="input"
                    type="text"
                    id="name"
                    value={stateValue}
                    onChange={onChange}
                />
            </div>
        </div>
    )
);

export default TextField;
