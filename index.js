const express = require('express');
const morgan = require('morgan');
const goatRoutes = require('./src/routes/goatRoutes');
const { initDb } = require('./src/db/init');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/goats', goatRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Goat API listening on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize DB', err);
  process.exit(1);
});

module.exports = app;
