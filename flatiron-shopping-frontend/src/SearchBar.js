import React from 'react';


export default class SearchBar extends React.Component{





    render(){
        return(
            <div className="search-bar">
         <label className="filter-label">
        <strong>Filter by: </strong>
        <select onChange={this.props.settingBooleanForSorting}>
          <option value="all">All</option>
          <option value="clothing">Clothing</option>
          <option value="travel">Travel</option>
          <option value="diaper">Diaper</option>
          <option value="toys">Toys</option>
          <option value="feeding">Feeding</option>
        </select>
        </label>
            </div>
        )
    }
}