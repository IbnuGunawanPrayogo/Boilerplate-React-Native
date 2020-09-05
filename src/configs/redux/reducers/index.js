const initialState = 
    {
        value: 0
    }
  
const index = (state = initialState, action) => {
    switch (action.type) {
        case `INCREMENT`:
            return{
                ...state,
                value: action.value + 1,
            }
        case `DECREMENT`:
            return{
                ...state,
                value: action.value - 1,
            }
        default:
          return state
      }
    }
    
export default index