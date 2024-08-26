let initiateState = {
  contactList: [
    { name: "강1", phoneNumber: "010-0000-0000" },
    { name: "강2", phoneNumber: "010-1111-1111" },
    { name: "강3", phoneNumber: "010-2222-2222" },
  ],
  keyword: "",
};

function reducer(state = initiateState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default reducer;
