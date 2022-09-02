import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, sendMessagesCreatetor, dispatch, sendNotesCreatetor, distpatch } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let state = store.getState();
const renderReactDom = (state, sendMessagesCreatetor, dispatch, sendNotesCreatetor, distpatch) => {
  console.log("renderReactDom");
  root.render(
    <App
      state={state}
      sendMessagesCreatetor={sendMessagesCreatetor}
      dispatch={dispatch}
      sendNotesCreatetor={sendNotesCreatetor}
      distpatch={distpatch}
      getState={store.getState.bind(store)}
      renderReactDom={renderReactDom}
    />
  );
};
renderReactDom(state, sendMessagesCreatetor, dispatch, sendNotesCreatetor, distpatch);
reportWebVitals();
