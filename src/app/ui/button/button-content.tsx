"use client";

import { Button } from "@/app/components/Button";
import { useState } from "react";

export default function ButtonContent() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      <p>Clicked {counter} times</p>
    </div>
  );
}
