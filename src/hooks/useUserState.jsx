import { useEffect, useReducer } from "react";

const initialUserState = {
  watchList: [],
  notifications: [],
  newNotificationCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "something":
      return "something";
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
