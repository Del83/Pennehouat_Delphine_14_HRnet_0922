
import { useState } from "react";
import { useDispatch } from "react-redux";
import chevronDown from "../../../assets/chevronDown.png";
import chevronUp from "../../../assets/chevronUp.png";
import InputText from "./input-text";

import { selectItem } from "../../../feature/createEmployeeSlice";

import "../../../styles/create.css"

/**
 * React Component function : Dropdown
 * @param props Component props
 * @param props.contents Lodge dropdown contents
 */
export default function InputDropdown({ label, name, list, value, valid }) {

  const dispatch = useDispatch();
  const [ unfolded, setUnfolded ] = useState(false)
  //const [ valueSelect, setValueSelect ] = useState("")
  const chevron = unfolded ? chevronUp : chevronDown;
  const handleFolded = () => {setUnfolded(!unfolded)};

  
  const select = (e) => {
    handleFolded();
    //return setValueSelect(e.target.value)
    return dispatch(selectItem({title: e.target.title, textContent: e.target.textContent}))
  }
 

    return (
      <div className="dropdown">
        <div className={unfolded ? "dropdown-container folded" : "dropdown-container" }  onClick={handleFolded}>
          <InputText value={value} autocomplete="off" label={label} name={name} valid={valid} className={unfolded ? "form-control unfolded" : "form-control" }/>
          {unfolded && (
            <p className="dropdown-content" name={name}> 
            {list.map((item, index) => (
                <li key={index} title={name} onClick={select}>
                  {item.name}
                </li>))}
            </p>)}    
          <img className="chevron" src={chevron} alt="drop-down menu chevron" width="20" height="10"/>
        </div>
      </div>
    );

}




// export default function Dropdown({ contents, labelFor, select, setValue, register }) {

//     const [unfolded, setUnfolded] = useState(false);
//     const chevron = unfolded ? chevronDown : chevronUp;
//     const handleFolded = () => { setUnfolded(!unfolded)};
//     const content = () => { return <select {...register("category")} className="dropdown-content">{contents}</select> };
      
//       return (
//         <div className="dropdown" >
//           <div className={unfolded ? "dropdown-container folded" : "dropdown-container" }  onClick={handleFolded}>
//              {unfolded && content()}
//           </div>
         
//         </div>
//       );

// }


