import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} src={dialog.src} /> );
  let messagesElements = state.messagesData.map(message => <Message key={message.id} id={message.id} message={message.text} src={message.src} /> );
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
        <div className={classes.messages_items}>
          { messagesElements }

          <div>
            <div>
              <textarea className={classes.input}
                  onChange={ onNewMessageChange }
                  defaultValue={ newMessageBody }
                  placeholder="Enter your message"></textarea>
            </div>

            <div>
              <button className={classes.button} onClick={ onSendMessageClick }>Send</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Dialogs;
