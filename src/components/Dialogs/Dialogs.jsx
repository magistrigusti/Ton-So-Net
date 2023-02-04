import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} src={dialog.src} /> );

  let messagesElements = props.state.messagesData.map(message => <Message key={message.id} message={message.text} src={message.src} /> );

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
    props.dispatch(action);
  }

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
    
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
        <div className={classes.messages_items}>
          { messagesElements }
        </div>
      <div>
          <textarea className={classes.input} 
                    ref={ newMessageElement } 
                    placeholder='Add Your Message' 
                    value={props.newMessageText } 
                    onChange={onMessageChange}></textarea>
          <button className={classes.button} onClick={ addMessage }>Add Message</button>
        </div>
      </div>

      
    </div>
  );
}

export default Dialogs;
