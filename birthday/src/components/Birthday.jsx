const Birthday = ({name, age, image}) => {
    return (
        <div className="birthdayElement">
            <img src={image} alt="" />
            <div className="birthdayInfo">
                <h3>{name}</h3>
                <p>age: {age}</p>
            </div>
        </div>
    );
}

export default Birthday;