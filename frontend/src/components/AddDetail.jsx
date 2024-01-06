import { useState } from "react";

/* eslint-disable react/prop-types */
const AddDetail = ({ userData, setUserData }) => {
  const [tempData, setTempData] = useState(userData);
  const [interest, setInterest] = useState("");
  const [skill, setSkill] = useState("");

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

  function removeSkill(item) {
    const int = tempData.skills.filter((i) => i !== item);
    setTempData((prev) => ({
      ...prev,
      skills: int,
    }));
  }

  function addInterest() {
    const int = tempData.interest;

    if (int.length >= 6) {
      alert(`length ${int.length} - only 6 allowed`);
      setInterest("");
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

  function addSkill() {
    const int = tempData.skills;

    if (int.length >= 6) {
      alert(`length ${int.length} - only 6 allowed`);
      setSkill("");
    } else {
      int.push(skill);
      console.log(int);
      setTempData((prev) => ({
        ...prev,
        skills: int,
      }));
      setSkill("");
    }
  }

  return (
    <div className="w-[40%]">
      <div className="h-full flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold mt-4 text-xl">Add Your Card Details</h1>
        <form className="flex flex-col gap-2 w-[80%]">
          <input
            className="p-2"
            type="text"
            value={tempData.name}
            name="name"
            onChange={handleChange}
            placeholder="name"
          />
          <input
            className="p-2"
            type="text"
            value={tempData.description}
            name="description"
            onChange={handleChange}
            placeholder="description"
          />

          <div className="w-full flex flex-col gap-1">
            <p>Add Interest</p>
            <div className="w-full flex flex-wrap p-1 gap-1">
              {tempData.interest.map((item, index) => {
                return (
                  <span
                    className="bg-gray-400 py-1 px-3 rounded-2xl"
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
            <div className="flex gap-1">
              <input
                className="flex-1 p-2"
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="add interest"
              />
              <button type="button" onClick={addInterest}>
                Add interest
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <p>Add Skills</p>
            <div className="w-full flex flex-wrap p-1 gap-1">
              {tempData.skills.map((item, index) => {
                return (
                  <span
                    className="bg-gray-400 py-1 px-3 rounded-2xl"
                    key={index}
                  >
                    {item}{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => removeSkill(item)}
                    >
                      X
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="flex gap-1">
              <input
                className="flex-1 p-2"
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="add interest"
              />
              <button type="button" onClick={addSkill}>
                Add skill
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-1">
            <label htmlFor="github">Github</label>
            <input
              className="p-2 w-full"
              id="github"
              value={userData.githubLink}
              type="text"
              placeholder="githubLink"
            />
          </div>
          <div className="flex justify-center items-center gap-1">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              className="p-2 w-full"
              id="linkedin"
              value={userData.linkedinLink}
              type="text"
              placeholder="linkedinLink"
            />
          </div>
          <div className="flex justify-center items-center gap-1">
            <label htmlFor="github">Twitter</label>
            <input
              className="p-2 w-full"
              id="twitter"
              value={userData.twitterLink}
              type="text"
              placeholder="twitterLink"
            />
          </div>
          <button type="button" onClick={() => setUserData(tempData)}>
            Add to card
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddDetail;
