import React from "react";
import { Link } from "react-router-dom";

import { toTitleCase, truncateWithEllipses } from "../config/helpers";
import heartIconSolid from "../assets/images/heart-solid.svg";
import heartIconRegular from "../assets/images/heart-regular.svg";

const Card = ({ item, callback, index, itemType, favourite, showDetails=false }) => {
  const itemId = item.id.attributes["im:id"];
  const itemName = truncateWithEllipses(toTitleCase(item["im:name"].label), 45);
  const itemArtist = item["im:artist"].label;
  const itemImage = item["im:image"][2].label;
  const topNumber = index + 1;

  return (
    <li className="item-card">
      <Link
        to={{
          pathname: `/item/${itemId}`,
          state: {
            item,
            topNumber
          }
        }}
      >
        <div className="item-card__mobile-link"></div>
      </Link>
      <div className="item-card__thumbnail" style={{ backgroundImage: `url(${itemImage})` }}>
        <img
          src={favourite ? heartIconSolid : heartIconRegular}
          alt="Heart Icon"
          className="favourite-icon"
          onClick={() => callback(itemType,itemId)}
        />
      </div>
      <h3 className="item-card__title">{itemName}</h3>
      <p className="item-card__artist">{itemArtist}</p>

      <div className="item-card__overlay"></div>
      <p className="item-card__overlay-number">{topNumber}</p>
      {showDetails &&
        <Link
          to={{
            pathname: `/${itemType}/${itemId}`,
            state: {
              album:item,
              topNumber
            }
          }}
        >
          <span className="item-card__overlay-rect">
            <p>{`See ${itemType}`}</p>
          </span>
        </Link>
      }
      <span className="item-card__overlay-shadow"></span>
    </li>
  );
};

export default Card;
