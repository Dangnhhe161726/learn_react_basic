import React from "react"

class FormComponent extends React.Component {

    state = {
        nameJob: '',
        salary: ''
    }

    handelOnChangeNameJob = (event) => {
        this.setState({
            nameJob: event.target.value
        })
    }

    handelOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handelSubmit = (event) => {
        event.preventDefault()

        console.log("===> check input submit: ", this.state)
        if (!this.state.nameJob || !this.state.salary) {
            alert('Please enter information of job')
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            nameJob: this.state.nameJob,
            salary: this.state.salary
        })

        this.setState({
            nameJob: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="nameJob">Name job: </label>
                    <input name="nameJob" value={this.state.nameJob} onChange={(event) => this.handelOnChangeNameJob(event)} />
                    <br />
                    <label htmlFor="salary">Salary: </label>
                    <input name="salary" value={this.state.salary} onChange={(event) => this.handelOnChangeSalary(event)} />
                    <br />
                    <input className="btn" type="button" value="submit" onClick={(event) => this.handelSubmit(event)} />
                </form>
            </>
        )
    }
}

export default FormComponent