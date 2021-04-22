import { createStore } from 'redux';
import { reducer } from './User/reducer';

export const store = createStore(reducer);
