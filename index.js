Parallel = require("./lib/parallel")

module.exports = {
	create: function(data, opts){
		if (!data) return new Parallel()
		if (data && !opts) return new Parallel(data)
		if (data && opts) return new Parallel(data, opts)
	}
}