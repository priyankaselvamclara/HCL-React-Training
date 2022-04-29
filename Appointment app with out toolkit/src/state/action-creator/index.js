/*export const fetchPosts = () => dispatch => {
    console.log('am the fetch action');
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
    dispatch({
    type: fetch,
    payload: posts
    })
    );
    };*/


    
    
    
    export const fetchDataSuccess = (data) => {
        return {
            type: "FETCH_DATA_SUCCESS",
            data: data
        }
    
    }
    
    export const fetchDataFailure = (error) => {
        return {
            type: "FETCH_DATA_FAILURE",
            data: error
        }
    }

    export const deleteRecord = (itemID) => {
        return {
            type: "DELETE_RECORD",
            data: itemID
        }
    }
    export const editRecord = (itemID, item) => {
        return {
            type: "EDIT_RECORD",
            data: item,
            id: itemID
        }
    }
    
    export const fetchPosts = () => {
        //console.log('state $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ action', state)
        return (dispatch) => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => dispatch(fetchDataSuccess(res)))
            .catch(err => dispatch(fetchDataFailure(err.messaga)))
        }
    
    }
    
