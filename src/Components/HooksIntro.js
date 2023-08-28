import React,{ useState } from "react";
function HooksIntro()
{
    const [changetxt,setChangetxt] = useState("Enter here");
    const handleInput = (event) => {
        event.preventDefault();
        setChangetxt(event.target.value);
 
    }
    const changeCase = (event) => {
        event.preventDefault();
        setChangetxt(changetxt.toUpperCase());
    }
    return(
        <div className="btn btn-primary">
            <form onSubmit={changeCase} name="upform">
            <input
          type="text"
          value={changetxt}
          onChange={handleInput}
        />
            <input type="submit" name="submit" className="btn btn-danger" value={"Change to Upercase"} />
            </form>
        </div>
    );
}
export default HooksIntro;