import Head from "next/head";
import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";
import { Form } from "@unform/web";
import { useState, useRef, useEffect } from "react";
import Input from "../components/Input Fields/Input";

async function clickHandler2() {
  const response = await 
  fetch("http://localhost:3000/api/getmongoall", {
    method: "POST",
    headers: 
    {
      "Content-Type": 
      "application/json",
    },
  });
  const data = await response.json();

  return data;
 }

 async function handleSubmit(data) {
  const response = await 
  fetch("http://localhost:3000/api/update", {
    method: "POST",
    body: JSON.stringify(data),
    headers: 
    {
      "Content-Type": 
      "application/json",
    },
  });
  const resp = await response.json();

  return resp;
 }

const App = () => {
  const [data, setData] = useState(null)
  const [needFetching, setNeedFetching] = useState(false);

  useEffect(() => {
    if (needFetching) return;

    setNeedFetching(true);
  }, [data]);

  useEffect(() => {
    if (!needFetching) {
      return;
    }
    const callData = async () => {
      var data = await clickHandler2().then(data => data)
      setData(data)
      setNeedFetching(false);
    };
  callData();
  }, [needFetching]);

  var status = data;

  if(status!==null){
    return (
      <div className={styles.container}>
        <Head>
          <title>Scholarship Application</title>
        </Head>
        <h1>Scholarship Application</h1>
        <FormCard>
        {status.map((person, index) => (
  
        <p key={index}>
          <Form onSubmit={handleSubmit}>
          Address: <a href={"https://explorer.aptoslabs.com/account/"+ person.address +"?network=mainnet"}>{person.address}</a> 
          <br></br>Twitter: <a href={"https://twitter.com/"+person.twitter}>{person.twitter}</a>
          <br></br>Category: {person.category}
          <br></br>Question: {person.question}
          <br></br><b>Status: {person.status}</b>
          <br></br>
          <br></br> 
          <Input type="hidden" name="id" value={person._id} />
          <Input className={styles.approve} name="action" value="Approve" type="submit" />
          </Form>
          <br></br><br></br><hr></hr> <br></br>
          </p>     
    ))}
    </FormCard>

      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Scholarship Application</title>
      </Head>
      <h1>Scholarship Application</h1>
      <FormCard>
        No applications yet.
      </FormCard>
    </div>
  );
};

export default App;
