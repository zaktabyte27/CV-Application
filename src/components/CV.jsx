function CV(props){
    const personalData = props.pData
    const educationData = props.eData
    const experienceData = props.xData

    const experienceComponents = []
    const educationComponents = []

    console.log(experienceData)

    for (let i = 0; i < educationData.length; i++){
        let component = educationData[i]
        educationComponents.push(
            <div className="Box">
                <div>School: {component.school}</div>
                <div>Subject: {component.subject}</div>
                <div>Result: {component.result}</div>
                <div>From: {component.from}</div>
                <div>To: {component.to}</div>
            </div>
        )
    }
    
    for (let i = 0; i < experienceData.length; i++){
        let component = experienceData[i]
        experienceComponents.push(
            <div className="Box">
                <div>Employer: {component.employer}</div>
                <div>Position: {component.position}</div>
                <div>Location: {component.location}</div>
                <div>From: {component.from}</div>
                <div>To: {component.to}</div>
            </div>
        )
    }

    return (
        <div className="document">
            <div className="personal">
                <div>First Name: {personalData.fName}</div>
                <div>Surname: {personalData.sName}</div>
                <div>Email: {personalData.email}</div>
                <div>Title: {personalData.title}</div>
                <div>Address: {personalData.address}</div>
                <div>Phone: {personalData.phone}</div>
                <div>Description: {personalData.description}</div>
            </div>
            <div className="CV">
                <div className="education">{educationComponents}</div>
                <div className="experience">{experienceComponents}</div>
            </div>
        </div>
    )
}

export default CV;