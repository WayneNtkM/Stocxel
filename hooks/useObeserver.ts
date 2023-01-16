import { useRef, useEffect, useState } from "react";

export default function useObserver<T>() {
  const ref = useRef<T>(null);
  const [view, setView] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setView(entries[0]);
    });
    observer.observe(ref.current as unknown as Element)
  }, [])
  return { ref, view }
}