const userName = "admin";
const password = "admin123";

// helper function to check for valid username and password
export const userInfo = (userN, pass) => {
  if (userN === userName && pass === password) {
    return true;
  }
};
