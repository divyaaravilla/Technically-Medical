import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "evergreen-ui";

import { Form } from "../components/Form";
import { updateUser, deleteUser } from "../services/users";

// Component for update form
const UpdateUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(location.state.user);

  // set fields for form
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [userFullName, setUserFullName] = useState(user.userFullName);
  const [userAddress, setUserAddress] = useState(user.userAddress);
  const [userAge, setUserAge] = useState(user.userAge);
  const [userPhone, setUserPhone] = useState(user.userPhone);
  const [userEmail, setUserEmail] = useState(user.userEmail);
  const [userMedHistory, setUserMedHistory] = useState(user.userMedHistory);

  const handleDelete = async () => {
    try {
      const deletedUser = await deleteUser(user.userid);
      // navigate to index after a successful delete
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    // stop default form behavior
    event.preventDefault();
    // set a new user from the submited data
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
    // set the new user to user
    setUser(newUser);
    try {
      const createdUser = await updateUser(user.userid, newUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Update {user.firstName}'s Info</h1>
      <div style={{ textAlign: "center" }}>
        <Button
          marginRight={16}
          appearance="primary"
          intent="danger"
          onClick={handleDelete}
        >
          Delete Record
        </Button>
      </div>
      <Form
        user={user}
        username={username}
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

export default UpdateUser;
