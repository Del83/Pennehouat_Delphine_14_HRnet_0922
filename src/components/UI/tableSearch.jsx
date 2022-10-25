import { useState } from "react"
import propTypes from 'prop-types';

/**
* Search in table
* @param {array} data data table
* @param {func} setData function that manages data
* @component
*/
export default function Search ( {data, setData} ) {

    const [ searchInput, setSearchInput ] = useState("")

    const searchData = (inputContent) => {
        let arrayFilter = [];
        if (inputContent.length >= 3) {
            setSearchInput(inputContent)
          data
            .filter((item) => {
              return (
                item.firstName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                  item.lastName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                  item.department
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
            })
            .map((item) => {
              arrayFilter.push(item);
            return setData(arrayFilter);
            });
        } 
        return setSearchInput(inputContent);;
      }

    const handleSearchInput = (e) => {
            const inputContent = e.target.value.toLowerCase()
                .replace(/\s/g, "")
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "");
            return searchData(inputContent)
    }

    return (
        <div className="search">
            <span>Search</span>
            <input className="search-input" name="search" type="text" placeholder={" ..."} onChange={(e) => handleSearchInput(e)} value={searchInput} />
        </div>
    )
}

Search.propTypes = {
    data: propTypes.array,
    setData: propTypes.func,
  }
