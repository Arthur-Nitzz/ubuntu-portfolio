import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _, { min } from 'lodash';

import { Chrome, VSCode, Terminal } from '@/components/apps';

interface AllAppsState {
  id: string;
  title: string;
  imageSrc: string;
  isFavorite: boolean;
  isOpen: boolean;
  app: any; //FIXME:
  isMinimized: boolean;
  position: {
    x: number;
    y: number;
  };
  maximized: boolean;
}

const initialState: AllAppsState[] = [
  {
    id: _.uniqueId(),
    title: 'Chrome',
    imageSrc: '/apps/chrome.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'Calculator',
    imageSrc: '/apps/calc.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'About Sakil',
    imageSrc: '/apps/user-home.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'VS Code',
    imageSrc: '/apps/vscode.png',
    isFavorite: true,
    isOpen: false,
    app: VSCode,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'Terminal',
    imageSrc: '/apps/bash.png',
    isFavorite: true,
    isOpen: false,
    app: Terminal,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'Spotify',
    imageSrc: '/apps/spotify.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
  },
  {
    id: _.uniqueId(),
    title: 'Settings',
    imageSrc: '/apps/gnome-control-center.png',
    isFavorite: true,
    isOpen: false,
    app: Chrome,
    isMinimized: false,
    position: {
      x: 0,
      y: 0,
    },
    maximized: false,
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
        findApp.isMinimized = false;
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      const appToClose = state.find((app) => app.id === action.payload);
      if (appToClose) {
        appToClose.isOpen = false;
      }
    },
    minimizeApp: (state, action: PayloadAction<string>) => {
      const appToMinimize = state.find((app) => app.id === action.payload);
      if (appToMinimize) {
        appToMinimize.isMinimized = true;
      }
    },
    changePosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>,
    ) => {
      const appToChange = state.find((app) => app.id === action.payload.id);
      if (appToChange) {
        appToChange.position = action.payload.position;
      }
    },
    maximizeApp: (state, action: PayloadAction<string>) => {
      const appToMaximize = state.find((app) => app.id === action.payload);
      if (appToMaximize) {
        appToMaximize.maximized = !appToMaximize.maximized;
      }
    },
    reset: (state, action: PayloadAction<string>) => {
      const appToReset = state.find((app) => app.id === action.payload);
      if (appToReset) {
        appToReset.position = {
          x: 0,
          y: 0,
        };
        appToReset.maximized = false;
      }
    },
  },
});

export const {
  closeApp,
  openApp,
  minimizeApp,
  changePosition,
  maximizeApp,
  reset,
} = appApps.actions;
export default appApps.reducer;
