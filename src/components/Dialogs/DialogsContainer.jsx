import React from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext.js';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer.js';

const DialogsContainer = () => {

  return (<StoreContext.Consumer>{
      (store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }

        return(
          <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />)
      }
    }</StoreContext.Consumer>
  )
}

export default DialogsContainer;
  