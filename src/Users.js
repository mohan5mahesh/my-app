import Card from "@material-ui/core/Card";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
// import { INITISL_USERS_LIST } from "./userlist";
const BASE_URL = "https://60efffc3f587af00179d3c2f.mockapi.io";
export function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [profile, setprofile] = useState("");
  function getUsers() {
    fetch(`${BASE_URL}/users`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((users) => setUsers(users));
  }

  function deleteUser(id) {
    fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((user) => console.log(user))
      .then(() => getUsers());
  }
  function createUser() {
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, profilePic: profile }),
    })
      .then((data) => data.json())
      .then(() => getUsers());
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="add-user-form">
        <TextField
          variant="outlined"
          label="Enter Name"
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* {username} */}
        <TextField
          variant="outlined"
          label="Enter profile pic"
          value={profile}
          type="text"
          onChange={(event) => setprofile(event.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={() => createUser()}>
          Add users
        </Button>
      </div>
      <div className="user-list">
        {users.map(({ name, profilePic, id }) => (
          <User
            name={name}
            photo={profilePic}
            id={id}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
}

function User({ name, photo, id, deleteUser }) {
  const histroy = useHistory();
  //onClick={() => histroy.push("/users/" + id)}
  return (
    <Card className="user-details">
      <img className="profile_image" src={photo} alt="profile pic"></img>
      <h1>{name}</h1>
      <Button
        onClick={() => histroy.push("/users/" + id)}
        variant="contained"
        color="primary"
      >
        Details
      </Button>
      <Button
        onClick={() => deleteUser(id)}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    </Card>
  );
}
