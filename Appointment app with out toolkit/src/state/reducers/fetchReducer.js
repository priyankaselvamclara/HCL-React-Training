const initialState = {data:[], error:''};

const fetchReducer = (
    state = initialState,
    action
) => {
    console.log('action', action)
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {...state, data:action.data, error: ''};
        case "FETCH_DATA_FAILURE":
            return {...state, data:[], error: action.data};
        case "DELETE_RECORD":
            return {...state, data:state.data.filter(ele => ele.id !== action.data), error: ''};
        case "EDIT_RECORD":
            state.data.forEach(ele=>{
                if(ele.id === action.id){
                    console.log('ele',ele);
                    ele.title = action.data.title;
                    ele.body = action.data.body;
                    console.log('ele',ele);
                }
            })
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@ state in fetch reducer', state, state.data);
            return {...state, data: state.data, error: ''};
        default:
            return state
    }
}

export default fetchReducer;