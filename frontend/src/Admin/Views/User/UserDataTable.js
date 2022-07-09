import React from "react";

const UserDataTable = ({ data }) => {
  var editUrl = (obj) => {
    return `/admin/user/${obj}/edit`;
  };

  return (
    <tbody>
      {data.map((user, i) => (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <a href={editUrl(user._id)}>
              <i className="fas fa-pen"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserDataTable;
