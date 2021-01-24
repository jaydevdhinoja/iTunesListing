import {GlobalListingContext } from '../ContextProvider'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { cleanup } from '@testing-library/react';

afterEach(cleanup);

export const InitialState = {
	albums: [
		{
            "im:name": {
                label: "Black Pumas (Deluxe)"
            },
			category: {
				attributes: {
					"im:id": "1143",
					label: "Soul",
					scheme: "https://music.apple.com/us/genre/music-r-b-soul-soul/id1143?uo=2",
					term: "Soul"
				}
			},
			id: {
				attributes: {
					"im:id": "1524099463",
				},
				label: "https://music.apple.com/us/album/black-pumas-deluxe/1524099463?uo=2"
			},
			"im:artist": {
				attributes: {
					href: "https://music.apple.com/us/artist/black-pumas/1353548841?uo=2",
				},
				label: "Black Pumas"
			},
			"im:image": [
				{
					attributes: {
						height: "55",
						label: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/55x55bb.png"
					}
				},
				{
					attributes: {
						height: "60",
						label: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/60x60bb.png"
					}
				},
				{
					attributes: {
						height: "170",
						label: "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/170x170bb.png"
					}
				}
			],
			"im:releaseDate": {
				attributes: {
					label: "January 13, 2021"
				},
				label: "2021-01-13T00:00:00-07:00"
			}
		}
	],
	songs:[
		{
            "im:name": {
                label: "Undivided"
            },
			category: {
				attributes: {
					"im:id": "6",
					label: "Country",
					scheme: "https://music.apple.com/us/genre/music-country/id6?uo=2",
					term: "Country"
				}
			},
			id: {
				attributes: {
					"im:id": "1545178423",
				},
				label: "https://music.apple.com/us/album/undivided/1545178421?i=1545178423&uo=2"
			},
			"im:artist": {
				attributes: {
					href: "https://music.apple.com/us/artist/tim-mcgraw/3496236?uo=2",
				},
				label: "Tim McGraw & Tyler Hubbard"
            },
            "im:releaseDate": {
				attributes: {
					label: "January 13, 2021"
				},
				label: "2021-01-13T00:00:00-07:00"
			},
			"im:image": [
				{
					attributes: {
						height: "55",
						label: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/55x55bb.png"
					}
				},
				{
					attributes: {
						height: "60",
						label: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/60x60bb.png"
					}
				},
				{
					attributes: {
						height: "170",
						label: "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/6c/80/d0/6c80d0cf-eb31-344c-3e38-ef29b2479fd0/20UMGIM60549.rgb.jpg/170x170bb.png"
					}
				}
			]
		}
	],
	favourites: {
		albums: ['1524099463'],
		songs: ['1545178423']
	}
};

export function renderWithContext(node, { value, ...options }) {
	return render(<GlobalListingContext.Provider value={value}><BrowserRouter>{node}</BrowserRouter></GlobalListingContext.Provider>, options);
}