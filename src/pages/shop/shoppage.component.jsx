import React, { Component } from "react";
import "./shoppage.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherRemainingProps }) => (
          <CollectionPreview key={id} {...otherRemainingProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
