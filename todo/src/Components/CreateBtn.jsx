import React from "react"
import { useHistory } from "react-router-dom"
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

 const CreateBtn=()=>{

    const  history = useHistory(); 

    const moveToCreate = () => {
        history.push("/create")
    }


    return (<div className="addBtn">
    <Fab color="primary" aria-label="add" onClick={moveToCreate}>
        <AddIcon />
    </Fab>
</div>)
}

export { CreateBtn }