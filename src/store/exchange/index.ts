import { createSlice } from 'redux-starter-kit';
import initialState from './state';
import * as reducers from './reducers';
import * as selectors from './selectors';

const name = 'exchange';

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers,
});

export default reducer;
export {
  name,
  initialState,
  actions,
  selectors,
};
