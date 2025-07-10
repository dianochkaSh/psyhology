import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

/* reducers */
import { blogReducer } from './blogReducer';
import { problemReducer } from './problemReducer';
import { personReducer } from '@/store/reducers/personReducer';
import { certificateReducer } from '@/store/reducers/certificateReducer';
import { modalRecordReducer } from '@/store/reducers/modalRecordReducer';
import { formAppointmentReducer } from '@/store/reducers/formAppointmentReducer';
import { formSignInReducer } from '@/store/reducers/formSignInReducer';


const rootReducer = combineReducers({
    blog: blogReducer,
    problem: problemReducer,
    person: personReducer,
    certificate: certificateReducer,
    modalWindowRecord: modalRecordReducer,
    appointmentForm : formAppointmentReducer,
    signInForm: formSignInReducer
});
export  const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>
