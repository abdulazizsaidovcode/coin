import React, { useState, useEffect } from 'react';

// Dastlabki ma'lumotlar ro'yxati
const initialMessages = [
  {
    id: 1,
    groupName: 'Alpha',
    dateTime: '2023-12-11T15:00:00Z',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 3,
    groupName: 'keta',
    dateTime: '2013-12-10T15:45:00Z',
    content: 'Consectetur adipiscing elit...'
  },
  {
    id: 4,
    groupName: 'yeta',
    dateTime: '2020-12-10T15:45:00Z',
    content: 'Consectetur adipiscing elit...'
  },
  {
    id: 5,
    groupName: 'Beta',
    dateTime: '2063-12-10T15:45:00Z',
    content: 'Consectetur adipiscing elit...'
  },
  {
    id: 6,
    groupName: 'deta',
    dateTime: '2003-12-10T15:45:00Z',
    content: 'Consectetur adipiscing elit...'
  },
  // Qo'shimcha xabarlar...
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [sortKey, setSortKey] = useState('groupName');
  const [isAscending, setIsAscending] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const [filterTime, setFilterTime] = useState('');

  useEffect(() => {
    // Ma'lumotlarni filtrlash va tartiblash
    function filterAndSortData() {
      let sortedAndFilteredMessages = [...initialMessages];

      // Filtrlash
      if (filterDate) {
        sortedAndFilteredMessages = sortedAndFilteredMessages.filter((message) => {
          const messageDate = new Date(message.dateTime).toDateString();
          const inputDate = new Date(filterDate).toDateString();
          return messageDate === inputDate;
        });
      }

      if (filterTime) {
        sortedAndFilteredMessages = sortedAndFilteredMessages.filter((message) => {
          const messageTime = new Date(message.dateTime).toTimeString();
          const inputTime = new Date(`1970-01-01T${filterTime}Z`).toTimeString();
          return messageTime.substr(0, 5) === inputTime.substr(0, 5);
        });
      }

      // Tartiblash
      sortedAndFilteredMessages.sort((a, b) => {
        let comparison = 0;
        if (sortKey === 'dateTime') {
          comparison = new Date(a.dateTime) - new Date(b.dateTime);
        } else if (sortKey === 'groupName') {
          comparison = a.groupName.localeCompare(b.groupName);
        }

        return isAscending ? comparison : -comparison;
      });

      setMessages(sortedAndFilteredMessages);
    }

    filterAndSortData();
  }, [sortKey, isAscending, filterDate, filterTime]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        {/* Tartiblash */}
        <div>
          <button
            onClick={() => setIsAscending(!isAscending)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sort Direction: {isAscending ? 'Ascending' : 'Descending'}
          </button>
        </div>
        <div>
          <label htmlFor="sortKey" className="mr-2">Sort by:</label>
          <select
            id="sortKey"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="groupName">Group Name</option>
            <option value="dateTime">Date</option>
          </select>
        </div>

        {/* Filtrlash */}
        <div>
          <input
            type="date"
            className="bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div>
          <input
            type="time"
            className="bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={filterTime}
            onChange={(e) => setFilterTime(e.target.value)}
          />
        </div>
      </div>

      {/* Xabarlar ro'yxatini ko'rsatish */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {messages.map((message) => (
          <div key={message.id} className="border rounded shadow p-3">
            <h2 className="font-bold text-lg mb-3">{message.groupName}</h2>
            <p className="text-gray-700 text-base">{message.content}</p>
            <div className="text-right">
              <span className="text-sm font-semibold">{new Date(message.dateTime).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
