import { createContext, useContext, useState, useEffect } from "react";
import { apiRequest } from "../api/apiClient";

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   // Stores the logged-in user
  const [token, setToken] = useState(null); // Stores JWT token
  const [loading, setLoading] = useState(true);

  // Load token from localStorage on startup
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Login user
  const login = async (username, password) => {
    const data = await apiRequest("/auth/login", "POST", {
      username,
      password,
    });

    // FastAPI usually returns: { access_token, token_type }
    const jwt = data.access_token;

    setToken(jwt);
    localStorage.setItem("token", jwt);

    // Fetch user profile using token
    const userData = await apiRequest("/users/me", "GET", null, jwt);

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    return true;
  };

  // Register user
  const register = async (username, email, password) => {
    await apiRequest("/auth/register", "POST", {
      username,
      email,
      password,
    });
  };

  // Logout user
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
