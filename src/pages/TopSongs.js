import React, { useState } from "react";

//Global Context
import { useGlobalListingContext } from "../ContextProvider"

// Components
import Grid from "../components/Grid";
import Card from "../components/Card";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";

const TopSongs = () => {
  const filterItems = 20;
  const {songs, loading, error, favourites, addToFavourite} =  useGlobalListingContext()
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(filterItems);

  const filteredSongs = songs.filter(song => {
    return (
      song["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      song["im:artist"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  const loadMoreAlbums = () => {
    setVisible(prev => prev + filterItems);
  };

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Grid header="Top Songs" callback={s => setSearch(s)}>
        {filteredSongs.slice(0, visible).map((song, i) => (
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
      {loading && <Spinner />}

      {visible < filteredSongs.length && !loading && (
        <LoadMoreBtn text={`Load more songs`} callback={loadMoreAlbums} />
      )}
    </>
  );
};

export default TopSongs;
