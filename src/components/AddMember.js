import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserJava } from "./DataJavaSlice";
import { AddUserReact } from "./DataReactSlice";


export default function AddMember() {
  const [tenMoi, setTenMoi] = useState("");
  const [tuoiMoi, setTuoiMoi] = useState(0);
  const [lopMoi, setLopMoi] = useState("react");
  const listReact = useSelector((state) => state.dataReactList);
  const listJava = useSelector((state) => state.dataJavaList);
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
  const AddMember = (lopMoi) => {
    if (lopMoi == "react") {
      dispath(AddUserReact(tenMoi, tuoiMoi, lopMoi));
    } else {
      dispath(AddUserJava(tenMoi, tuoiMoi, lopMoi));
    }
  };
  useEffect(() => {}, [listReact]);

  return (
    <div>
      <h2 id="Add_Update">Thêm thành viên mới</h2>
      <form>
        Tên : <input type="text" value={tenMoi} onChange={getValueName} />
        Tuổi : <input type="number" value={tuoiMoi} onChange={getValueAge} />
        <select value={lopMoi} onChange={getValueClass}>
          <option value="react">React</option>
          <option value="java">Java</option>
        </select>
      </form>
      <button
        className="addMember"
        onClick={() => {
          AddMember(lopMoi);
        }}
      >
        Add Member
      </button>
      {lopMoi === "react" ? (
        <ul>
          {listReact.map((item, index) => {
            return (
              <div>
                <li key={index}>
                  name: {item.name} - age: {item.age}
                </li>
              </div>
            );
          })}
        </ul>
      ) : (
        <ul>
          {listJava.map((item, index) => {
            return (
              <div>
                <li key={item.name}>
                  name: {item.name} - age: {item.age}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
