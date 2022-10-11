import "../../styles/list.css"

/**
* Sorting chevron
* @component
*/
export default function SortingChevron ( {data, setData, categories} ) {

  const dataMap = data.map((e, i) => {
    if (categories === "lastName") {
      return { i, value: e.lastName.toLowerCase()}
    } else if (categories === "birth") { 
      return { i, value: e.birth} 
    } else if (categories === "state") { 
      return { i, value: e.state} 
    } else if (categories === "dateStart") { 
      return { i, value: e.dateStart}    
    } else if (categories === "department") {
      return { i, value: e.department}
    }
  });

  const dataSortIncreasing = () => {
      dataMap.sort((a, b) => {
        return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
    });
    const resultIncreasing = dataMap.map((v) => data[v.i]);
    setData(resultIncreasing);        
    return resultIncreasing;
  };

  const dataSortDescending = () => {
      dataMap.sort((a, b) => {
        return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    });  
    const resultDescending = dataMap.map((v) => data[v.i]);
    setData(resultDescending); 
    return resultDescending;
  };

    return (
      <div>
        <div className="chevronUp" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          console.log(category);
          return dataSortIncreasing()}}>▲</div>

        <div className="chevronDown" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          console.log(category);
          return dataSortDescending()}}>▲</div>
      </div>
    )
}