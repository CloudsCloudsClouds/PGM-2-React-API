import React from "react";
import { getMotivation } from "../services/motivationalService";

function MyMotivation() {
  const [motivation, setMotivation] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchMotivation = async () => {
      try {
        const response = await getMotivation();
        setMotivation(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMotivation();
  }, []);

  return <div>{motivation ? <p>{motivation}</p> : <p>Loading...</p>}</div>;
}

export default MyMotivation;
