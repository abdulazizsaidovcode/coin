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
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Top Group</h2>
            </div>
            {groups && groups.map((group, index) => (
                <div key={index} className="flex items-center mb-2 mt-6 align-middle">
                    <span className="text-sm font-semibold">{group.groupName}</span>
                    <div className="flex-1 h-6 mx-2 bg-gray-200 rounded-xl">
                        <div className={`${group.color} w-full h-full rounded-xl flex justify-center items-center`}>
                            <span className="text-sm">{group.percentCoin}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopGroup;
