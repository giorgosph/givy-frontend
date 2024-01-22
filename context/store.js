import { createContext, useState, useMemo } from "react";
import jwt_decode from "jwt-decode";
import log from "../utils/logger";

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
  const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjAwMDAkam9obiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNTY2MDM2Mn0.zNfRxS6bjYSopamR5UOeJLMaebk_kl5w5DnTJbE3dN8");   
  
  // const [isAdmin, setAdmin] = useState(false);

  const decodeToken = (token) => {
    try {
      const { role } = jwt_decode(token.split(" ")[1]);
      log('i', `Token decoded. User role: ${role}`);

      return { role };
    } catch (err) {
      log('dv', `Error decoding token:\n ${err}`);
      return false;
    }
  };

  function holdToken(token) {
    setTempToken(token);
    setToken(false);
    log('d', `Token has been held:\n ${token}`);
  }

  function authenticate(token) {
    log('i', `Authenticating and setting token`);
    // const { role } = decodeToken(token);
    setToken(token);
    setTempToken(false);
    // setAdmin(role === "admin");
    log('i', `Token has been set`);
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