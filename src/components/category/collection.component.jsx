import React from "react";

import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items.map(({ id, ...remainingProps }) => (
          <CollectionItem key={id} id={id} {...remainingProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
