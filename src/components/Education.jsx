import { DeleteButton } from "./Buttons"
import Input from "./Input"


function Education(props){
    const EducationComponents = []
    const data = props.data

    const deleteFunc = (e)=>{
        props.delete(e.target.id)
    }

    const changeData = (e)=>{
        const {name,value} = e.target
        const ownKey = e.target.id
        props.onChange(name,value,ownKey)
    }

    for (let i = 0; i < props.data.length; i++){
        let ownKey = data[i].key
        EducationComponents.push(
            <div className="container" key = {ownKey}>
                <Input
                    id = {ownKey}
                    type = "name"
                    name = "school"
                    placeholder = "College/University"
                    onChange={changeData}
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "subject"
                    placeholder = "Subject/Degree"
                    onChange={changeData}
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "result"
                    placeholder = "Grade"
                    onChange={changeData}
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "from"
                    placeholder = "From"
                    onChange={changeData}
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "to"
                    placeholder = "To"
                    onChange={changeData}
                />
                <DeleteButton id = {ownKey} onClick = {deleteFunc}/>
            </div>     
        )
    }
    return (<div className="educationContainer">{EducationComponents}</div>)
}

export default Education;