import { createContext, useState, useMemo } from "react";
import log from "../utils/logger";
import { fetchAxios } from "../utils/APIs/axios";
import { LOGOUT_EP } from "../utils/constants/url";

export const AuthContext = createContext({
  token: "",
  tempToken: "",
  isAuthenticated: false,
  isAdmin: false,
  authenticate: (token) => {},
  logout: () => {},
  holdToken: (token) => {},
  resetToken: (token) => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(false); 
  const [tempToken, setTempToken] = useState(false); 
  // const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjAwMDAkam9obiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNTY2MDM2Mn0.zNfRxS6bjYSopamR5UOeJLMaebk_kl5w5DnTJbE3dN8");   

  function holdToken(token) {
    setTempToken(token);
    setToken(false);
    log('d', `Token has been held:\n ${token}`);
  };

  function authenticate(token) {
    setToken(token);
    setTempToken(false);
    log('i', `Token has been set`);
  };

  function resetToken(token) {
    setToken(token);
    log('i', `Token has been reset`);
  };

  async function logout() {
    try {
      log('i', `Signing out`);
      await fetchAxios('post', LOGOUT_EP, null, token, resetToken);
    } catch (err) {
      log('dn', `Error Singing out: ${err}`, token, resetToken);
    } finally {
      setToken(false);
    }
  };

  const value = useMemo(() => {
    return {
      token,
      tempToken,
      isAuthenticated: !!token,
      authenticate,
      logout,
      holdToken,
      resetToken,
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;