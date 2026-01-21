import React from "react";
import { User } from "lucide-react";
const Profiles = (props) => {
  return (
    <div className="h-full">
      <div className="p-3 border-gray-400 border-2 rounded-2xl h-full bg-white flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="bg-green-500 text-white p-1 rounded-xl">{props.status}</h2>
          <h3 className="font-bold text-3xl">{props.rate}</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-40 h-40 rounded-full object-fill "
            src={props.image}
            alt="profile"
          />
          <h2 className="font-bold">{props.name}</h2>
          <h3 className="text-gray-700">{props.role}</h3>
          <div className="flex items-center gap-2 text-blue-500 mb-4">
            <User size={20} />
            <h4>{props.type}</h4>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-3">
        {props.skills.map((skill, index) => (
          <span key={index} className="border-2 p-1 rounded-xl bg-blue-50 text-blue-600">{skill}</span>
        ))}
        </div>
        <div className="text-center">
          <p>
            {props.bio}
          </p>
        </div>
        <div className="flex justify-center">
          <button className="border-t-2 p-4 mt-4  hover:bg-blue-500 hover:text-white transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
