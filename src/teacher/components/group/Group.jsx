import React, { useState } from 'react';
import GroupsTable from "./GroupsTable";
import "../../../globalcss/style.css";

function Groups() {
    document.title = "IT City Academy | Group";
    return (
        <div className="bg-gray-100 min-h-screen px-8 pt-10 pb-20 w-full">
            <GroupsTable />
        </div>
    );
}

export default Groups;