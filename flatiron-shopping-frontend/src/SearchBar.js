import React from 'react';


export default class SearchBar extends React.Component{





    render(){
        return(
            <div className="search-bar">
         <label className="filter-label">
        <strong>Filter by: </strong>
        <select onChange={this.props.settingBooleanForSorting}>
          <option value="Feeding">Feeding</option>
          <option value="Clothing">Clothing</option>
          <option value="Travel">Travel</option>
          <option value="Diaper">Diaper</option>
          <option value="Toys">Toys</option>
          <option value="All">All</option>
        </select>
      </label>

            </div>
        )
    }
}