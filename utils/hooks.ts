import { useEffect, useRef } from "react";


export function useSlider(obj = { parent: '', arrows: '' }) {
  if (!(obj.parent || obj.arrows || obj)) 
    throw new Error("Parent class and the Arrows class are required!");

  // const parentRef = useRef<HTMLElement | null>(null)
  // const arrows = useRef<HTMLElement[] | null>(null);
  // const timeout = useRef<number | null>(null)

  useEffect(() => {
    let isDragging = false;
    let timeout = 0;
    // Getting elements with the given class names
    const parent = document.querySelector(obj.parent) as HTMLUListElement
    const arrows = document.querySelectorAll<HTMLElement>(obj.arrows)
    // handleIcons(); // Checking scrollX. If it's greater than max hide or else do nothing;
    // Checking if the elements have been found, otherwise throw an Error
    if (!(parent || arrows))
      throw new Error('There are no such elements. Please check the classes');
    // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
    if (!arrows[0].classList.contains('left'))
      arrows[0].classList.add('left');
    if (!arrows[0].classList.contains('right'))
      arrows[1].classList.add('right');

    // Handling draggability of UL Element
    const handleChildrenClicks = (e:Event) => e.preventDefault(); // Prevents clicking by mistake
    const dragging = (e: PointerEvent) => {
      if (!isDragging) {
        parent.childNodes.forEach(el => {
          el.removeEventListener('click', handleChildrenClicks);
        })
      } else {
        handleIcons();
        parent.childNodes.forEach(el => {
          el.addEventListener('click', handleChildrenClicks);
        })
      }
      if (!isDragging) return;
      e.preventDefault();
      e.stopPropagation();
      parent.scrollLeft -= e.movementX;
    };
    const handleMouseDown = () => isDragging = true; 
    const handleMouseUp = () => isDragging = false;
    const handleMouseLeave = () => isDragging = false;
    parent.addEventListener('pointerdown', handleMouseDown);
    parent.addEventListener('pointerup', handleMouseUp);
    parent.addEventListener('pointermove', dragging);
    parent.addEventListener('mouseleave', handleMouseLeave);
    parent.addEventListener('scroll', handleIcons);

    // Adding EventListener to Arrows
    arrows.forEach(ar => ar.addEventListener('click',
      (e) => {
        const target = e.currentTarget as HTMLDivElement;
        parent.scrollLeft += target.classList.contains('left')
          ? -350
          : target.classList.contains('right')
            ? 350
            : 0;
        timeout = window.setTimeout(handleIcons, 50);
      }) // addEvListener for Arrows
    ); // forEach

    // Handling visiblity of Arrows
    function handleIcons() {
      const x = Math.round(parent.scrollLeft)
      const xMax = parent.scrollWidth - parent.clientWidth;
      x > 0
        ? arrows[0].classList.remove('hide')
        : arrows[0].classList.add('hide');
      xMax > x + 1
        ? arrows[1].classList.remove('hide')
        : arrows[1].classList.add('hide');
    } // handleIcons

    // Cleanings when component is unmounted
    return () => {
      if (parent){
        parent.removeEventListener('pointerdown', handleMouseDown);
        parent.removeEventListener('pointerup', handleMouseUp);
        parent.removeEventListener('pointermove', dragging);
        parent.removeEventListener('mouseleave', handleMouseLeave);
        parent.addEventListener('scroll', handleIcons);

        parent.childNodes.forEach(el => {
          el.removeEventListener('click', handleChildrenClicks);
        })
      };
      if(timeout)
        clearTimeout(timeout);
    }; // end of the function

  }, [])

  return;
}; // end of the hook