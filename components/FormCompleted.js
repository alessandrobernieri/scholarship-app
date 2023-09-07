import { useFormData } from "../context";
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { useState, useRef, useEffect } from "react";

async function clickHandler(enteredData) {
  const response = await 
  fetch("/api/mongo", {
    method: "POST",
    body: JSON.stringify(enteredData),
    headers: 
    {
      "Content-Type": 
      "application/json",
    },
  });
  const data = await response.json();
 }

export default function FormCompleted() {
  const [needInsert, setNeedInsert] = useState(true);
  const { data } = useFormData();
  const wallet = useWallet();
  var walletAddress = wallet.account?.address?.toString();
  const toInsert = {"address":walletAddress,"twitter":data.twitter,"category":data.category,"question":data.question,"status":"pending"}
  if(needInsert==true){
    clickHandler(toInsert);
    setNeedInsert(false);
  }
  return (
    <>
      <h2>Application submitted! 🎉</h2>
      <pre>Your application will be reviewed in 24-48h. 
        <br></br>
        Keep an eye on <a href="https://twitter.com">@Scholarship</a> to know if you have been chosen. 
      </pre>
<br></br><br></br>
    </>
  );
}
