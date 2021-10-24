import { useEffect, useState } from "react";

/**
 * @category Hooks
 * @description Хук для получени рефа
 * @param {any} ref - Ref на элемент
 * @returns Состояние элемента hover or notHover
 */

function useHover(ref) {
  const [hovering, setHovering] = useState(false);
  const on = () => setHovering(true);
  const off = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;
    node.addEventListener('mouseenter',on)
    node.addEventListener('mousemove',on)
    node.addEventListener('mouseleave',off)

    return function(){
      node.removeEventListener('mouseenter',on)
      node.removeEventListener('mousemove',on)
      node.removeEventListener('mouseleave',off)
    }
  });
  return hovering;
}

export default useHover;
