import React from "react";
import startFirebase from "../firebaseConfig";
import {ref, set, get, update, remove, child} from "firebase/database";

export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state={
            db:'',
            username:'',
            fullname:'',
            phonenumber:'',
            dob:'',
            city:'',
            statee:'',
            pincode:''
        }

        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            db:startFirebase()
        });
    }

    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="container card mt-2">
                    <h1 className="text-center text-black heading"><u>Registration Form</u></h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label><b>Username : </b></label>
                    <input type='text' id='userbox' value={this.state.username}
                    onChange={e =>{this.setState({username: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b>Fullname : </b></label>
                    <input type='text' id='namebox' value={this.state.fullname}
                    onChange={e =>{this.setState({fullname: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b>Phonenumber : </b></label>
                    <input type='number' id='phonebox' value={this.state.phonenumber}
                    onChange={e =>{this.setState({phonenumber: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b>Date of Birth : </b></label>
                    <input type='date' id='datebox' value={this.state.dob}
                    onChange={e =>{this.setState({dob: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b>City : </b></label>
                    <input type='text' id='citybox' value={this.state.city}
                    onChange={e =>{this.setState({city: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b>State :</b> </label>
                    <input type='text' id='statebox' value={this.state.statee}
                    onChange={e =>{this.setState({statee: e.target.value});}} required></input>
                    <br/><br/>

                    <label><b> Pincode : </b></label>
                    <input type='number' id='pinbox' value={this.state.pincode}
                    onChange={e =>{this.setState({pincode: e.target.value});}} required></input>
                    <br/><br/>
                    <div>
                        <center>
                            <button className="btn btn-primary m-2" id="addBtn" onClick={this.interface}>Add Data</button>
                            <button className="btn btn-primary m-2" id="updateBtn" onClick={this.interface}>Update Data</button>
                            <button className="btn btn-primary m-2" id="deleteBtn" onClick={this.interface}>Delete Data</button>
                            <button className="btn btn-primary m-2" id="selectBtn" onClick={this.interface}>Get Data from DB</button>
                        </center>
                    </div>
                </div>
            </div>

            </>
        )
    }

    interface(event){
        const id=event.target.id;

        if(id==='addBtn'){
            this.addData();
        }

        if(id==='updateBtn'){
            this.updateData();
        }
        if(id==='deleteBtn'){
            this.deleteData();
        }
        if(id==='selectBtn'){
            this.selectData();
        }
    }

    getAllInputs(){
        return{
            username: this.state.username,
            name: this.state.fullname,
            phone: this.state.phonenumber,
            dob: this.state.dob,
            city: this.state.city,
            statee: this.state.statee,
            pincode: this.state.pincode
        }
    }
    addData(){
        const db = this.state.db;
        const data=this.getAllInputs();

        set(ref(db, 'Customer/'+data.username),
        {
            fullname:data.name,
            phonenumber:data.phone,
            dateofbirth:data.dob,
            city:data.city,
            statee:data.statee,
            pincode:data.pincode
        })
        .then(()=> {alert('Data added successfully!')})
        .catch((error)=>{alert(error)});
    }


    updateData(){
        const db = this.state.db;
        const data=this.getAllInputs();

        update(ref(db, 'Customer/'+data.username),
        {
            fullname:data.name,
            phonenumber:data.phone,
            dateofbirth:data.dob,
            city:data.city,
            statee:data.statee,
            pincode:data.pincode
        })
        .then(()=> {alert('Data updated successfully!')})
        .catch((error)=>{alert(error)});
    }


    deleteData(){
        const db = this.state.db;
        const username=this.getAllInputs().username;

        remove(ref(db, 'Customer/'+username))
        .then(()=> {alert('Data deleted successfully!')})
        .catch((error)=>{alert(error)});
    }


    selectData(){
        const dbref= ref(this.state.db);
        const username=this.getAllInputs().username;

        get(child(dbref, 'Customer/'+username)).then((snapshot) =>{
        if(snapshot.exists()){
            this.setState({
            fullname:snapshot.val().fullname,
            phonenumber:snapshot.val().phonenumber,
            dob:snapshot.val().dateofbirth,
            city:snapshot.val().city,
            statee:snapshot.val().statee,
            pincode:snapshot.val().pincode
            })
        }
    else{
        alert("No data found!");
    }
})
.catch((error)=>{alert(error)});  
    
    
    }
}