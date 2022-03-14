import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddUserJava } from "./DataJavaSlice";
import { updateUserReact } from "./DataReactSlice";

export default function Update() {
  const listJava = useSelector((state) => state.dataJavaList);
  const param = useParams();
  const listReact = useSelector((state) =>
    state.dataReactList.find((list) => list.name === param.reactName)
  );
  const [tenMoi, setTenMoi] = useState(listReact.name);
  const [tuoiMoi, setTuoiMoi] = useState(listReact.age);
  const [lopMoi, setLopMoi] = useState(listReact.type);
  const getValueName = (e) => {
    setTenMoi(e.target.value);
  };
  const getValueAge = (e) => {
    setTuoiMoi(e.target.value);
  };
  const getValueClass = (e) => {
    setLopMoi(e.target.value);
  };
  const dispath = useDispatch();
  const navigate = useNavigate();
  const UpdateReact = (tuoiMoi, lopMoi) => {
     if(lopMoi === "react")
     {
      dispath(updateUserReact({ name: param.reactName, tuoiMoi, lopMoi }));
     }
     else{
      dispath(updateUserReact({ name: param.reactName, tuoiMoi, lopMoi }));
      dispath(AddUserJava(tenMoi, tuoiMoi, lopMoi));
     }
      navigate(`/react`);
  };
  return (
    <div>
      <h1>Update User</h1>
      <form>
        Tên :{" "}
        <input type="text" value={tenMoi} onChange={getValueName} disabled />
        Tuổi : <input type="number" value={tuoiMoi} onChange={getValueAge} />
        <select value={lopMoi} onChange={getValueClass}>
          <option value="react">React</option>
          <option value="java">Java</option>
        </select>
      </form>
      <button
        className="addMember"
        onClick={() => {
          UpdateReact(tuoiMoi, lopMoi);
        }}
      >
        Update
      </button>
    </div>
  );
}
