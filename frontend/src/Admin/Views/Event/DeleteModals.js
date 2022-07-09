import React,{useState} from "react";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
import Loader from "../../Components/Loader/Loader";
import "core-js/stable";
import "regenerator-runtime/runtime"

const DeleteModals = ({ data }) => {
  var deletemodalid = (obj) => {
    return `deleteModal${obj}`;
  };
  const [loading,setloading] = useState(false);
  const onDeleteHandle = async(e,obj) =>{
    e.preventDefault();
    setloading(true);
    const token = getToken();
    await axios({
      method: "delete",
      url: `http://localhost:3000/event/${obj}`,
      headers: { authorization: token },
    })
    // axios.delete(`http://localhost:3000/event/${obj}`)
    .then(response=>{
        console.log(response);
        location.reload();
    })
    .catch(error=>{
      console.log(error.message);
    })
    setloading(false);
  }

  return (
    data.map((event, i) => (
      <div
      className="modal fade"
      key={i}
      id={deletemodalid(event._id)}
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
      >
          {loading && <Loader />} 
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete event
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are You Sure You need to delete This event</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" onClick={e=>{onDeleteHandle(e,event._id)}} className="btn btn-danger">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
  );
};

export default DeleteModals;













