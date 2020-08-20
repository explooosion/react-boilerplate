import axios from 'axios';

import { EXAMPLE, EXAMPLE_SUCCESS, EXAMPLE_ERROR } from '../reducers/products';

const URL = '';

/**
 * FETCH EXAMPLE
 */
export const getExample = () => async dispatch => {
  await dispatch({ type: EXAMPLE });
  await axios
    .get(URL)
    .then(res => dispatch({ type: EXAMPLE_SUCCESS, payload: res.data }))
    .catch(res => dispatch({ type: EXAMPLE_ERROR, payload: res }))
}
