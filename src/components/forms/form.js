import React, {Component} from 'react';

const initialState = {
    name: '',
    email: '',
    password:'',
    bio:'',
    country: '',
    gender: '',
    skills: []
}

class Form extends Component {

    constructor(){
        super();
        this.myForm = React.createRef();

    }

    state = initialState;

    changeHandeler = (event) => {

        if(event.target.type === 'checkbox' ){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter( skill => skill !== event.target.value )
                })
            }
        }else{
            this.setState({
                [event.target.name] : event.target.value
              
            })
        }
        
    }

    submitHandeler = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.myForm.current.reset();
        this.setState({
            ...initialState
        })
    }

    render(){
        return(
            <form ref={this.myForm} onSubmit={this.submitHandeler}>  
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.changeHandeler}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email"  
                        name="email"
                        className="form-control" 
                        id="email" value={this.state.email}
                        onChange={this.changeHandeler}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        id="inputPassword" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandeler}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Bio" className="col-sm-2 col-form-label">Bio</label>
                    <div className="col-sm-10">
                    <textarea 
                        name="bio"
                        className="form-control" 
                        id="bio" 
                        placeholder="Bio"
                        value={this.state.bio}
                        onChange={this.changeHandeler}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Country" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <select 
                        onChange={this.changeHandeler}
                        className="form-control" name="country" id="country" >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Australia">Australia</option>
                            <option value="New Zeland">New Zeland</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  onChange={this.changeHandeler} name="gender" id="male" value="Male" />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  onChange={this.changeHandeler} name="gender" id="female" value="Female" />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Skills" className="col-sm-2 col-form-label">Skills</label>
                    <div className="col-sm-10">
                        <input className="form-check-input"
                        onChange={this.changeHandeler.bind(this)}
                        name="skills" type="checkbox" value="Javascript" id="javascript" />
                        <label className="form-check-label" htmlFor="javascript" >Javascript</label>
                    </div>
                </div>
                <div className="form-group row">
                <label htmlFor="Skills" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <input 
                        onChange={this.changeHandeler.bind(this)}
                        className="form-check-input" name="skills" type="checkbox" value="React" id="react" />
                        <label className="form-check-label" htmlFor="react" >React</label>
                    </div>
                </div>

                <div className="form-group row">
                <label htmlFor="Skills" className="col-sm-2 col-form-label"></label>
                    <div 
                    onChange={this.changeHandeler.bind(this)}
                    className="col-sm-10">
                        <input className="form-check-input" name="skills" type="checkbox" value="Angular" id="angular" />
                        <label className="form-check-label" htmlFor="react" >Angular</label>
                    </div>
                </div>

                <input type="submit" className="btn btn-primary"  value="Submit" />
            </form>
        )
    }
}

export default Form