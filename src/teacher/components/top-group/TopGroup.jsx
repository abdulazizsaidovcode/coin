import React, { useEffect, useState } from 'react';

const TopGroup = ({ topGroups }) => {

    const colors = ['bg-purple-500', 'bg-green-500', 'bg-blue-500', 'bg-red-500'];

    const [groups, setGroups] = useState(null);

    useEffect(() => {
        setGroups(topGroups ? topGroups.map((g, i) => {
            g.color = colors[i]
            return g;
        }) : [])
    }, []);

    return (
        <div className="h-96 bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Top Group</h2>
                <span>...</span>
            </div>
            {groups && groups.map((group, index) => (
                <div key={index} className="flex items-center mb-2 mt-10 align-middle">
                    <span className="text-sm font-semibold w-8">{group.groupName}</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded">
                        <div
                            className={`${group.color} h-4 rounded`}
                            style={{ width: `${group.percentCoin}%` }}
                        ></div>
                    </div>
                    <span className="text-sm w-10 text-right">{group.percentCoin}%</span>
                </div>
            ))}
        </div>
    );
};

export default TopGroup;
