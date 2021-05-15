const router = require('express').Router();
const account = require('../controllers/account');

router
  .route('/')
  .post(account.addAccount)

module.exports = router;