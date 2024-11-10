import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function GadgetCards() {
  const data = useLoaderData();
  const { category } = useParams();

  const [gadgetData, setGadgetData] = useState([]);

  useEffect(() => {
    if (category) {
      if (category === "All Products") {
        setGadgetData(data);
      } else {
        const filtered = [...data].filter((g) => g.category === category);
        setGadgetData(filtered);
      }
    } else {
      setGadgetData(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-3 gap-2">
        <h1>test: {gadgetData.length}</h1>
        
      {/* {gadgetData.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget} />
      ))} */}
    </div>
  );
}
