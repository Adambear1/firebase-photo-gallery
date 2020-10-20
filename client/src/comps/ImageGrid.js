import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map(({ id, url }) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={id}
            onClick={() => setSelectedImg(url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={url}
              alt="Uploaded Picture"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
