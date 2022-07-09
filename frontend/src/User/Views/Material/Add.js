import React,{useState,useEffect} from 'react'
import Breadcrumb from '../../../Admin/Components/Breadcrumb/BreadCrumb';
import axios from 'axios';
import Select from 'react-select';

const AddMaterial = () =>{
    var titles = [
        {name : 'Admin',link : '/admin'},
        {name : 'Material',link : '/material'},
        {name : 'Add Material',link : '/add'}
    ]
    const [init, setinit] = useState(true)

     const [uid,setUid] = useState();
     const [name,setName] = useState();
     const [tags,setTags] = useState();
     const [description,setDescription] = useState();
     const [images,setImages] = useState();
     const [type,setType] = useState();
     const [eventId,setEventId] = useState();
     const [document,setDocument] = useState();
     const [isPaid,setIsPaid] = useState();
     const [isApproved,setIsApproved] = useState();

     const [events,setEvents] = useState([]);
     const [users,setUsers] = useState([]);
     const [eventoptions,setEventoptions] = useState([]);
     const [useroptions,setUseroptions] = useState([]);
     const [formError,setFormError] = useState(false);


     useEffect(() => {
        axios.get('http://localhost:3000/event')
        .then(response=>{
            console.log(response.data);
            let data =[];
            response.data.events.map((item,index)=>{
                let event = {
                    value: item._id,
                    label: item.eventName
                }
                data.push(event);
            })
            setEventoptions(data);
        })

        axios.get('http://localhost:3000/users')
        .then(response=>{
            let data1 =[];
            response.data.Users.map((item,index)=>{
                let user = {
                    value: item._id,
                    label: item.name
                }
                data1.push(user);
            })
            setUseroptions(data1);
        })
    },[])

    const checknull = (value)=>{
        if(value.trim()==null || value.trim()==''){
            return false;
        }else{
            return true;
        }
    }

    const checkstring = (value)=>{
        if(typeof value != "string"){
            return false;
        }
    }

    const onValidate = () => {
        if(
            checknull(uid) && checknull(name) && checknull(tags) && 
            checknull(description) && checknull(type) &&
            checknull(isPaid) && checknull(isApproved)
        ){
            setFormValid(true);
            return true;
        }else{
            setFormValid(false);
            return false;
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setinit(false);
        if(onValidate){
            let material = {
                uid ,
                name,
                tags,
                description, 
                // images:[imageSchema],
                type,
                eventId,
                // document[documentSchema],
                isPaid,
                isApproved
            }
            axios.post('http://localhost:3000/material',material)
            .then(response=>{
                console.log(response);
                alert("Successfully Inserted")
            })
            .catch((error)=>{
                if (error.response) {
                    console.log(error.response.data);
                    setFormError(error.response.data.message);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
        }else{
            setError("Invalid");
        }
    }
    return(
        <>
            
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Reseach Papers</h5>
                    <hr />
                    <div class="row">
                        <div className="mb-3 col-md-8">
                        <form method="POST" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" className="form-label">Material Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                    onChange = {(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="eventId" className="form-label">Event</label>
                                <Select 
                                    options={eventoptions}
                                    className="basic-multi-select"
                                    name="eventId"
                                    onChange={(event)=>setEventId(event.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="type" className="form-label">Material Type</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type1" 
                                        onChange = {(e)=>setType(e.target.value)}
                                        value="Workshop" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Workshop</label>
                                </div>
                                    <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type2" 
                                        onChange = {(e)=>setType(e.target.value)}
                                        value="Research" 
                                    />
                                    <label className="form-check-label" htmlFor="prole1">Research</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="tags" className="form-label">Tags</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="tags"
                                    id="tags" 
                                    onChange = {(e)=>setTags(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="images" className="form-label">Images</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="images"
                                    id="images" 
                                    onChange = {(e)=>setImages(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="document" className="form-label">Main Documnet</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="document"
                                    id="document" 
                                    onChange = {(e)=>setDocument(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="isPaid" className="form-label">isPaid</label>
                                <select 
                                    type="text"
                                    className="form-select" 
                                    name="isPaid"
                                    id="isPaid" 
                                    onChange = {(e)=>setIsPaid(e.target.value)}
                                >
                                    <option defaultValue>Select is Paid</option>
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="isApproved" className="form-label">is Approved</label>
                                <select 
                                    type="text"
                                    className="form-select" 
                                    name="isApproved"
                                    id="isApproved" 
                                    onChange = {(e)=>setIsApproved(e.target.value)}
                                >
                                    <option defaultValue value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Declined">Declined</option>
                                </select>
                            </div>
                            <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="userId" className="form-label">userId</label>
                                <Select 
                                    options={useroptions}
                                    className="basic-multi-select"
                                    name="userId"
                                    onChange={(event)=>setUid(event.value)}
                                />
                            </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                        </div>
                        <div className="mb-3 col-md-4">                            
                            <img src="https://image.freepik.com/free-vector/marketers-with-magnifier-research-marketing-opportunities-chart-marketing-research-marketing-analysis-market-opportunities-problems-concept_335657-821.jpg" class="img-fluid" alt="img workshop"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}

export default AddMaterial;