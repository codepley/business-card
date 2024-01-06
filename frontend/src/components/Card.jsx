/* eslint-disable react/prop-types */
const Card = ({ userData }) => {
  return (
    <div className="h-screen w-full md:w-[70%] bg-pink-400 flex items-center justify-center">
      <div className="h-[80%] sm:w-[90%] lg:w-[50%] md:w-[70%] w-[90%] bg-white rounded-xl">
        <div className="h-[40%] bg-black rounded-t-xl text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p>{userData.description}</p>
        </div>
        <div className="h-[60%] bg-white flex flex-col rounded-b-xl">
            <div className="h-[40%] p-5">
               <h2 className="text-xl font-bold">Interest:</h2>
               <ul className="px-4 grid grid-cols-2">
                  {userData.interest.map((item, index) => {
                     return <li className="" key={index}> - {item}</li>
                  })}
               </ul>
            </div>

            <div className="h-[40%] p-5">
               <h2 className="text-xl font-bold">Skills:</h2>
               <ul className="px-4 grid grid-cols-2">
                  {userData.skills.map((item, index) => {
                     return <li className="" key={index}> - {item}</li>
                  })}
               </ul>
            </div>

            <div className="flex flex-auto gap-4 font-bold justify-center items-center">
               <p>LinkedIn</p>
               <p>Twitter</p>
               <p>Github</p>
            </div>
        </div>
      </div>
    </div>

    //  <div className="w-[40%]">
    //    <h1 className="text-2xl">{userData.name}</h1>
    //    <p>{userData.description}</p>
    //    <p>Interests</p>
    //    <ul>
    //       {userData.interest.map((item, index) => {
    //          return <li key={index}>{item}</li>
    //       })}
    //    </ul>
    //    <div>
    //       <button>
    //          <a href={userData.linkedinLink}>Linkedin</a>
    //       </button>
    //       <button>
    //          <a href={userData.githubLink}>Github</a>
    //       </button>
    //       <button>
    //          <a href={userData.twitterLink}>Twitter</a>
    //       </button>
    //    </div>
    //  </div>
  );
};
export default Card;
