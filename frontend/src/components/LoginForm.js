import { TextInput } from "evergreen-ui";
import { Button } from "evergreen-ui";

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form
        onSubmit={handleSubmit}
        className="row g-3"
        style={{ textAlign: "center", margin: "auto" }}
      >
        <div>
          {/* input for username */}
          <TextInput
            label="Username"
            type="text-inut-username"
            required
            value={username}
            name="text-input-username"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          {/* input for password */}
          <TextInput
            label="text-input-password"
            type="password"
            required
            value={password}
            name="text-input-password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Button marginRight={16} appearance="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
