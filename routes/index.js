const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;