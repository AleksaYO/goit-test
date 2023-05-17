const { configureStore } = require('@reduxjs/toolkit');
const { userReduser } = require('./slice');

export const store = configureStore({
  reducer: userReduser,
});
