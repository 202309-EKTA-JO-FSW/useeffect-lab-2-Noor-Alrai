import React ,{useState} from "react";
export default function Form({setUserName}) {
  let[input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value)
    if(input == ""){
      setUserName("")
    }
  
    setUserName(input);

   
  };
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" value={input} onChange={handleInputChange} />
      </div>
    </form>
  );
}
