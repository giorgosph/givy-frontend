import { createContext, useState, useMemo } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  isVenue: false,
  isAdmin: false,
  roleStatus: false,
  authenticate: (token) => {},
  logout: (token) => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(false); // change to true to login
  // const [isVenue, setVenue] = useState(false);
  // const [isAdmin, setAdmin] = useState(false);
  // const [roleStatus, setRoleStatus] = useState(false);

  const decodeToken = (token) => {
    try {
      const { role, roleStatus } = jwt_decode(token.split(" ")[1]);
      console.log("TOKEN:\n" + token + "\nSTATUS:\n" + roleStatus);
      return { role, roleStatus };
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  function authenticate(token) {
    console.log("Authenticating and setting token");
    // const { role, roleStatus } = decodeToken(token);
    setToken(token);
    // setVenue(role === "venue");
    // setAdmin(role === "admin");
    // setRoleStatus(roleStatus);
  }

  function logout() {
    setToken(null);
    // setVenue(false);
    // setAdmin(false);
    // setRoleStatus(false);
  }

  const value = useMemo(() => {
    return {
      token: token,
      isAuthenticated: !!token,
      // isVenue: isVenue,
      // isAdmin: isAdmin,
      // roleStatus: roleStatus,
      authenticate: authenticate,
      logout: logout,
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;