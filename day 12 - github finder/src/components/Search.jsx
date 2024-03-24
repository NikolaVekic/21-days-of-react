import React, { useEffect, useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("NikolaVekic");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchGithubData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGithubData();
  }, []); // Consider adding `username` as a dependency if you intend to refetch when it changes

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-12">
      <div className="border border-black rounded-lg shadow-lg p-2">
        <input
          name="search"
          type="text"
          placeholder="Search GitHub Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-[12rem] lg:w-[20rem] focus:outline-none pl-1"
        />
        <button
          className="border border-black px-2 rounded-lg "
          onClick={fetchGithubData}
        >
          Search
        </button>
      </div>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        <div className="border-2 border-black rounded-lg shadow-lg p-2 flex w-[90%] lg:w-[36rem] justify-between">
          <div className="w-[35%] flex justify-center items-center">
            <div
              className="h-[6rem] w-[6rem]  lg:h-[8rem] lg:w-[8rem] rounded-full"
              style={{
                backgroundImage: `url("${user.avatar_url}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="w-[65%] text-sm lg:text-lg">
            <h3 className="font-semibold">
              Username —{" "}
              <span className="font-normal">
                <a href={`${user.html_url}`}>{user.login}</a>
              </span>
            </h3>
            <p className="font-semibold">
              About — <span className="font-normal">{user.bio}</span>
            </p>
            <p className="font-semibold">
              Repositories —{" "}
              <span className="font-normal">{user.public_repos}</span>
            </p>
            <p className="font-semibold">
              Joined —{" "}
              <span className="font-normal">
                {user && user.created_at ? user.created_at.slice(0, 10) : ""}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
