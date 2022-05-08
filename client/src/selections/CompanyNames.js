import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Apple', label: 'Apple' },
    { value: 'Amazon', label: 'Amazon' },
    { value: 'Blackstone', label: 'Blackstone' },
    { value: 'Deloitte', label: 'Deloitte' },
    { value: 'Google', label: 'Google' },
    { value: 'J.P. Morgan', label: 'J.P. Morgan' },
    { value: 'Meta', label: 'Meta' },
    { value: 'Morgan Stanley', label: 'Morgan Stanley' },
    { value: 'Microsoft', label: 'Microsoft' },
    { value: 'Price Waterhouse Coopers', label: 'Price Waterhouse Coopers' },
];

export default function CompanyNames() {
    const [companyNameOption, setCompanyNameOption] = useState(null);

    return (
        <div className="selection-bar">
            <Select
                defaultValue={companyNameOption}
                onChange={setCompanyNameOption}
                options={options}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        neutral0: 'floralWhite',
                        primary25: 'silver',
                    },
                })}
            />
        </div>
    );
}