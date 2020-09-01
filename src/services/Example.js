import axios from 'axios';

import { EXAMPLE, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../reducers/products';

const URL = '';

/**
 * FETCH USERS - redux saga
 */
export const getUsers = async () =>
  await axios.get(URL)
    .then(res => res)
    .catch(err => err);

/**
 * FETCH EXAMPLE - redux thunk
 */
export const getExample = () => async dispatch => {
  await dispatch({ type: EXAMPLE });
  await axios
    .get(URL)
    .then(res => dispatch({ type: EXAMPLE_SUCCESS, payload: res.data }))
    .catch(res => dispatch({ type: EXAMPLE_ERROR, payload: res }))
}
