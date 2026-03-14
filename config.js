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
			position: "bottom_left",
			config: {
				version: "ESV",
				size: "xsmall"
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				source: ["/r/spaceporn", "/r/hubble", "/r/astrophotography"],
				slideInterval: 5 * 60 * 1000,
				maximumEntries: 10,
				filter: "grayscale(100%) brightness(0.5)"
			}
		},
		{
			module: "MMM-MagicMover",
			position: "bottom_left",
			config: {
				updateInterval: 5 * 60 * 1000,
        maxMove: 15
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
