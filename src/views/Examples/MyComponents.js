import React from "react";
import ChildComponents from "./ChildComponents.js"
import FormComponent from "./FormComponent.js";
import "./demo.scss"

class MyComponents extends React.Component {


    state = {
        arrJob: [
            {
                id: "1",
                nameJob: "dev",
                salary: "100"
            },
            {
                id: "2",
                nameJob: "test",
                salary: "50"
            },
            {
                id: "3",
                nameJob: "devops",
                salary: "120"
            }
        ]
    }

    addNewJob = (job) => {
        console.log('check joi input arrow function: ', job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteJob = (job) => {
        console.log('check joi input arrow function: ', job)
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <FormComponent
                    addNewJob={this.addNewJob}
                />
                <br />
                <ChildComponents
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponents;


