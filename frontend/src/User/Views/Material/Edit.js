import React from 'react'


const EditMaterial = () =>{
    var titles = [
        {
            name : 'Admin',
            link : '/admin'
        },
        {
            name : 'Material',
            link : '/material'
        },
        {
            name : 'Edit',
            link : '/edit'
        }
    ]
        
    return(
        <>
            
            <hr />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Edit Material</h5>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="name" className="form-label">Material Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="name"
                                    id="name" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="eventId" className="form-label">Event</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="eventId"
                                    id="eventId" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="type" className="form-label">Material Type</label>
                                <br />
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type1" 
                                        value="Workshop" 
                                    />
                                    <label class="form-check-label" for="prole1">Workshop</label>
                                </div>
                                    <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input"
                                        type="radio" 
                                        name="type" 
                                        id="type2" 
                                        value="Research" 
                                    />
                                    <label class="form-check-label" for="prole1">Research</label>
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="tags" className="form-label">Tags</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="tags"
                                    id="tags" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="images" className="form-label">Images</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="images"
                                    id="images" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="document" className="form-label">Main Documnet</label>
                                <input 
                                    type="file"
                                    className="form-control" 
                                    name="document"
                                    id="document" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="isPaid" className="form-label">isPaid</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="isPaid"
                                    id="isPaid" 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="userId" className="form-label">userId</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    name="userId"
                                    id="userId" 
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default EditMaterial;