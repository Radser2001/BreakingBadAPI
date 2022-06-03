import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              Actor Name <br />
              <strong style={{ textAlign: "center" }}>{item.portrayed}</strong>
            </li>
            <li>
              Nickname <br />
              <strong>{item.nickname}</strong>
            </li>
            <li>
              Birthday <br />
              <strong>{item.birthday}</strong>
            </li>
            <li>
              Occupation
              <strong>
                {item.occupation.map((job) => (
                  <>
                    <br />
                    <strong style={{ textAlign: "center" }}>{job}</strong>
                  </>
                ))}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
