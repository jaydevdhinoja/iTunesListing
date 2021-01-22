import React from "react";
//Global Context
import { useGlobalListingContext } from "../ContextProvider"

// Components
import Grid from "../components/Grid";
import Card from "../components/Card";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner"

const FavouritesPage = () => {
  const {songs, albums, loading, error, favourites, addToFavourite} =  useGlobalListingContext()
  const filteredAlbums = albums.filter(song => favourites.albums.findIndex(fav => fav === song.id.attributes["im:id"]) > -1);
  const filteredSongs = songs.filter(song => favourites.songs.findIndex(fav => fav === song.id.attributes["im:id"]) > -1);
  return (
    <div className="favourites-page">
      <div className="container wrapper">
      <Grid header="Favourite Albums">
          {filteredAlbums.map((album, i) => (
            <Card 
              key={album.id.attributes["im:id"]} 
              item={album} 
              index={i} 
              callback={addToFavourite}
              itemType={'albums'} 
              favourite={favourites['albums'].filter(item => item === album.id.attributes["im:id"]).length > 0}
              showDetails={true}
              />
          ))}
        </Grid>
        <Grid header="Favourite Songs">
          {filteredSongs.map((song, i) => (
            <Card 
              key={song.id.attributes["im:id"]} 
              item={song} 
              index={i} 
              callback={addToFavourite}
              itemType={'songs'} 
              favourite={favourites['songs'].filter(item => item === song.id.attributes["im:id"]).length > 0}
              />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default FavouritesPage;
