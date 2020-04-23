import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {" "}
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}{" "}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionOverview);
