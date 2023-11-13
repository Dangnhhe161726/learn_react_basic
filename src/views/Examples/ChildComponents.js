import React from "react";


class ChildComponents extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHideTable = () => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            }
        )
    }

    handleOnclickDelete = (job) => {
        console.log('==> job delete: ', job)
        let check = window.confirm('Do you want to delete the job')
        if (check) {
            this.props.deleteJob(job)
        }
    }


    render() {
        let { arrJob } = this.props
        let showJobs = this.state.showJobs


        return (
            <>
                <div className="list-jobs">
                    {showJobs === false ?
                        <div>
                            <button className="btn" onClick={() => this.handleShowHideTable()}>Show table</button>
                        </div>
                        :
                        <>
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name job</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arrJob.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.nameJob}</td>
                                                    <td>{item.salary} $</td>
                                                    <td>
                                                        <button onClick={() => this.handleOnclickDelete(item)}>Delete</button>
                                                        <button>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn" onClick={() => this.handleShowHideTable()}>Hide table</button>
                            </div>
                        </>
                    }
                </div>
            </>
        );
    }
}

export default ChildComponents;