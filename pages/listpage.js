import { useEffect, useState } from "react";
import styles from "../styles/Listpage.module.css";
export default function ListPage() {
  const [data,setData] = useState()
useEffect(() => {
 const formData = JSON.parse(localStorage.getItem("formData"));
    setData(formData)
}, [])
if(!data){
 return   <div>Loading</div>
}

  return (
    <div  className={styles.listContainer} >
      <h1 className={styles.header}>List of Submitted Projects</h1>
      <div className={styles.projectContainer} >
        <p className={styles.header}>Project name:</p>
        <p>{data.projectName}</p>
        <p className={styles.header}>Project Url:</p>
        <p>{data.projectUrl}</p>
        <p className={styles.header}>Project category:</p>
        <p>{data.projectCategory}</p>
        <p className={styles.header}>Main goal:</p>
        <p>{data.goal}</p>
        <p className={styles.header}>Workers quantity:</p>
        <p>{data.fullTimeWorkers}</p>
        <p className={styles.header}>Product stage :</p>
        <p>{data.productStage}</p>
        <p className={styles.header}>Email:</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
}