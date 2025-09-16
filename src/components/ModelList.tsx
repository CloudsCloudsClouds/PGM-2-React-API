import React, { useEffect, useState } from "react";
import { fetchModels, type Model } from "../services/sketchfabService";

const ModelList: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    const getModels = async () => {
      const data = await fetchModels("Roboto");
      setModels(data);
    };
    getModels();
  }, []);

  return (
    <div>
      {models.map((model) => (
        <div key={model.id}>
          <img src={model.thumbnail} alt={model.name} />
          <h3>{model.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ModelList;
