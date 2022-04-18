import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'henry', label: "1 Henry Street" },
    { value: 'monroe', label: "490 Monroe Street" },
    { value: 'west', label: "23 W 66th Street" },
    { value: 'humboldt', label: "45 Humboldt Street" },
    { value: 'union', label: "2 Union Street" },
    { value: 'others', label: 'Others' },
];

export default function DropOffLocations() {
    const [officeOption, setOfficeOption] = useState(null);

    return (
        <div className="selection-bar">
            <h4>Drop-off Locations</h4>
            <Select
                defaultValue={officeOption}
                onChange={setOfficeOption}
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