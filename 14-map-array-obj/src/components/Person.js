import React from "react";

const Person = (props) => {
  const { id, firstName, lastName, email, img } = props;
  return (
    <div className="person">
      <p>{id}</p>
      <img src={img} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Person;
