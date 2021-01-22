import React from "react";
import { toTitleCase, getFullYear } from "../config/helpers";
import heartIconSolid from "../assets/images/heart-solid.svg";
import heartIconRegular from "../assets/images/heart-regular.svg";
import { Link } from "react-router-dom";

//Global Context
import { useGlobalListingContext } from "../ContextProvider"

export default function SingleAlbum(props) {
  const { favourites, addToFavourite } = useGlobalListingContext()
  const { id } = props.match.params;
  const { album, topNumber } = props.location.state;
  const albumId = album.id.attributes["im:id"];
  const albumName = toTitleCase(album["im:name"].label);
  const albumArtist = album["im:artist"].label;
  const albumImage = album["im:image"][2].label;
  const albumCategory = album.category.attributes.label;
  const albumDate = getFullYear(album["im:releaseDate"].label);
  const albumCount = album["im:itemCount"].label;
  return (
    <section>
      <div className="container wrapper">
        <div className="album-details">
          <div className="row">
            <div className="col-sm-6 col-lg-5 col-xl-4">
              <div className="album-details__thumbnail-wrapper">
                <img src={albumImage} alt="Album Cover" className="album-details__thumbnail" />
                <img
                  src={heartIconRegular}
                  alt="Heart Icon"
                  className="favourite-icon"
                  onClick={() => alert(albumId)}
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-7 col-xl-8">
              <div className="album-details__content">
                <p className="album-details__content-number">{topNumber}</p>
                <h2 className="album-details__content-title">{albumName}</h2>
                <h4 className="album-details__content-artist">{albumArtist}</h4>
                <p className="album-details__content-text">
                  {albumCategory} · {albumDate}
                </p>
                <p className="album-details__content-text">{albumCount} Songs</p>
                <Link to="/">
                  <button type="button" className="button button-dark">
                    &#8592; See all albums
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}