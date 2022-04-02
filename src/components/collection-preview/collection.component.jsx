import React from "react";

import "./collection.style.css";
import CollectionItem from "../collection-items/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  console.log("title", title);
  console.log("items", items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
