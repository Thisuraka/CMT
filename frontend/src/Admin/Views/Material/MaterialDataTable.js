import React from "react";

const MaterialDataTable = ({ data }) => {
  var editUrl = (obj) => {
    return `/admin/material/${obj}/edit`;
  };
  var viewUrl = (obj) => {
    return `/admin/material/${obj}`;
  };
  var deleteUrl = (obj) => {
    return `/admin/material/${obj}/edit`;
  };
  var deletemodal = (obj) => {
    return `#deleteModal${obj}`;
  };
  return (
    <tbody>
      {data.map((material, i) => (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{(material.name)?material.name:''}</td>
          <td>{(material.type)?material.type:''}</td>
          <td>{(material.eventId)?material.eventId.eventName:''}</td>
          <td>{(material.uid)?material.uid.name:''}</td>
          <td>
            <a href={viewUrl(material._id)} className="me-3">
              <i className="far fa-eye"></i>
            </a>
            <a href={editUrl(material._id)} className="me-3">
              <i className="fas fa-pen"></i>
            </a>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target={deletemodal(material._id)}
            >
              <i className="far fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MaterialDataTable;
