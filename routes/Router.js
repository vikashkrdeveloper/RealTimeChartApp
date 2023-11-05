const express = require('express');
const router = express.Router();
const ErrorControllers = require('../controllers/ErrorControllers');
const HomeControllers = require('../controllers/HomeControllers');
const UserRegistrationControllers = require('../controllers/UserRegistrationControllers');
const UserLoginControllers = require('../controllers/UserLoginControllers');
const UserDetailsControllers = require('../controllers/UserDetailsControllers');
const ProductAllShowControlers = require('../controllers/ProductAllShowControlers');
const ProductItemsCreateControllers = require('../controllers/ProductItemsCreateControllers');
const ProductItemsAddedControllers = require('../controllers/ProductItemsAddedControllers');
const ProductItemsDeletedControllers = require('../controllers/ProductItemsDeletedControllers');
const UserDetailsMiddleware = require('../middleware/UserDetailsMiddleware');

router.get('/', HomeControllers);
router.get('/user/details', UserDetailsMiddleware, UserDetailsControllers);
router.get('/api/product/items/all', ProductAllShowControlers);
router.post('/user/registration', UserRegistrationControllers);
router.post('/user/login', UserLoginControllers);
router.post('/api/product/create/items', ProductItemsCreateControllers);
router.put('/api/product/updates/items/:id', ProductItemsAddedControllers);
router.delete('/api/product/delete/items/:id', ProductItemsDeletedControllers);
router.all('*', ErrorControllers);

module.exports = router;