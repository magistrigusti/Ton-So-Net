import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />, );

  let messagesElements = props.state.messagesData.map(message => <Message message={message.text} src={message.src} /> )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
        { messagesElements }
        <div>
          <textarea placeholder='Add Your Message'></textarea>
          <button></button>
        </div>
      </div>

      
    </div>
  );
}

export default Dialogs;
