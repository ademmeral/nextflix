import { useEffect, useRef, useState } from "react";


export function useSlider(obj = { parent: '', arrows: '' }) {
  if (!(obj.parent || obj.arrows || obj)) 
    throw new Error("Parent class and the Arrows class are required!");

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const parentRef = useRef<HTMLElement | null>(null)
  const arrowsRef = useRef<HTMLElement[] | null>(null);
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // Getting elements with the given class names
    parentRef.current = document.querySelector(obj.parent) as HTMLUListElement
    arrowsRef.current = [...document.querySelectorAll(obj.arrows)] as HTMLDivElement[]
    handleIcons(); // Checking scrollX. If it's greater than max hide or else do nothing; 
    // Checking if the elements have been found, otherwise throw an Error
    if (!(parentRef.current || arrowsRef.current))
      throw new Error('There are no such elements. Please check the classes');
    // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
    if (!arrowsRef.current[0].classList.contains('left'))
      arrowsRef.current[0].classList.add('left');
    if (!arrowsRef.current[0].classList.contains('right'))
      arrowsRef.current[1].classList.add('right');

    // Handling draggability of UL Element
    const dragging = (e: PointerEvent) => {
      if (!isDragging) return;
      console.log('dragging')
      e.preventDefault();
      if (parentRef.current)
        parentRef.current.scrollLeft -= e.movementX;
    };
    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)
    if (parentRef.current) {
      parentRef.current.addEventListener('pointerdown', handleMouseDown);
      parentRef.current.addEventListener('pointerup', handleMouseUp);
      parentRef.current.addEventListener('pointermove', dragging);
    }

    // Adding EventListener to Arrows
    if (arrowsRef.current.length) {
      arrowsRef.current.forEach(ar => ar.addEventListener('click',
        (e) => {
          const target = e.currentTarget as HTMLDivElement;
          if (parentRef.current)
            parentRef.current.scrollLeft += target.classList.contains('left')
              ? -350
              : target.classList.contains('right')
                ? 350
                : 0;
          timeoutRef.current = window.setTimeout(() => handleIcons(), 50);
        }) // addEvListener for Arrows
      ); // forEach
    } // if statement 

    // Handling visiblity of Arrows
    function handleIcons() {
      console.log('handleIcons')
      if (parentRef.current && arrowsRef?.current?.length) {
        const x = Math.round(parentRef.current.scrollLeft)
        const xMax = parentRef.current.scrollWidth - parentRef.current.clientWidth;
        x > 0
          ? arrowsRef.current[0].classList.remove('hide')
          : arrowsRef.current[0].classList.add('hide');
        xMax > x
          ? arrowsRef.current[1].classList.remove('hide')
          : arrowsRef.current[1].classList.add('hide');
      } // if statement in handleIcons
    } // handleIcons

    // Cleanings when component is unmounted
    return () => {
      if (parentRef.current){
        parentRef.current.removeEventListener('pointerdown', handleMouseDown);
        parentRef.current.removeEventListener('pointerup', handleMouseUp);
        parentRef.current.removeEventListener('pointermove', dragging);
      };
      if(timeoutRef.current)
        clearTimeout(timeoutRef.current);
    }; // end of the function

  }, [])

  return {
    parentRef,
    arrowsRef,
    isDragging,
    setIsDragging,
    timeoutRef,
    classes : {...obj},
  };
}; // end of the hook