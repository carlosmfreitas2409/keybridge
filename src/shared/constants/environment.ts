export const ENVIRONMENT = {
  IS_DEV: process.env.NODE_ENV === 'development',

  ELECTRON: {
    RENDERER_URL: process.env.ELECTRON_RENDERER_URL,
  },
};
