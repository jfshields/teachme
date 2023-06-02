const initialState = {
    data: null,
    error: null,
  };
  
  const openAiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_OPENAI_SUCCESS':
        return { ...state, data: action.payload, error: null };
      case 'FETCH_OPENAI_FAILURE':
        return { ...state, data: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default openAiReducer;

  