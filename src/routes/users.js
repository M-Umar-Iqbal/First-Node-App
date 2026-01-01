const express = require('express');
const router = express.Router();

router.get('/get-users', (req, res) => {
    res.status(200).json({ message: 'Users fetched successfully' });
})

module.exports = router;