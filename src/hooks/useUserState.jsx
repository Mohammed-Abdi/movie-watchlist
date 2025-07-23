import { useEffect, useReducer } from "react";

const initialUserState = {
  watchList: [],
  notifications: [],
  newNotificationCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload.movie],
        notifications: [
          ...state.notifications,
          {
            message: action.payload.notification,
            timestamp: action.payload.timestamp,
          },
        ],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id === action.payload.id
        ),
        notifications: [...state.notifications, action.payload.notification],
      };
    case "CLEAR_NOTIFICATIONS":
      return { ...state, newNotificationCount: 0 };
    default:
      throw new Error("Unknown action");
  }
}

export function useUserState() {
  const [user, userDispatch] = useReducer(reducer, initialUserState, () => {
    const storedUserState = localStorage.getItem("userState");
    return storedUserState ? JSON.parse(storedUserState) : initialUserState;
  });

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(user));
  }, [user]);

  return { user, userDispatch };
}
