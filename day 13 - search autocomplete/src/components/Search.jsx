import React, { useEffect, useState } from "react";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      setUsers(data.users);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredUsers =
    search.length === 0
      ? []
      : users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            (
              user.firstName.toLowerCase() +
              " " +
              user.lastName.toLowerCase()
            ).includes(search.toLowerCase())
        );

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <div className="border-2 border-black flex justify-between rounded-lg p-2 w-[20rem]">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for users"
          className="outline-none pl-1"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="button"
          className="bg-gray-700 hover:bg-gray-900 text-white rounded-lg px-2 py-1"
        >
          Search
        </button>
      </div>
      <div className="p-4 border-2 border-black rounded-lg w-[20rem] flex flex-col justify-center items-center gap-2">
        {loading ? (
          <p>Loading...</p>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <p key={user.id}>{`${user.firstName} ${user.lastName}`}</p>
          ))
        ) : (
          <p>No user found...</p>
        )}
      </div>
    </div>
  );
};

export default Search;
