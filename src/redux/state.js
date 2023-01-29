let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how are you?', likesCount: '28', dislikesCount: 2 },
      { id: 2, message: 'It is a social network on the blockhain', likesCount: 22, dislikesCount: 1 },
      { id: 3, message: 'Are you ready', likesCount: 30, dislikesCount: 0 }
    ]
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
    ]
  },

  newsPage: {
    newsData: [
      {id: 1, text: 'Итоги недели: Binance обвинили в обработке транзакций Bitzlato, а у Бэнкмана-Фрида конфисковали почти $700 млн'},
    ],
  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    lekesCount: 4,
    dislekesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  
}

export default state;