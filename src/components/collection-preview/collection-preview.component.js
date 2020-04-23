import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <Link to={`/shop/${title.toLowerCase()}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...remainingProps }) => (
          <CollectionItem key={id} id={id} {...remainingProps} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
