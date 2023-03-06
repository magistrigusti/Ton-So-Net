const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {id: 1, followed: true, fullName: 'Dmitrii', statys: 'I am a boss', location: {city: 'Holon', country: 'Izrael'}},
    {id: 2, followed: false, fullName: 'Maria', statys: 'I am a user', location: {city: 'Ramat-Gan', country: 'Izrael'}},
    {id: 3, followed: false, fullName: 'Andry', statys: 'I am a user', location: {city: 'Bat-Yam', country: 'Izrael'}},
    {id: 4, followed: true, fullName: 'Sasha', statys: 'I am a user', location: {city: 'Moscow', country: "Russia"}},
    {id: 5, followed: false, fullName: 'Adi', statys: 'i am a user', location: {city: 'Tel-Aviv', country: 'Izrael'}},
    {id: 6, followed: false, fullName: 'Ivan', statys: 'i am a user', location: {city: 'Mscow', country: 'Russia'}}
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, follow: true}
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, follow: false}
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
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export default usersReducer;

