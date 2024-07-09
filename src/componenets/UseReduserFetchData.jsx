import axios from "axios";
import React, { useEffect, useReducer } from "react";

function UseReduserFetchData() {
  const initilaValue = {
    loding: true,
    post: {},
    error: "",
  };
  const reduser = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCSESS":
        return {
          loding: false,
          post: action.payload,
          error: "",
        };

      case "FETCH_ERROR":
        return {
          loding: false,
          post: {},
          error: "Xatolik yuz berdi",
        };

      default:
        return state;
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCSESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });
  const [state, dispatch] = useReducer(reduser, initilaValue);
  return (
    <div>
      {state.loding ? (
        "Loding.."
      ) : (
        <div>
          <p>{state.post.id}</p>
          <p>{state.post.title}</p>
          <p>{state.post.body}</p>
        </div>
      )}
      {state.error ? state.error : null}
    </div>
  );
}

export default UseReduserFetchData;
