// comments area is logic for server

// import axios from 'axios';
// import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR, POST_WINNER } from './constants';

// export const fetchModes = (data) =>{
//     return {
//         type: FETCH_MODES,
//         payload: data,
//     }
// };

// // fetchData => fetchSuccess || fetchError

// export const fetchLoaded = () => {
//     return {
//         type: FETCH_LOADED,
//     }
// };

// export const fetchError = (err) => {
//     return {
//          type: FETCH_ERROR,
//          payload: err,
//     }
// };

// export const postWinner = () => {
//     return{
//         type: POST_WINNER,
//     }
// }

// export const thunkCreaterGetModes = () => (dispatch) => {
//     dispatch(fetchLoaded());
//     axios.get("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
//     .then(response => dispatch(fetchModes(response.data)))
//     .catch(err => dispatch(fetchError(err)));
// }

// export const thunkCreaterPostWinner = (winnerObj) => (dispatch) => {
//     dispatch(fetchLoaded());
//     axios
//     .post("http://starnavi-frontend-test-task.herokuapp.com/winners", winnerObj)
//     .then(response => dispatch(postWinner()))
//     .catch(err => dispatch(fetchError(err)));
// }
