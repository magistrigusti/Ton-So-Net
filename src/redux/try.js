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
      likesCount: 4,
      dislikesCount: 0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 8,
      text: this.userMessage,
      src: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png"
    };

    this._state.dialogsPage.messagesData.push(newMessage);
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
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
  }