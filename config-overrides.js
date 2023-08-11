const path = require("path");
// prettier-ignore
module.exports = function override(config, env) {
	config.resolve.alias = {
		...config.resolve.alias,
		"@":                          path.join(__dirname, "src/"),
  "@/components":               path.join(__dirname, "src/components"),
  "@/styles":                   path.join(__dirname, "src/styles"),
	};
	return config;
};
