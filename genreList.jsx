import React from 'react';

const GenreList = ({
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem}) => {
     return ( 
        <ul className="list-group">
        {items.map(item =>( 
            <li
        onClick={() => onItemSelect(item)}
        key={item[valueProperty]} 
        className={ item === selectedItem ? "list-group-item active " : "list-group-item"}
        style = {{cursor:"pointer" }}>

        {item[textProperty]}

        </li> ))} 
</ul>
     );
}
 
GenreList.defaultProps = {
    textProperty:'name',
    valueProperty:'_id'
}
 
export default GenreList;