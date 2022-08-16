export default ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  port: process.env.PORT,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
