import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />, );

  let messagesElements = props.state.messagesData.map(message => <Message message={message.text} src={message.src} /> );

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
        { messagesElements }
        <div>
          <textarea className={classes.input} ref={ newMessageElement } placeholder='Add Your Message'></textarea>
          <button className={classes.button} onClick={ addMessage }>Add Message</button>
        </div>
      </div>

      
    </div>
  );
}

export default Dialogs;
