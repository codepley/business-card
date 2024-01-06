import { useState } from "react";

/* eslint-disable react/prop-types */
const AddDetail = ({ userData, setUserData }) => {
  const [tempData, setTempData] = useState(userData);
  const [interest, setInterest] = useState("");

  function handleChange(e) {
    console.log(e.target.name, e.target.value);

    setTempData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function removeInterest(item) {
    const int = tempData.interest.filter((i) => i !== item);
    setTempData((prev) => ({
      ...prev,
      interest: int,
    }));
  }

  function addInterest() {
    const int = tempData.interest;

    if (int.length >= 6) {
      alert(`length ${int.length} - only 6 allowed`);
      setInterest("")
    } else {
      int.push(interest);
      console.log(int);
      setTempData((prev) => ({
        ...prev,
        interest: int,
      }));
      setInterest("");
    }
  }

  return (
    <div>
      <h1>Add Your Card Details</h1>
      <form>
        <input
          type="text"
          value={tempData.name}
          name="name"
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          value={tempData.description}
          name="description"
          onChange={handleChange}
          placeholder="description"
        />
        <div>
          <div>
            {tempData.interest.map((item, index) => {
              return (
                <span
                  className="bg-gray-400 py-1 px-2 rounded-xl mr-1"
                  key={index}
                >
                  {item}{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => removeInterest(item)}
                  >
                    X
                  </span>
                </span>
              );
            })}
          </div>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="add interest"
          />
          <button type="button" onClick={addInterest}>
            Add interest
          </button>
        </div>
        <input type="text" placeholder="githubLink" />
        <input type="text" placeholder="linkedinLink" />
        <input type="text" placeholder="twitterLink" />
        <button type="button" onClick={() => setUserData(tempData)}>
          Add to card
        </button>
      </form>
    </div>
  );
};
export default AddDetail;
