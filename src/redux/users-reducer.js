const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
        /* {id: 1, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png", followed: true, fullName: 'Dmitrii', status: 'I am a boss', location: {city: 'Holon', country: 'Izrael'}},
        {id: 2, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202832.png", followed: false, fullName: 'Maria', status: 'I am a user', location: {city: 'Ramat-Gan', country: 'Izrael'}},
        {id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png", followed: false, fullName: 'Andry', status: 'I am a user', location: {city: 'Bat-Yam', country: 'Izrael'}},
        {id: 4, photoUrl: "https://cdn-icons-png.flaticon.com/512/9416/9416234.png", followed: true, fullName: 'Sasha', status: 'I am a user', location: {city: 'Moscow', country: "Russia"}},
        {id: 5, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Adi', status: 'i am a user', location: {city: 'Tel-Aviv', country: 'Izrael'}},
        {id: 6, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Ivan', status: 'i am a user', location: {city: 'Mscow', country: 'Russia'}} */
      ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;