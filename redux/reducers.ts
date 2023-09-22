import { combineReducers } from '@reduxjs/toolkit';

import statusSlice from '@/redux/features/status-slice';

const rootReducer = combineReducers({
  status: statusSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
