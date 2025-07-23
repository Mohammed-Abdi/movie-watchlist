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
        watchList: [
          { movie: action.payload.movie, timestamp: action.payload.timestamp },
          ...state.watchList,
        ],
        notifications: [
          {
            type: action.payload.type,
            message: action.payload.notification,
            timestamp: action.payload.timestamp,
          },
          ...state.notifications,
        ],
        newNotificationCount: state.newNotificationCount + 1,
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (list) => list.movie.id !== action.payload.id
        ),
        notifications: [
          {
            type: action.payload.type,
            message: action.payload.notification,
            timestamp: action.payload.timestamp,
          },
          ...state.notifications,
        ],
        newNotificationCount: state.newNotificationCount + 1,
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
