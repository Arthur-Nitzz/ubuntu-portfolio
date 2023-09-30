import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteAppsState {
  id: string;
  title: string;
  imageSrc: string;
  isFavorite: boolean;
  isOpen: boolean;
}

const initialState: FavoriteAppsState[] = [
  {
    id: Math.random().toString(),
    title: 'Chrome',
    imageSrc: '/apps/chrome.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'Calculator',
    imageSrc: '/apps/calc.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'About Sakil',
    imageSrc: '/apps/user-home.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'VS Code',
    imageSrc: '/apps/vscode.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'Terminal',
    imageSrc: '/apps/bash.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'Spotify',
    imageSrc: '/apps/spotify.png',
    isFavorite: true,
    isOpen: false,
  },
  {
    id: Math.random().toString(),
    title: 'Settings',
    imageSrc: '/apps/gnome-control-center.png',
    isFavorite: true,
    isOpen: false,
  },
];
export const favoriteApps = createSlice({
  name: 'favoriteApps',
  initialState,
  reducers: {
    openApp: (state, action: PayloadAction<string>) => {
      const findApp = state.find((app) => app.id === action.payload);
      if (findApp) {
        findApp.isOpen = true;
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      const appToClose = state.find((app) => app.id === action.payload);
      if (appToClose) {
        appToClose.isOpen = false;
      }
    },
  },
});

export const { closeApp, openApp } = favoriteApps.actions;
export default favoriteApps.reducer;
