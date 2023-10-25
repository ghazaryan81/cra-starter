import React from "react";
import useFormInput from "./Some";

function Form() {
 const name = useFormInput("");

 return (
  <div>
   <input type="text" {...name} />
  </div>
 );
}
