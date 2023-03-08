import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import newsReducer from './news-reducer.js';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '28', dislikesCount: 2 },
        { id: 2, message: 'It is a social network on the blockhain', likesCount: 22, dislikesCount: 1 },
        { id: 3, message: 'Are you ready', likesCount: 30, dislikesCount: 0 }
      ],
      newPostText: '',
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
      newMessageBody: '',
    },

    newsPage: {
      newsData: [
        { id: 1, title: 'Cripto News', text: 'Итоги недели: Binance обвинили в обработке транзакций Bitzlato, а у Бэнкмана-Фрида конфисковали почти $700 млн', src: "https://cnews24.ru/uploads/08f/08f8f84ab0ddc6016e441b2ea24896b70e453cab.webp" },
        { id: 2, title: 'Cripto News', text: 'XRP Price Prediction – Can XRP Go to $5 This Year?', src: 'https://v2.cimg.co/news/102948/253724/responsive-images/xrp___media_library_original_1735_956.jpg' }
      ]
    },

    /* usersPage: {
      users: [
        {id: 1, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png", followed: true, fullName: 'Dmitrii', status: 'I am a boss', location: {city: 'Holon', country: 'Izrael'}},
        {id: 2, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202832.png", followed: false, fullName: 'Maria', status: 'I am a user', location: {city: 'Ramat-Gan', country: 'Izrael'}},
        {id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png", followed: false, fullName: 'Andry', status: 'I am a user', location: {city: 'Bat-Yam', country: 'Izrael'}},
        {id: 4, photoUrl: "https://cdn-icons-png.flaticon.com/512/9416/9416234.png", followed: true, fullName: 'Sasha', status: 'I am a user', location: {city: 'Moscow', country: "Russia"}},
        {id: 5, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Adi', status: 'i am a user', location: {city: 'Tel-Aviv', country: 'Izrael'}},
        {id: 6, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Ivan', status: 'i am a user', location: {city: 'Mscow', country: 'Russia'}}
      ]
    } */

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

dispatch(action) {

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.newsPage = newsReducer(this._state.newsPage, action );

  this._callSubscriber(this._state);

},
}

export default store;
window.store = store;

