import React, { useState } from "react";

const ModelViewer = ({ src, height = 600, autoRotate = true, onError }) => {
  const [errored, setErrored] = useState(false);

  if (!src) return null;

  return (
    <>
      {!errored ? (
        <model-viewer
          src={src}
          alt="3D model"
          camera-controls
          auto-rotate={autoRotate}
          interaction-prompt="auto"
          style={{ width: "100%", height: `${height}px`, background: "#0b0b0b" }}
          onError={(e) => {
            setErrored(true);
            if (onError) onError(e);
          }}
        />
      ) : null}
    </>
  );
};

export default ModelViewer;
