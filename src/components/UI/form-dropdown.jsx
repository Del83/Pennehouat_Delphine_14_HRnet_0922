import { useState } from "react";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";

import FormInput from "./form-input";

import "../../styles/create.css"

/**
 * React Component function : Dropdown
 * @param props Component props
 * @param props.contents Lodge dropdown contents
 */
export default function Dropdown({ contents, labelFor, select, setValue, register }) {


    const [unfolded, setUnfolded] = useState(false);
    const chevron = unfolded ? chevronDown : chevronUp;
    const handleFolded = () => { setUnfolded(!unfolded)};
    const content = () => { return <select {...register("category")} className="dropdown-content">{contents}</select> };
      
      return (
        <div className="dropdown" >
          <div className={unfolded ? "dropdown-container folded" : "dropdown-container" }  onClick={handleFolded}>
             {unfolded && content()}
          </div>
         
        </div>
      );

}





// export default function Dropdown({ contents, labelFor, select, setValue }) {

//   const [unfolded, setUnfolded] = useState(false);
//   const chevron = unfolded ? chevronDown : chevronUp;
//   const handleFolded = () => { setUnfolded(!unfolded)};
//   const content = () => { return <p className="dropdown-content">{contents}</p> };
    
//     return (
//       <div className="dropdown">
//         <div className={unfolded ? "dropdown-container folded" : "dropdown-container" }  onClick={handleFolded}>
//           <FormInput labelFor={labelFor} value={select} setValue={setValue} className={unfolded ? "form-control unfolded" : "form-control" }/>
//           <img className="chevron" src={chevron} alt="chevron menu déroulant" />
//         </div>
//         {unfolded && content()}
//       </div>
//     );

// }