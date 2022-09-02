import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import MessagesPage from "./Components/MessagesPage/MessagesPage";
import NotesPage from "./Components/NotesPage/NotesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/MessagesPage"
          element={
            <MessagesPage
              getState={props.getState}
              messagesPage={props.state.messagesPage}
              renderReactDom={props.renderReactDom}
              sendMessagesCreatetor={props.sendMessagesCreatetor}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          path="/NotesPage"
          element={
            <NotesPage
              getState={props.getState}
              notesPages={props.state.notesPages}
              sendNotesCreatetor={props.sendNotesCreatetor}
              distpatch={props.distpatch}
              renderReactDom={props.renderReactDom}
            />
          }

        />
      </Routes>
    </BrowserRouter>
  );
}
/*
state={
  notesPa
}
*/
export default App;
