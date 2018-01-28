const initialState = {
  isLoggedIn: false,
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}