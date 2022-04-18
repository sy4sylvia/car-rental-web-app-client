import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'amazon', label: 'Amazon' },
    { value: 'jpmorgan', label: 'J.P. Morgan' },
    { value: 'meta', label: 'Meta' },
    { value: 'microsoft', label: 'Microsoft' },
    { value: 'pwc', label: 'Price Waterhouse Coopers' },
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