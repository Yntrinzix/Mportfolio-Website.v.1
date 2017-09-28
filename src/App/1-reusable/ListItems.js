import React from 'react';

var ListItems = React.createClass({
   render: function() {
     return (
       <ul>
         {this.props.list.map(function(listValue){
           return <li>{listValue}</li>;
         })}
       </ul>
     )
   }
 });

 export default ListItems
