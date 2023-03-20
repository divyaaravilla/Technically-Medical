import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../components/Form";
import { postUser } from "../services/users";

const Create = () => {
  const navigate = useNavigate();
  // Initially, set all field state to empty
  const [user, setUser] = useState({
    username: "",
    password: "",
    userFullName: "",
    userAddress: "",
    userAge: "",
    userPhone: "",
    userEmail: "",
    userMedHistory: "",
  });

  // set each field's state to empty
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMedHistory, setUserMedHistory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // create a new user with all the submitted info
    const newUser = {
      username: username,
      password: password,
      userFullName: userFullName,
      userAddress: userAddress,
      userAge: userAge,
      userPhone: userPhone,
      userEmail: userEmail,
      userMedHistory: userMedHistory,
    };
    // set the user to new user
    setUser(newUser);
    console.log("username= ", newUser.username);
    try {
      const createdUser = await postUser(newUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create User</h1>
      <Form
        user={user}
        username={username}
        password={password}
        userFullName={userFullName}
        userAddress={userAddress}
        userAge={userAge}
        userPhone={userPhone}
        userEmail={userEmail}
        userMedHistory={userMedHistory}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleUserFullNameChange={({ target }) => setUserFullName(target.value)}
        handleUserAddressChange={({ target }) => setUserAddress(target.value)}
        handleUserAgeChange={({ target }) => setUserAge(target.value)}
        handleUserPhoneChange={({ target }) => setUserPhone(target.value)}
        handleUserEmailChange={({ target }) => setUserEmail(target.value)}
        handleUserMedHistoryChange={({ target }) =>
          setUserMedHistory(target.value)
        }
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Create;
