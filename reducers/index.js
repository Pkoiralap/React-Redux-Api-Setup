export const initialState = {
  message: '',
  apiMessage: '',
}

export default function (state=initialState, action) {
  if (action.type === 'CLICK_ME' ) {
    return {
       ...state,
       message: 'I am a new message',
    };
  } else if (action.type === 'FETCH_FINISH') {
    return {
      ...state,
      apiMessage: JSON.stringify(action.payload),
    }
  }
  return state;
}