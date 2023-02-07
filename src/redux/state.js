const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '28', dislikesCount: 2 },
        { id: 2, message: 'It is a social network on the blockhain', likesCount: 22, dislikesCount: 1 },
        { id: 3, message: 'Are you ready', likesCount: 30, dislikesCount: 0 }
      ],
      newPostText: 'TonCoin',
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Maria', src: "https://cdn-icons-png.flaticon.com/512/4202/4202832.png" },
        { id: 2, name: 'Andry', src: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png" },
        { id: 3, name: 'Dmitrii', src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png" },
        { id: 4, name: 'Sasha', src: "https://cdn-icons-png.flaticon.com/512/9416/9416234.png" },
        { id: 5, name: 'Adi', src: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png" },
        { id: 6, name: 'Ivan', src: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png" }
      ],

      messagesData: [
        { id: 1, text: 'Hey', src: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png" },
        { id: 2, text: 'Hello Andry', src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png" },
        { id: 3, text: 'How are you Dmittrii', src: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png" },
        { id: 4, text: 'i,m fune, and you?', src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png" }
      ],
      newMessageText: 'TonCoin',
    },

    newsPage: {
      newsData: [
        { id: 1, title: 'Cripto News', text: 'Итоги недели: Binance обвинили в обработке транзакций Bitzlato, а у Бэнкмана-Фрида конфисковали почти $700 млн', src: "https://cnews24.ru/uploads/08f/08f8f84ab0ddc6016e441b2ea24896b70e453cab.webp" },
        { id: 2, title: 'Cripto News', text: 'XRP Price Prediction – Can XRP Go to $5 This Year?', src: 'https://v2.cimg.co/news/102948/253724/responsive-images/xrp___media_library_original_1735_956.jpg' }
      ],
    }

  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
  this._callSubscriber = observer;
},
_addPost() {
  let newPost = {
    id: 4,
    message: this._state.profilePage.newPostText,
    lekesCount: 4,
    dislikesCount: 0
  };

  this._state.profilePage.postsData.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state);
},
_addMessage() {
  let newMessage = {
    id: 8,
    text: this._state.dialogsPage.newMessageText,
    src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png"
  };

  this._state.dialogsPage.messagesData.push(newMessage);
  this._state.dialogsPage.newMessageText = '';
  this._callSubscriber(this._state);
},
updateNewPostText(newText) {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber();
},
updateNewDialogsText(newText) {
  this._state.dialogsPage.newMessageText = newText;
  this._callSubscriber(this._state)
},
dispatch(action) {
  if (action.type === 'ADD-POST') {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 4,
      dislikesCount: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  }

  if (action.type === 'ADD-MESSAGE') {
    let newMessage ={
      id: 9,
      message: this._state.dialogsPage.newMessageText,
      src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png"
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
    this._state.dialogsPage.newMessageText = action.newText;
    this._callSubscriber(this._state);
  }
},
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}


window.store = store;

export default store;