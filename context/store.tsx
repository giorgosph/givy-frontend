import React, { createContext, useState, useMemo } from "react";

import log from "../utils/logger";
import { fetchAxios } from "../utils/APIs/axios";
import { LOGOUT_EP } from "../utils/constants/url";

/* ----- Types ----- */
type ContextType = {
  token: string | false,
  tempToken: string | false,
  isAuthenticated: boolean,
  authenticate: (token: string) => void,
  logout: () => void,
  holdToken: (token: string) => void,
  resetToken: (token: string) => void,
};

/* ----------------- */

export const AuthContext = createContext<ContextType>({
  token: false,
  tempToken: false,
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  holdToken: (token: string) => {},
  resetToken: (token: string) => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState<string | false>(false);
  const [tempToken, setTempToken] = useState<string | false>(false);
  // const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjAwMDAkam9obiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNTY2MDM2Mn0.zNfRxS6bjYSopamR5UOeJLMaebk_kl5w5DnTJbE3dN8");

  function holdToken(token: string) {
    setTempToken(token);
    setToken(false);
    log({ type: "d", message: `Token has been held:\n ${token}` });
  }

  function authenticate(token: string) {
    setToken(token);
    setTempToken(false);
    log({ type: "i", message: `Token has been set` });
  }

  function resetToken(token: string) { 
    setToken(token);
    log({ type: "i", message: `Token has been reset` });
  }

  async function logout() {
    try {
      log({ type: "i", message: `Signing out` });
      await fetchAxios({ type: "post", endpoint: LOGOUT_EP, token, resetToken});
    } catch (err) {
      token && log({ type: "dn", message: `Error Singing out: ${err}`, token, resetToken});
    } finally {
      setToken(false);
    }
  }

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
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
