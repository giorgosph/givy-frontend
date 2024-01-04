import { createContext, useState, useMemo } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({
  token: "",
  tempToken: "",
  isAuthenticated: false,
  isAdmin: false,
  authenticate: (token) => {},
  logout: (token) => {},
  holdToken: (token) => {},
});

function AuthContextProvider({ children }) {
  // const [token, setToken] = useState(false); 
  const [tempToken, setTempToken] = useState(false); 
  const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3MDE3MTMyOTJ9.0Gb8ulPHxy2rRaYnLhcSqrQP9LpL6JUOCDqXTmBDNTE");   
  
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

  function holdToken(token) {
    setTempToken(token);
    setToken(false);
    console.log("TOKEN has been holded:\n", token);
  }

  function authenticate(token) {
    console.log("Authenticating and setting token");
    // const { role } = decodeToken(token);
    setToken(token);
    setTempToken(false);
    // setAdmin(role === "admin");
    console.log("TOKEN has been set:\n", token);
  }

  function logout() {
    setToken(false);
    // setAdmin(false);
  }

  const value = useMemo(() => {
    return {
      token,
      tempToken,
      isAuthenticated: !!token,
      // isAdmin: isAdmin,
      authenticate,
      logout,
      holdToken,
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;