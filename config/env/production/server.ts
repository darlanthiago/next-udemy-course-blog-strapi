module.exports = ({ env }) => ({
  url: process.env.MY_HEROKU_URL,
  port: process.env.PORT,
});
