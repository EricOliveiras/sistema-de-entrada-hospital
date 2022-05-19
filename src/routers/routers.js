const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Hello World!',
	});
});

module.exports = router;