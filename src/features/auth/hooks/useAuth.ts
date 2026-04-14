// Auth custom hooks
export const useAuth = () => {
  // Auth logic here
  return {
    user: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  };
};