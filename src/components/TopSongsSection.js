import React from "react";
import { toTitleCase, truncateWithEllipses, getFullYear } from "../config/helpers";
import { Link } from "react-router-dom";

const TopSongsSection = ({ songs }) => (
  <section className="top-songs">
    <div className="container">
      <div className="top-songs__header">
        <div className="top-songs__header-headline section-headline">
          <h2>Top Songs</h2>
        </div>
      </div>
      <div className="top-songs__list">
        <div className="row">
          {songs.map((song, index) => {
            const songName = song["im:name"].label;
            const songArtist = song["im:artist"].label;
            const songImage = song["im:image"][2].label;
            const songDate = song["im:releaseDate"].label;

            return (
              <div className="col-md-3" key={song.id.attributes["im:id"]}>
                <div className="top-songs__item">
                  <img
                    className="top-songs__item-thumbnail"
                    src={songImage}
                    alt={`Song ${songName}`}
                  />
                  <div className="top-songs__item-content">
                    <p className="top-songs__item-number">#{index + 1}</p>
                    <h3 className="top-songs__item-title">
                      {truncateWithEllipses(toTitleCase(songName), 45)}
                    </h3>
                    <p className="top-songs__item-artist">{songArtist}</p>
                    <p className="top-songs__item-artist">{getFullYear(songDate)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TopSongsSection;
