const express = require('express');
const router = express.Router();
const requestsController = require('../controller/RequestsController')


// Add request to db
router.post('/addRequest', requestsController.addRequest);

// Delete request fron db
router.delete('/requests/:id', requestsController.deleteRequests);

// Display the request page
router.get('/requests/form', requestsController.displayRequestPage);
// Display all requests
router.get('/requests', requestsController.getAllRequests)

module.exports = router;