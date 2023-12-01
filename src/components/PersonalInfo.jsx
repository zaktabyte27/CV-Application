import Input from "./Input"
import { useState } from "react"


function PersonalInfo(props){
    const changeData = (e)=>{
        const {name,value} = e.target
        props.onChange(name,value)
    }
    return (
        <form>
            <Input
                type = "text"
                name = "fName"
                placeholder = "First name"
                onChange = {changeData}
                
            />
            <Input
                type = "text"
                name = "sName"
                placeholder = "Surname"
                onChange = {changeData}
            />
            <Input
                type = "email"
                name = "email"
                placeholder = "Email"
                onChange = {changeData}
            />
            <Input
                type="text"
                name="title"
                placeholder="Title"
                onChange = {changeData}
            />
            <Input
                type="text"
                name="address"
                placeholder="Address"
                onChange = {changeData}
            />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange = {changeData}
        />
        <Input
          type="textarea"
          name="description"
          placeholder="Description"
          onChange = {changeData}
        />
        </form>
    )
}

export default PersonalInfo