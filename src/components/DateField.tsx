import React, { FC } from 'react';

import bulmaCalendar from 'bulma-calendar';

interface DateFieldProps {
    setDate?: React.Dispatch<React.SetStateAction<string>>
    label?: string
}

const DateField : FC<DateFieldProps> = ({
    setDate,
    label,
}) => {
    const onDateChange = React.useCallback((newDate: string) => {
        setDate(newDate);
    }, [setDate]);

    React.useEffect(() => {
        const options = { dateFormat: 'YYYY-MM-DD' };
        const calendars = bulmaCalendar.attach('[type="date"]', options);

        calendars.forEach((calendar) => {
            calendar.on('select', (datepicker) => {
                const date = datepicker.data.date.start;

                const dateTimeFormat = new Intl.DateTimeFormat(
                    'en', { year: 'numeric', month: '2-digit', day: '2-digit' },
                );

                const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat
                    .formatToParts(date);

                onDateChange(`${year}-${month}-${day}`);
            });
        });
    }, [onDateChange]);

    return (
        <div className="field">
            <label className="label" htmlFor="date">{label}</label>
            <div className="control">
                <input
                    className="input"
                    type="date"
                    id="date"
                />
            </div>
        </div>
    );
};

export default DateField;
