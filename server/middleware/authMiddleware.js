const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === "OPTIONS") {
		next()
	}
	try {
<<<<<<< HEAD
		const token = req.headers.authorization.split(' ')[1]
=======
		const token = req.headers.authorization.split(' ')[1] // Bearer 
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
		if (!token) {
			return res.status(401).json({ message: "Не авторизован" })
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		next()
	} catch (e) {
		res.status(401).json({ message: "Не авторизован" })
	}
};