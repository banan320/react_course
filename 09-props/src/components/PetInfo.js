function PetInfo(props) {
  const { animal, age } = props;
  console.log(props);
  return (
    <div>
      <h1>
        My {props.animal} is {props.age} years old
      </h1>
      <h3>
        My {animal} is {age} years old
      </h3>
    </div>
  );
}

export default PetInfo;
