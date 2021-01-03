import { useEffect } from "react";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {

    const listener = (event: MouseEvent | TouchEvent) => {
      // "as Node" required to remove bug between react and js
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      // cleanup
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler, ref])
}

export { useClickOutside }
