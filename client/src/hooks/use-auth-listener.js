import { useState, useEffect } from "react";
import { userListener } from "../services";

export default function useAuthListener() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const listener = async () => {
      try {
        const response = await userListener();
        setUid(response.data);
      } catch (err) {
        console.log("No Token");
      }
    };

    listener();
  }, [uid]);

  return uid;
}
