import { appActionTypes } from './appActionTypes';

export default fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        // fetch(
        //     "https://jsonplaceholder.typicode.com/todos/1",
        //     {
        //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //         mode: 'cors', // no-cors, *cors, same-origin
        //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //         credentials: 'same-origin', // include, *same-origin, omit
        //         headers: {
        //           'Content-Type': 'application/json'
        //           // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         redirect: 'follow', // manual, *follow, error
        //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //         body: JSON.stringify(data) // body data type must match "Content-Type" header
        //     }
        // )
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            const data = response.data;
            dispatch(fetchDataSuccess(data))
        })
        .catch(error => {
            dispatch(fetchDataFailure(error.message))
        })
    }
}

export const fetchDataRequest = () => {
    return {
      type: appActionTypes.FETCH_DATA_REQUEST
    }
}
  
export const fetchDataSuccess = data => {
    return {
        type: appActionTypes.FETCH_DATA_SUCCESS,
        payload: data
    }
}
  
export const fetchDataFailure = error => {
    return {
        type: appActionTypes.FETCH_DATA_FAILURE,
        payload: error
    }
}