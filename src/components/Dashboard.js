import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Home.css";

function Dashboard() {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/api/feynman/topics`);
      const data = await res.json();
      console.log(data);
      setTopicList(data.topics);
      // console.log('Topics', topicList[0].topicName, topicList[0].percentage);
    })();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="homeContainer">
        <h1>
          Dashboard <i className="fa fa-spinner fa-spin"></i>
        </h1>

        <div className="addTopic">
          <h2 className="heading-two">Add Topic </h2>
          <Link to="/addTopic">
            <img
              src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-1024.png"
              alt="add icon"
            ></img>
          </Link>
        </div>

        <div className="topicList">
          <h2>
            Topic List <i className="fa-solid fa-house"></i>
          </h2>
        </div>
        <div className="tableList">
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Topic Name</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center", fontSize: "20px" }}>
              {topicList.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.topicName}</td>
                    <td>{user.percentage}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
