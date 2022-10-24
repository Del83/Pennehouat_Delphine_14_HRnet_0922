import propTypes from 'prop-types';
import { useDispatch} from "react-redux"
import { sortIncreasing, sortDescending } from "../../feature/employeesTableSlice"
import "../../styles/table.css"

/**
* Sort table
* @component
*/
export default function SortTable ( { categories } ) {
  const dispatch = useDispatch()
    return (
      <div>
        <div className="chevronUp" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return dispatch(sortIncreasing(category))}}>▲</div>

        <div className="chevronDown" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return dispatch(sortDescending(category))}}>▲</div>
      </div>
    )
}
SortTable.propTypes = {
  categories: propTypes.string,
}
