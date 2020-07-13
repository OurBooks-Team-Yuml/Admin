import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

interface FileFieldProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
}

const TextField : FC<FileFieldProps> = ({
    onChange,
    label,
}) => (
    (
        <div className="file">
            <label className="file-label">
                <input
                    className="file-input"
                    type="file"
                    name="resume"
                    onChange={onChange}
                />
                <span className="file-cta">
                    <span className="file-icon">
                        <FontAwesomeIcon icon={faUpload} />
                    </span>
                    <span className="file-label">
                        {label}
                    </span>
                </span>
            </label>
        </div>
    )
);

export default TextField;
