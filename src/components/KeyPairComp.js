import React from 'react'
const INITIAL_STATE = {
    listOfkey: [
        { id: 1, keyname: "key1", value: "" }
    ]
  }
class KeyPairComp extends React.Component {
    constructor (props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    handleInput = (event) => {
        const getId = parseInt(event.target.id);
        event.preventDefault();
        if (event.target.value === '' && this.state.listOfkey.length > 1) {
            if ( this.state.listOfkey.length-1 === getId && this.state.listOfkey[this.state.listOfkey.length-1].value === "") {
                this.addField(event, true);
            } else {
                this.addField(event);
            }
        } else if (event.target.value === '' && this.state.listOfkey.length === 1) {
            this.setState({ ...INITIAL_STATE });
        } else {
            this.addField(event);
        } 
    }

    addField = (event, getVal = false) => {
        const getId = parseInt(event.target.id);
        const index = this.state.listOfkey.findIndex(x=> x.id === getId);
        this.setState({
            listOfkey: [
               ...this.state.listOfkey.slice(0,index),
               Object.assign({}, this.state.listOfkey[index], {value: event.target.value}),
               ...this.state.listOfkey.slice(index+1)
            ]
          }, () => {
              if (getVal) {
                this.state.listOfkey.splice(this.state.listOfkey.length-1, 1);
                this.setState({ listOfkey: this.state.listOfkey });  
              }
          }); 
        if (typeof this.state.listOfkey[getId] === "undefined" && event.target.value !== "") {
            const addId = this.state.listOfkey.length + 1;
            const data = { id: addId, keyname: "key" + addId, value: ""}
            this.setState(prevState => ({
                listOfkey: [...prevState.listOfkey, data]
            }))
        }
    }

    render() {
        return (
            <>
                {/* // this.state.listOfkey.map(val => (
                    // <div className="form-group" key={val.id}>
                    //     <label htmlFor={val.keyname}>{val.keyname}</label>
                    //     <input type="text" className="form-control" name={val.keyname} id={val.id}
                    //         value={val.value} onChange={(event) => this.handleInput(event)}/>
                    // </div> */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> key </th>
                                <th> value </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listOfkey.map(val => (
                                        <tr className="form-group" key={val.id}>
                                            <td><label htmlFor={val.keyname}>{val.keyname}</label></td>
                                            <td><input type="text" className="form-control" name={val.keyname} id={val.id}
                                                value={val.value} onChange={(event) => this.handleInput(event)}/></td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                {/* ) */}
            </>
        )
    }
}

export default KeyPairComp
