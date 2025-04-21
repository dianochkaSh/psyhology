
// create a makeStore function
import { Context, MakeStore, createWrapper } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { reducer, RootState } from './reducers/index';
import { thunk, ThunkDispatch } from 'redux-thunk';

const makeStore: MakeStore<RootState> =
  (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
export type NextThunkDispatch = ThunkDispatch<RootState, any, AnyAction>