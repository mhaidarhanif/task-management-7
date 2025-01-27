import React, { useState } from "react";

export function FileUpload() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.pdf" // Specify accepted file types
      />
      {fileName && <p>Selected file: {fileName}</p>}

      <img src="/image.png" alt="" />
    </div>
  );
}
