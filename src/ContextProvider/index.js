import React, { createContext, useContext, useState, useEffect } from 'react';
import { TOP_ALBUMS_API_URL, TOP_SONGS_API_URL } from "../config";

import axios from 'axios';
const defaultState = {
    albums: [],
    songs: [],
    favourites: {
        songs: [],
        albums: []
    },
    error: '',
    loading: false
};
export const GlobalListingContext = createContext(defaultState);

const GlobalListingProvider = ({ children }) => {
	const InitialState = () => defaultState;

    const [ state, setState ] = useState(InitialState());

    const addToFavourite = (type, item) => {
        let favs = state.favourites[type]
        const favIndex = favs.findIndex(favItem => favItem === item)
        if(favIndex > -1){
            favs.splice(favIndex,1)
        } else {
            favs = [...favs, item]
        }
        setState(prev => {
            return({
            ...prev,
            favourites: {...prev.favourites, [type]: favs}
        })})
    }

	useEffect(
		() => {
			const fetchAlbums = async () => {
				try {
                    const result = await axios(TOP_ALBUMS_API_URL);
					setState(prev => ({
						...prev,
						albums: result.data.feed.entry
					}));
				} catch (e) {
                    console.error(e);
                    setState(prev => ({
                        ...prev,
                        error: e
                    }))
				}
            };
            const fetchSongs = async () => {
                try {
                    const result = await axios(TOP_SONGS_API_URL);
                    setState(prev => ({
						...prev,
						songs: result.data.feed.entry
					}));
                } catch (e) {
                    console.error(e);
                    setState(prev => ({
						...prev,
                        error: e
                    }))
                }
            };
            setState(prev => ({ ...prev, loading: true}))
            fetchAlbums();
            fetchSongs();
            setState(prev => ({ ...prev, loading: false}))
		},
		[]
    );
    

	return (
		<GlobalListingContext.Provider
			value={{
                ...state,
                addToFavourite
			}}
		>
			{children}
		</GlobalListingContext.Provider>
	);
};

export default GlobalListingProvider;

export const useGlobalListingContext = () => {
	return useContext(GlobalListingContext);
};
