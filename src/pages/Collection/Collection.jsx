import React from "react";
import "./Collection.scss";
import CollectionItem from '../../components/collection-items/CollectionItem'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shopSelectors'


const Collection = ({ match,collection }) => {
const {title,items}=collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
          {items.map(item => <CollectionItem key={items.id} item={item}/>)}
      </div>
    </div>
  );
};

const mapStateToProps =(state,ownProps)=>({
    collection: selectCollection(ownProps.match.params.id)(state)
})

export default connect(mapStateToProps)(Collection);
