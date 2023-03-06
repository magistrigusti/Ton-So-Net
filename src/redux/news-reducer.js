

/* const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS_BODY = 'UPDATE-NEWS-BODY'; */

let initialState = {
  newsData: [
        { id: 1, title: 'Cripto News', text: 'Итоги недели: Binance обвинили в обработке транзакций Bitzlato, а у Бэнкмана-Фрида конфисковали почти $700 млн', src: "https://cnews24.ru/uploads/08f/08f8f84ab0ddc6016e441b2ea24896b70e453cab.webp" },
        { id: 2, title: 'Cripto News', text: 'XRP Price Prediction – Can XRP Go to $5 This Year?', src: 'https://v2.cimg.co/news/102948/253724/responsive-images/xrp___media_library_original_1735_956.jpg' }
      ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

/* export const addNewsCreator = () => ({type: ADD_NEWS});
export const updateNewsBodyCreator = (news) => 
  ({type: UPDATE_NEWS_BODY, body: news});
 */

export default newsReducer;

