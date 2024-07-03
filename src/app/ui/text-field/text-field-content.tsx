"use client";

import { Button } from "@/app/components/Button";
import { TextField } from "@/app/components/TextField";
import { useState } from "react";
import styles from "./text-field-content.module.scss";

export default function TextFieldContent() {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState("");

  const handleTextChange = (text: string) => {
    setValue(text);
  };
  return (
    <div className={styles.container}>
      <Button onClick={() => setHasError(hasError ? "" : "Error")}>
        Toggle Error
      </Button>
      <TextField
        id="text"
        value={value}
        handleChange={(e) => handleTextChange(e.target.value)}
        error={hasError}
      />

      <p>Entered: {value}</p>
    </div>
  );
}
