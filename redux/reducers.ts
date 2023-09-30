import { combineReducers } from '@reduxjs/toolkit';

import statusSlice from '@/redux/features/status-slice';
import backgroundImage from '@/redux/features/background-image-slice';
import favoriteApps from '@/redux/features/favorite-apps-slice';

const rootReducer = combineReducers({
  status: statusSlice,
  backgroundImage: backgroundImage,
  favoriteApps: favoriteApps,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
