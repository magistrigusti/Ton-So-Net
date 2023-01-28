import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Maria', src: "https://cdn-icons-png.flaticon.com/512/4202/4202832.png" },
    { id: 2, name: 'Andry', src: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png" },
    { id: 3, name: 'Dmitrii', src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png" },
    { id: 4, name: 'Sasha', src: "https://cdn-icons-png.flaticon.com/512/9416/9416234.png" },
    { id: 5, name: 'Adi', src: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png" },
    { id: 6, name: 'Ivan', src: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png" }
  ];

  let messagesData = [
    { id: 1, text: 'Hey' },
    { id: 2, text: 'Hello Andry' },
    { id: 3, text: 'How are you Dmittrii' },
    { id: 4, text: 'i,m fune, and you?' }
  ];

  let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />, );

  let messagesElements = messagesData.map(message => <Message message={message.text} /> )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;
