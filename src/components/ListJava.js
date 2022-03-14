import { Component } from "react";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";

export default function ListJava() {
  const listJava = useSelector((state) => state.dataJavaList);

  const SORT = {
    up: 2,
    down: 3,
    no: 1,
  };
  const [sortAge, setSortAge] = useState(SORT.up);
  const getSortAge = () => {
    if (sortAge === SORT.no) {
      return "NO";
    }
    if (sortAge === SORT.up) {
      return "UP";
    }
    return "DOWN";
  };
  const handleSort = () => {
    if (sortAge === SORT.down) {
      setSortAge(SORT.no);
    } else {
      if (sortAge === SORT.no) {
        setSortAge(SORT.up);
      } else {
        if (sortAge === SORT.up) {
          setSortAge(SORT.down);
        }
      }
    }
  };

  const [searchName2, setSearchName2] = useState("");
  const findName2 = function (list) {
    let res2 = [...list];
    if (searchName2) {
      res2 = res2.filter((el) => el.name.includes(searchName2));
    }
    if (sortAge !== SORT.NO) {
      res2.sort((a, b) => {
        if (sortAge === SORT.up) {
          return parseInt(a.age) - parseInt(b.age);
        }
        if (sortAge === SORT.down) {
          return parseInt(b.age) - parseInt(a.age);
        }
      });
    }
    return res2;
  };
  useEffect(() => {
    if (listJava.length === 0) {
      alert("Lớp React không còn sinh viên");
    }
  }, [listJava.length]);
  return (
    <div>
      <h2>list member of Java class</h2>
      <div className="timKiem">
        Tìm kiếm:{" "}
        <input
          type="text"
          name=""
          id=""
          placeholder="Tim kiem theo ten"
          value={searchName2}
          onChange={(e) => setSearchName2(e.target.value)}
        />
      </div>
      <div className="sapXep">
        <button onClick={handleSort}>Sắp Xếp Theo Tuổi: {getSortAge()}</button>
      </div>
      {listJava.length > 0 ? (
        <ul>
          {findName2(listJava).map((item, index) => {
            return (
              <li key={index}>
                name: {item.name} - age: <span>{item.age}</span>
                
              </li>
            );
          })}
        </ul>
      ) : (
        "Lớp Java không có ai"
      )}
    </div>
  );
}
