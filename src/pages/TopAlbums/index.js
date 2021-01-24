import React, { useState } from "react";

// Components
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import LoadMoreBtn from "../../components/elements/LoadMoreBtn";
import Spinner from "../../components/elements/Spinner/Spinner";
import TopSongsSection from "../../components/TopSongsSection";

//Global Context
import { useGlobalListingContext } from "../../ContextProvider"

const TopAlbums = () => {
  const {albums, songs, loading, error, favourites, addToFavourite} =  useGlobalListingContext()
  const filterItems = 20;
  const [visible, setVisible] = useState(filterItems);
  const [search, setSearch] = useState("");

  const filteredAlbums = albums.filter(album => {
    return (
      album["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      album["im:artist"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  const loadMoreAlbums = () => {
    setVisible(prev => prev + filterItems);
  };

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Grid header="Top Albums" callback={s => setSearch(s)}>
        {filteredAlbums.slice(0, visible).map(album => (
          <Card
            key={album.id.attributes["im:id"]}
            item={album}
            index={albums.indexOf(album)}
            callback={addToFavourite}
            itemType={'albums'}
            favourite={favourites['albums'].filter(item => item === album.id.attributes["im:id"]).length > 0}
            showDetails={true}
          />
        ))}
      </Grid>

      {loading && <Spinner />}

      {visible < filteredAlbums.length && !loading && (
        <LoadMoreBtn text={`Load more albums`} callback={loadMoreAlbums} />
      )}

      {songs.length !== 0 && !loading && <TopSongsSection songs={songs.slice(0, 8)} />}
    </>
  );
};

export default TopAlbums;
