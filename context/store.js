import { createContext, useState, useMemo } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  isAdmin: false,
  authenticate: (token) => {},
  logout: (token) => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(false); 
  // const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3MDE3MTMyOTJ9.0Gb8ulPHxy2rRaYnLhcSqrQP9LpL6JUOCDqXTmBDNTE");   
  
  // const [isAdmin, setAdmin] = useState(false);

  const decodeToken = (token) => {
    try {
      const { role } = jwt_decode(token.split(" ")[1]);
      console.log("TOKEN:\n" + token + "\nROLE:\n" + role);
      return { role };
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  function authenticate(token) {
    console.log("Authenticating and setting token");
    // const { role } = decodeToken(token);
    setToken(token);
    // setAdmin(role === "admin");
  }

  function logout() {
    setToken(null);
    // setAdmin(false);
  }

  const value = useMemo(() => {
    return {
      token: token,
      isAuthenticated: !!token,
      // isAdmin: isAdmin,
      authenticate: authenticate,
      logout: logout,
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;