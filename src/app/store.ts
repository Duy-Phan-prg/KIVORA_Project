// Global store configuration
// You can use Zustand, Redux Toolkit, or any state management library

export interface AppState {
  user: any;
  isAuthenticated: boolean;
}

export const initialState: AppState = {
  user: null,
  isAuthenticated: false,
};