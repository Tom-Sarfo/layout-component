import { useEffect, useState } from "react";
import "./App.css";
import Index from "./Redux";
import Drawer from "./Drawer/Drawer";
import { FeedbackTwoTone } from "@mui/icons-material";

export function IpAddrLoc() {
  const [loadIp, setLoadIp] = useState(false);

  async function fetchIp() {
    const data = await fetch("https://ipapi.co/json/");
    const result = await data.json();
    // console.log(result.country_name);
    setLoadIp(result);
  }

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div>
      {/* <Index /> */}

      <h1>Hey man! you are located in {loadIp.country_name}</h1>
      <div>
        {loadIp.in_eu ? (
          <p>{loadIp.country_name} is a me member of European union</p>
        ) : (
          <p>this country is not in the EU</p>
        )}
      </div>
    </div>
  );
}

export default IpAddrLoc;
