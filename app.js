const middelWere = require('./middleware');

const port = process.env.PORT || 3000;
const app = middelWere();

app.listen(port, () => console.log(`listen to port ${port}`));
