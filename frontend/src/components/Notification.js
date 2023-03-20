import { Pane, Alert } from "evergreen-ui";

// Notification component for error
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <Pane>
      <Alert intent="danger" title="Error!">
        {message}.
      </Alert>
    </Pane>
  );
};

export default Notification;
