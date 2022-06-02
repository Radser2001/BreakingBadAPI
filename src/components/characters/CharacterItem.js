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
              Actor Name: <strong>{item.portrayed}</strong>
            </li>
            <li>
              Nickname: <strong>{item.nickname}</strong>
            </li>
            <li>
              Birthday: <strong>{item.birthday}</strong>
            </li>
            <li>
              Status:{" "}
              <strong>
                {item.occupation.map((job) => (
                  <strong style={{ textAlign: "center" }}>
                    {job}
                    <br />
                  </strong>
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
