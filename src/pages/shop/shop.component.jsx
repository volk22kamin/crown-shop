import React from "react";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = SHOP_DATA;
  }

  render() {
    console.log("shop page");
    return (
      <div>
        <h1>SHOP PAGE</h1>
      </div>
    );
  }
}

export default ShopPage;
