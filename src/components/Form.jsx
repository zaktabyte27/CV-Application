import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import { AddButton } from "./Buttons";
import Education from "./Education";
import Experience from "./Experience";
import CV from "./CV";

function Form(){

    const [personalData,updatePersonalData] = useState({
        fName: "",
        sName: "",
        email: "",
        title: "",
        address: "",
        phone: "",
        description: ""
    })

    const [experienceData,updateExperienceData] = useState([])
    const [educationData,updateEducationData] = useState([])

    const removeExperienceData = (key)=>{
        let newData = [...experienceData]
        for (let i = 0; i < newData.length; i++){
            if (newData[i].key == key){
                newData.splice(i,1)
                break
            }   
        }
        updateExperienceData(newData)
    }

    const addExperienceData = () =>{
        const newExperienceData = {
            key: generateRandomString(),
            employer:"",
            position:"",
            location:"",
            from:"",
            to:"",
        }
        let newData = [...experienceData]
        newData.push(newExperienceData)
        updateExperienceData(newData)
    }

    const changeExperienceData = (key,data,objKey)=>{
        let newData = [...experienceData]
        let objToChange = null
        for (let i = 0; i < newData.length; i++){
            if (newData[i].key == objKey){
                objToChange = newData[i]
                objToChange[key] = data
                newData[i] = objToChange
                break
            }   
        }
        updateExperienceData(newData)
    }

    const removeEducationData = (key) =>{
        let newData = [...educationData]
        for (let i = 0; i < newData.length; i++){
            if (newData[i].key == key){
                newData.splice(i,1)
                break
            }   
        }
        updateEducationData(newData)
    }
    const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

    const addEducationData = () =>{
        const newEducationData = {
            key: generateRandomString(),
            school:"",
            subject:"",
            result:"",
            from:"",
            to:"",
        }
        let newData = [...educationData]
        newData.push(newEducationData)
        updateEducationData(newData)
    }

    const changePersonalData = (key,data)=>{
        updatePersonalData({...personalData,[key]:data})
    }

    const changeEducationData = (key,data,objKey)=>{
        let newData = [...educationData]
        let objToChange = null
        for (let i = 0; i < newData.length; i++){
            if (newData[i].key == objKey){
                objToChange = newData[i]
                objToChange[key] = data
                newData[i] = objToChange
                break
            }   
        }
        updateEducationData(newData)
    }

    return (
        <div className="BigContainer">
            <div className="formContainer">
                <div className="title">Personal Information</div>
                <div className="PIBox">
                    <PersonalInfo onChange = {changePersonalData} />
                </div>
                <div className="title">Education</div>
                <div className="EContainer">
                    <Education data = {educationData} delete = {removeEducationData} onChange={changeEducationData}/>
                    <AddButton onClick = {addEducationData}/>
                </div>
                <div className="title">Experience</div>
                <div className = "XContainer">
                    <Experience data = {experienceData} delete = {removeExperienceData} onChange={changeExperienceData}/>
                    <AddButton onClick = {addExperienceData}/>
                </div>
            </div>
            <CV pData = {personalData} eData = {educationData} xData = {experienceData}/>
        </div>
    )  
}

export default Form;