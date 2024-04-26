const initialState = {
    isLoading:true,
}

const loadingReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'STOP_LOADING':
            return{
                ...state,
                isLoading:state.isLoading=false
            }
    
        default:
            return state
    }
}

export default loadingReducer;