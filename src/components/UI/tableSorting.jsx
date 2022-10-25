import propTypes from 'prop-types';
import "../../styles/table.css"

/**
* Sort table
* @param {array} data data table
* @param {func} setData function that manages data
* @param {string} categories table column names
* @component
*/
export default function Sorting ( { data, setData, categories } ) {

  const sortIncreasing = ( category ) => {
    const dataMap = data.map((e, i) => {
      if (category === "Name") {
        return { i, value: e.lastName.toLowerCase() };
      } else if (category === "Date of birth") {
        return { i, value: e.birth };
      } else if (category === "Address") {
        return { i, value: e.state };
      } else if (category === "Date start") {
        return { i, value: e.startDate };
      } else if (category === "Department") {
        return { i, value: e.department };
      }
      return console.log("error");
    });
    dataMap.sort((a, b) => {
      return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
    });
    const resultIncreasing = dataMap.map((v) => data[v.i]);
    setData(resultIncreasing);
    return;
  }
  const sortDescending= ( category ) => {
    const dataMap = data.map((e, i) => {
      if (category === "Name") {
        return { i, value: e.lastName.toLowerCase() };
      } else if (category === "Date of birth") {
        return { i, value: e.birth };
      } else if (category === "Address") {
        return { i, value: e.state };
      } else if (category === "Date start") {
        return { i, value: e.startDate };
      } else if (category === "Department") {
        return { i, value: e.department };
      }
      return console.log("error");
    });
    dataMap.sort((a, b) => {
      return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    });
    const resultDescending = dataMap.map((v) => data[v.i]);
    setData(resultDescending);
    return;
  }

    return (
      <div>
        <div className="chevronUp" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return sortIncreasing(category)}}>▲</div>

        <div className="chevronDown" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return sortDescending(category)}}>▲</div>
      </div>
    )
}

Sorting.propTypes = {
  data: propTypes.array,
  setData: propTypes.func,
  categories: propTypes.string,
}
