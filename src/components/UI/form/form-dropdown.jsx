import { useState } from "react";
import { useDispatch } from "react-redux";
import chevronDown from "../../../assets/chevronDown.png";
import chevronUp from "../../../assets/chevronUp.png";
import FormInput from "./form-input";

import { selectItem } from "../../../utils/postEmployees";

import "../../../styles/create.css"

/**
 * React Component function : Dropdown
 * @param props Component props
 * @param props.contents Lodge dropdown contents
 */
export default function Dropdown({ label, name, value, handle, list}) {

  const dispatch = useDispatch();
  const [ unfolded, setUnfolded ] = useState(false)
  const chevron = unfolded ? chevronUp : chevronDown;
  const handleFolded = () => {setUnfolded(!unfolded)};
  
  const select = (e) => {
    handleFolded();
    return dispatch(selectItem({title: e.target.title, textContent: e.target.textContent}))
  }
 
  const contentList = () => { 
    console.log(list);
      return (
       <p className="dropdown-content" name={name}> 
        {list.map((item, index) => (
            <li key={index} title={name} onClick={select}>
              {item.name}
            </li>))}
        </p>)
  };

    return (
      <div className="dropdown">
        <div className={unfolded ? "dropdown-container folded" : "dropdown-container" }  onClick={handleFolded}>
          <FormInput label={label} name={name} type="text" value={value} handle={handle} className={unfolded ? "form-control unfolded" : "form-control" }/>
          {unfolded && contentList()} 
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


