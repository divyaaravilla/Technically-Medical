import { TextInput } from "evergreen-ui";
import { Button } from "evergreen-ui";

export const Form = ({
  // destructuring props
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  handleUserFullNameChange,
  handleUserAddressChange,
  handleUserAgeChange,
  handleUserPhoneChange,
  handleUserEmailChange,
  handleUserMedHistoryChange,
  user,
  username,
  password,
  userFullName,
  userAddress,
  userAge,
  userPhone,
  userEmail,
  userMedHistory,
}) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="row g-3"
        style={{ textAlign: "center", margin: "auto" }}
      >
        <div>
          {/* input field for username */}
          <TextInput
            label="Username"
            name="text-input-username"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          {/* input field for fullname */}
          <TextInput
            label="Password"
            name="password-input-password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          {/* input field for fullname */}
          <TextInput
            label="First Name"
            name="text-input-fullname"
            value={userFullName}
            placeholder="Full Name"
            onChange={handleUserFullNameChange}
            required
          />
        </div>
        <div>
          {/* input field for address */}
          <TextInput
            lable="Address"
            name="text-input-address"
            value={userAddress}
            placeholder="Address"
            onChange={handleUserAddressChange}
            required
          />
        </div>
        <div>
          {/* input field for age */}
          <TextInput
            label="Age"
            name="text-input-age"
            value={userAge}
            placeholder="Age"
            onChange={handleUserAgeChange}
            required
          />
        </div>
        <div>
          {/* input field for phone */}
          <TextInput
            label="Phone"
            name="text-input-phone"
            value={userPhone}
            placeholder="Phone Number"
            onChange={handleUserPhoneChange}
            required
          />
        </div>
        <div>
          {/* input field for email */}
          <TextInput
            label="Email"
            name="text-input-email"
            value={userEmail}
            placeholder="Email"
            onChange={handleUserEmailChange}
            required
          />
        </div>
        <div>
          {/* input field for Medical History */}
          <TextInput
            label="medHistory"
            name="text-input-medHistory"
            value={userMedHistory}
            placeholder="Medical History"
            onChange={handleUserMedHistoryChange}
            required
          />
        </div>
        <div>
          <Button marginRight={16} appearance="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
