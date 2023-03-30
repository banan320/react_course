function PetInfo(props) {
  const { animal, age, hasPet } = props;

  return (
    <div>
      {hasPet ? (
        <h1>
          My {animal} is {age} years old
        </h1>
      ) : (
        <h2>I dont have an animal</h2>
      )}
    </div>
  );
}

export default PetInfo;
