const { app } = require("./src/routes/server");

PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`Start app on port ${PORT}`);
});
