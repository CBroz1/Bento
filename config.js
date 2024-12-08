// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Chris',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: '😴 Zzz',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '556a26f6ae1100e020a564e6ee54ea0e', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '41.9281',
	defaultLongitude: '87.7058',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/0/r?pli=1',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.yahoo.com/d/search/referrer=unread&keyword=is%253Aunread&accountIds=1&excludefolders=ARCHIVE',
		},
		{
			id: '3',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
		{
			id: '4',
			name: 'Weather',
			icon: 'cloud-moon',
			link: 'https://www.accuweather.com/en/us/logan-square/60647/hourly-weather-forecast/2094562',
		},
		{
			id: '5',
			name: 'Search',
			icon: 'search',
			link: 'https://www.google.com/',
		},
		{
			id: '6',
			name: 'Fire',
			icon: 'flame-kindling',
			link: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Chill',
					link: 'https://open.spotify.com/playlist/37i9dQZF1EVHGWrwldPRtj',
				},
				{
					name: 'Hits',
					link: 'https://open.spotify.com/playlist/37i9dQZF1E8CoLcGQmnJ6e',
				},
				{
					name: 'Hip Hop',
					link: 'https://open.spotify.com/playlist/37i9dQZF1E8PdNVs6qAr7w',
				},
				{
					name: 'Rock',
					link: 'https://open.spotify.com/playlist/37i9dQZF1E8LiRNkP3GYSY',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'Dropout',
					link: 'https://www.dropout.tv/new-releases',
				},
				{
					name: 'Nebula',
					link: 'https://nebula.tv/explore/videos',
				},
				{
					name: 'Max',
					link: 'https://play.max.com/',
				},
				{
					name: 'Hulu',
					link: 'https://www.hulu.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
