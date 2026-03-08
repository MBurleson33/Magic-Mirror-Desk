/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",
	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	electronOptions: {
		fullscreen: true,
		kiosk: true
	},
	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 35.4676,
				lon: -97.5164
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 35.4676,
				lon: -97.5164
			}
		},
		{
			module: "MMM-DailyBibleVerse",
			position: "lower-third",
			config: {
				version: "ESV"
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				source: "apod-hd",
				slideInterval: 5 * 60 * 1000,
				maximumEntries: 10,
				filter: "grayscale(100%) brightness(0.025)"
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
