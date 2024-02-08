import React, { useState } from 'react';
import GroupsTable from "./GroupsTable";
import "../../../globalcss/style.css";

function Groups() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 w-full">
            <GroupsTable />
        </div>
    );
}

export default Groups;