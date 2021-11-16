import React, { useEffect, useState } from "react";

export default function User() {
  const [allUser, setAllUser] = useState([]);
  function getData() {
    const localStorageData = localStorage.getItem("AuthUsers");
    let userData = JSON.parse(localStorageData);
    setAllUser(userData);
    document.title = "Auth - all users"
  }
  useEffect(() => {
      getData()
  }, [])

  return (
    <div className="user-container">
      <h3 className="text-center fw-bold text-uppercase my-3">
        all the user are here:
      </h3>
     <div className="sss">
     <table className ="table table-striped">
        <thead>
          <tr className="bg-success text-light text-uppercase"> 
            <th scope="col">s.n.</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">country</th>
          </tr>
        </thead>
        <tbody >
          {allUser ? allUser.map((user,index) => {
            return (
              <tr key={index+1}>
              <td>{index+1}.</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phonenumber}</td>
              <td>{user.country}</td>
            </tr>
            )
          }) :<tr > 
                <td colSpan="5" >
                  no user found plz create some and come back
                </td>
             </tr>}
        </tbody>
      </table>
     </div>
    </div>
  );
}
