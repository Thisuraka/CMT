import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const WCForm = () =>{

	return(

		<div className="maincontainer">
		<div className="Head">
		 <div className="row ">
		   <div className="Left col-md-1  ">
			 <img src="./user.png" className="img-thumbnail rounded float-sm-start shadow-lg  mb-5 bg-light rounded rounded-circle " alt="UserImage" width="2000"/>
		   </div>
			 <div className="Form-head  col-md-8  p-3  d-flex justify-content-center">
				 <h2> Workshop Registration Form </h2>   
			 </div>
			 <div className="right  col-md-3  d-flex justify-content-end p-4 shadow-md">
			   <h3>User name</h3>
			 </div>
		 </div>
	   </div>
	   <div className="EventData row">
		 <div className="col-md-7 col-lg-6 ">
		   <form className="row g-1 ">
				 <div className="row ">
					 <div className="col-6-sm-12">
					   <label className="mb-2"> Event Title</label>
					   <input type="text" className="form-control mb-2" placeholder="Event Title " aria-label="Event Title"/>
					</div>
					 <div className="col-6-sm-12">
					   <label className="mb-2"> Event Name</label>
						<input type="text" className="form-control mb-2" placeholder="Event Name" aria-label="Event Name"/>
					  </div>  
					</div>
					 <div className="row ">
					   <div className="col-md-6 ">
						 <label className="mb-2"> Venue</label>
						 <input type="text" className="form-control mb-2" placeholder="Venue " aria-label="Venue"/>
					   </div>
					   <div className="col-md-6 ">
						 <label className="mb-2"> Organizer</label>
						 <input type="text" className="form-control mb-2" placeholder="Organizer" aria-label="Organizer"/>
					   </div>
					   <div className="col-12">
						 <label for="inputAddress" className="form-label mb-2">Address</label>
						 <input type="text" className="form-control mb-2" id="inputAddress" placeholder="Address"/>
					   </div>
					   <div className="col-md-6">
						 <label for="example-date-input" className="form-control-label mb-2">Date</label>
						 <input className="form-control" type="date"  id="date-input " placeholder="2021-11-23"/>
					   </div>
					   <div className="col-md-6">
						 <label for="example-time-input" className="form-control-label mb-2">Time</label>
						 <input className="form-control" type="time" value="12:00:00" id="time-input"/>     
					   </div>  
				   </div>
			   <div className="d-grid gap-2 col-6 mx-auto mt-4">
				  <input className="btn btn-primary " type="submit" value="Submit"/>
			 </div>   
		   </form>
		   </div>
			 <div className="col-md-5 col-lg-6 order-md-last ">
				 <img src="Workshop.jpg" className="img-fluid" alt="img workshop"/>
			 </div>     
		 </div>
	   <div >
		 <div className="Search_workshop d-flex justify-content-center mt-5 mb-3">
		   <h2>Search Workshop</h2>
		   </div>
			 <div className="search_head row">
				 <div className="col-5">
				   <label for="example-date-input" className="form-control-label mb-2 ms-2">Selec the Date</label>
				   <input className="form-control ms-2 shadow-sm" type="date"  id="date-input " placeholder="2021-11-23"/>                        
				 </div>
				 <div className="col-5">
					 <label className="mb-2">Search Venue</label>
					 <input type="text" className="form-control mb-2 shadow-sm" placeholder=" Search Venue " aria-label="Venue"/>                         
				 </div>
				 <div className="col-1 g-4 ms-3 ">
				   <button className="btn btn-info mt-2 ms-4" type="button">Search</button>
				 </div>
			 </div>
		   </div>
		   <div className="container mt-2 mb-3">
			 <div className="row justify-content-center">
			   <div className="col-lg-11">
				 <div className="card shadow-lg">
				   <div className="table-responsive">
					 <table className="table  mt-2 ">
						 <thead>
						   <tr>
							 <th scope="col">ID</th>
							 <th scope="col">Event Title</th>
							 <th scope="col">Event Name</th>
							 <th scope="col">Venue</th>
							 <th scope="col">Organizer</th>
							 <th scope="col">Address</th>
							 <th scope="col">Date</th>
							 <th scope="col">Time</th>
							 <th scope="col">Remove</th>
						   </tr>
						 </thead>
						 <tbody>
						   <tr>
							 <th scope="row">1</th>
							 <td>Main conferrence </td>
							 <td>ICAF</td>
							 <td>SLIIT</td>
							 <td>SLIIT</td>
							 <td>SLIIT,Malabe</td>
							 <td>2021/07/20</td>
							 <td>10:30 PM</td>
							 <td><button type="button" className="btn-close d-flex justify-content-center" aria-label="Close"></button></td>
						   </tr>
						   <tr>
							 <th scope="row">2</th>                      
							 <td>Main conferrence </td>
							 <td>ICAF</td>
							 <td>SLIIT</td>
							 <td>SLIIT</td>
							 <td>SLIIT,Malabe</td>
							 <td>2021/07/20</td>
							 <td>10:30 PM</td>
							 <td><button type="button" className="btn-close d-flex justify-content-center" aria-label="Close"></button></td>
						   </tr>
						   <tr>
							 <th scope="row">3</th>
							 <td>Main conferrence </td>
							 <td>ICAF</td>
							 <td>SLIIT</td>
							 <td>SLIIT</td>
							 <td>SLIIT,Malabe</td>
							 <td>2021/07/20</td>
							 <td>10:30 PM</td>
							 <td><button type="button" className="btn-close d-flex justify-content-center" aria-label="Close"></button></td>
						   </tr>
						 </tbody>
					   </table>
				   </div>
				 </div>
			   </div>
			 </div>
		   </div>
	   </div>  
 
	);

}
export default WCForm