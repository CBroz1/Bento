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
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

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

	// firstButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'Calendar',
	// 		icon: 'calendar',
	// 		link: 'https://calendar.google.com/calendar/u/0/r?pli=1',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'Mail',
	// 		icon: 'mail',
	// 		link: 'https://mail.yahoo.com/d/search/referrer=unread&keyword=is%253Aunread&accountIds=1&excludefolders=ARCHIVE',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'YouTube',
	// 		icon: 'youtube',
	// 		link: 'https://www.youtube.com/feed/subscriptions',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Weather',
	// 		icon: 'cloud-moon',
	// 		link: 'https://www.accuweather.com/en/us/logan-square/60647/hourly-weather-forecast/2094562',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Search',
	// 		icon: 'search',
	// 		link: 'https://www.google.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Fire',
	// 		icon: 'flame-kindling',
	// 		link: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
	// 	},
	// ],
	//
	// secondButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'Music',
	// 		icon: 'headphones',
	// 		link: 'https://open.spotify.com',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'twitter',
	// 		icon: 'twitter',
	// 		link: 'https://twitter.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'bot',
	// 		icon: 'bot',
	// 		link: 'https://discord.com/app',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Amazon',
	// 		icon: 'shopping-bag',
	// 		link: 'https://amazon.com/',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Hashnode',
	// 		icon: 'pen-tool',
	// 		link: 'https://hashnode.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Figma',
	// 		icon: 'figma',
	// 		link: 'https://figma.com/',
	// 	},
	// ],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase-business',
			id: '1',
			links: [
				{
					name: 'Cal',
					link: 'https://calendar.google.com/calendar/u/0/r?pli=1',
				},
				{
					name: 'git',
					link: 'https://github.com/notifications',
				},
				{
					name: 'yah',
					link: 'https://mail.yahoo.com/d/search/referrer=unread&keyword=is%253Aunread&accountIds=1&excludefolders=ARCHIVE',
				},
				{
					name: '🌩️',
					link: 'https://www.accuweather.com/en/us/logan-square/60647/hourly-weather-forecast/2094562',
				},
			],
		},
		{
			icon: 'music',
			id: '2',
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
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'square-play',
			id: '1',
			links: [
				{
					name: 'yt',
					link: 'https://www.youtube.com/feed/subscriptions',
				},
				{
					name: 'neb',
					link: 'https://nebula.tv/explore/videos',
				},
				{
					name: 'drop',
					link: 'https://www.dropout.tv/new-releases',
				},
				{
					name: '🔥',
					link: 'https://www.youtube.com/watch?v=IoNE2dycFkA',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'Apple',
					link: 'https://tv.apple.com/',
				},
				{
					name: 'Disney',
					link: 'https://www.disneyplus.com/',
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
};
