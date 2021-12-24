import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./loader.gif";
import Cards from "./Cards";

function App() {
  const [users, setUsers] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (users) filterUsers();
  }, [users]);

  useEffect(() => {
    if (search.length > 0) filterUsers();
    else setFiltered(users);
  }, [search]);

  const getUsers = async () => {
    setLoader(true);
    setSearch("");
    const res1 = await fetch("https://reqres.in/api/users?page=1");
    const data1 = await res1.json();
    const res2 = await fetch("https://reqres.in/api/users?page=2");
    const data2 = await res2.json();
    setUsers([...data1.data, ...data2.data]);
  };

  const filterUsers = () => {
    const temp = users.filter((item, index) => {
      return (
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
      );
    });
    if (search.length < 1) {
      setTimeout(() => {
        setLoader(false);
        setFiltered(temp);
      }, 2000);
    } else setFiltered(temp);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">RES | REQ</h1>
        <div>
          <input
            type="search"
            name="search"
            id=""
            autoComplete="off"
            className="searchBox"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search"
          />
          <button onClick={filterUsers} className="getUser">
            Search
          </button>
          <button onClick={getUsers} className="getUser">
            Get Users
          </button>
        </div>
      </nav>
      <div className="cardContainer">
        {filtered ? (
          filtered.map((item, index) => {
            return <Cards item={item} index={index} />;
          })
        ) : loader ? (
          <img src={Logo} alt="Loading..." className="loader" />
        ) : (
          <div className="empty">No Users Here!!</div>
        )}
      </div>
    </div>
  );
}

export default App;
