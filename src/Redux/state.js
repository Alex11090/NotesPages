const SEND_MESSAGE = "SEND_MESSAGE";
const SEND_NOTE = 'SEND_NOTE';

export let store = {
  _state: {
    notesPages: {
      noteItem: [
        { id: 1, text: "Note 1" },
        { id: 2, text: "Note 2" },
        { id: 3, text: "Note 3" },
        { id: 4, text: "Note 4" },
      ],
    },
    messagesPage: {
      messageItem: [
        { id: 1, text: "Text 1" },
        { id: 2, text: "text 2" },
        { id: 3, text: "Text 3" },
      ],
    },
    mainPage: {
      mainText: "Любой текст",
    },
  },
  getState() {
    return this._state;
  },
};

export let sendMessagesCreatetor = (text) => ({
  type: SEND_MESSAGE,
  text: text,
});
export let dispatch = (action) => {
  if (action.type === SEND_MESSAGE) {
    console.log("rrr");
    let newStore = store.getState();

    newStore.messagesPage.messageItem.push({
      id: newStore.messagesPage.messageItem.length + 1,
      text: action.text,
    });
  }
}
export let sendNotesCreatetor = (text) => ({
  type: SEND_NOTE,
  text: text,
});
export let distpatch = (action) => {
  if (action.type === SEND_NOTE) {
    console.log("SEND_NOTE");
    let newStore = store.getState();

    newStore.notesPages.noteItem.push({
      id: newStore.notesPages.noteItem.length + 1,
      text: action.text,
    });
  }
}
