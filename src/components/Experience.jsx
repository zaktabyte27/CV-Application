import { DeleteButton } from "./Buttons"
import Input from "./Input"


function Experience(props){
    const ExperienceComponents = []
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
        ExperienceComponents.push(
            <div className="container" key = {ownKey}>
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "employer"
                    placeholder = "Employer"
                    onChange={changeData}
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "position"
                    onChange={changeData}
                    placeholder = "Position"
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "location"
                    onChange={changeData}
                    placeholder = "Location"
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "from"
                    onChange={changeData}
                    placeholder = "From"
                />
                <Input
                    id = {ownKey}
                    type = "text"
                    name = "to"
                    onChange={changeData}
                    placeholder = "To"
                />
                <DeleteButton id = {ownKey} onClick = {deleteFunc}/>
            </div>     
        )
    }
    return (<div className="experienceContainer">{ExperienceComponents}</div>)
}

export default Experience;