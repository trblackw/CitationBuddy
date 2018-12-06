import { useState, useCallback } from "react";

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  return [open, useCallback(() => setOpen(status => !status))];
};
