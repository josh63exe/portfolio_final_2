import React, { useState } from "react";

function MyImageComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <div>Caricamento...</div>}
      <img
        src="/images/photo.jpg"
        alt="Photo"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
}

export default MyImageComponent;
