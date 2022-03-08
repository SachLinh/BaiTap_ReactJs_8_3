import React, {useState} from 'react'

export default function Body() {
  const [listReact, setListReact] = useState([
      {name:"Linh", age:22, type:"react"},
      {name:"Huy", age:20,type:"react"},
      {name:"Long", age:21,type:"react"}
  ]);
  const [listJava, setListJava] = useState([
      {name:"Hoang", age:22,type:"java"},
      {name:"Quan", age:20,type:"java"},
      {name:"Phuc", age:21,type:"java"}
  ]);
  const [tenMoi, setTenMoi] = useState("");
  const [tuoiMoi, setTuoiMoi] = useState(0);
  const [lopMoi, setLopMoi] = useState("react");
  const tranferItem = function(ten, tuoi, lop){
      if(lop === "react")
      {
          const javaNew = {
              name: ten,
              age:tuoi,
              type:"java"
          }
         setListJava([...listJava, javaNew]);
         for(let i =0; i<listReact.length; i++)
         {
             if(listReact[i].name === ten)
             {
                 listReact.splice(i,1);
             }
         }
         if(listReact.length === 0)
         {
             alert("Lớp React không còn sinh viên");
         }
      }
      if(lop === "java")
      {
          const reactNew = {
              name: ten,
              age:tuoi,
              type:"react"
          }
         setListReact([...listReact, reactNew]);
         for(let i =0; i<listJava.length; i++)
         {
             if(listJava[i].name === ten)
             {
                 listJava.splice(i,1);
             }
         }
         if(listJava.length === 0)
         {
             alert("Lớp Java không còn sinh viên");
         }
      }
  }
  const getValueName = (e)=>{
      setTenMoi(e.target.value);
  }
  const getValueAge = (e)=>{
      setTuoiMoi(e.target.value);
  }
  const getValueClass = (e)=>{
      setLopMoi(e.target.value);
  }
  const AddMember = function(e){
    if(lopMoi === "react")
        {
            const react = {
                name: tenMoi,
                age:tuoiMoi,
                type:lopMoi
            }
            setListReact([...listReact,react])
        }
    if(lopMoi === "java")
        {
            const java = {
                name: tenMoi,
                age:tuoiMoi,
                type:lopMoi
            }
            setListJava([...listJava,java])
        }
        console.log(tenMoi, lopMoi, tuoiMoi);
  }
  return (
    <div>
        <h2>list member of React class</h2>
        {listReact.length > 0 ? <ul>
            {listReact.map((item,index)=>{
                return <li key={index}>
                  name: {item.name} - age: {item.age} 
                  <button onClick={() =>{tranferItem(item.name, item.age ,item.type)}}>Tranfer</button>
                </li>
            })}
        </ul> : "Lớp React trống" }
        
        <h2>list member of Java class</h2>
        {listJava.length > 0 ? <ul>
            {listJava.map((item,index)=>{
                return <li key={index}>
                  name: {item.name} - age: {item.age} 
                  <button onClick={() =>{tranferItem(item.name, item.age ,item.type)}}>Tranfer</button>
                </li>
            })}
        </ul>: "Lớp Java không có ai"}
        <h2>Thêm thành viên mới</h2>
        <form>
            Tên : <input type="text" value={tenMoi} onChange={getValueName}/>
            Tuổi : <input type="number" value={tuoiMoi} onChange={getValueAge}/>
            <select value={lopMoi} onChange={getValueClass}>
                <option value="react">React</option>
                <option value="java">Java</option>
            </select>

        </form>            
        <button className='addMember' onClick={AddMember}>Add Member</button>
    </div>
  )
}
