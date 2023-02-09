const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
        let  body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 9, text: body, src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png"});
        return state;
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
    default:
        return state;
  }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;