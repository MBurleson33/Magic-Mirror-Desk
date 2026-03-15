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
		kiosk: true,
		width: 1024,
		height: 600
	},
	modules: [
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				source: ["/r/spaceporn", "/r/hubble", "/r/astrophotography"],
				slideInterval: 5 * 60 * 1000,
				maximumEntries: 10,
				filter: "grayscale(100%) brightness(0.45)"
			}
		},
		{
			module: "MMM-MagicMover",
			config: {
				updateInterval: 5 * 60 * 1000,
				maxMove: 15
			}
		},
		{
			module: "clock",
			position: "middle_center",
			classes: "page1",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "weather",
			position: "top_right",
			classes: "page2",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 35.4676,
				lon: -97.5164,
				location: "Oklahoma City, US-OK"
			}
		},
		{
			module: "weather",
			position: "middle_center",
			classes: "page2",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 35.4676,
				lon: -97.5164,
				location: "Oklahoma City, US-OK"
			}
		},
		{
			module: "MMM-DailyBibleVerse",
			position: "middle_center",
			header: "Verse of the Day",
			classes: "page3",
			config: {
				version: "ESV",
				size: "small"
			}
		},
		{
			module: "MMM-pages",
			config: {
				modules: [
					["page1"],
					["page2"],
					["page3"]
				],
				fixed: ["MMM-Wallpaper", "MMM-MagicMover"],
				rotationTime: 30000
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }