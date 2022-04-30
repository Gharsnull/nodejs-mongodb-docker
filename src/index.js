const app = require('./app');
app.listen(3000);
require('./database');
app.use(require('./routes/index.routes'));
console.log('Server is running on port 3000')