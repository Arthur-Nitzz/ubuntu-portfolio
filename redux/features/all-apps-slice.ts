import { ReactNode } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chrome } from '@/components/apps';

interface AllAppsState {
  id: string;
  title: string;
  imageSrc: string;
  isFavorite: boolean;
  isOpen: boolean;
  app: ReactNode;
}

const initialState: AllAppsState[] = [
  {
    id: Math.random().toString(),
    title: 'Chrome',
    imageSrc: '/apps/chrome.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'Calculator',
    imageSrc: '/apps/calc.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'About Sakil',
    imageSrc: '/apps/user-home.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'VS Code',
    imageSrc: '/apps/vscode.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'Terminal',
    imageSrc: '/apps/bash.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'Spotify',
    imageSrc: '/apps/spotify.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
  {
    id: Math.random().toString(),
    title: 'Settings',
    imageSrc: '/apps/gnome-control-center.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome(),
  },
];
export const appApps = createSlice({
  name: 'allApps',
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

export const { closeApp, openApp } = appApps.actions;
export default appApps.reducer;
