import { useEffect, useRef } from "react";

type ReactSlider = {
  parent: string,
  arrows: string
}

export function useSlider(obj: ReactSlider) {
  let { current: isDragging } = useRef(false);
  let { current: timeout } = useRef(0)

  if (!(obj.parent || obj.arrows || obj))
    throw new Error("Parent class and the Arrows class are required!");

  useEffect(() => {
    const containers = document.querySelectorAll('.rsl__container') as NodeListOf<HTMLElement>
    let handleChildrenClicks: EventListenerOrEventListenerObject;
    let handleMouseDown: (e?: PointerEvent) => void;
    let handleMouseUp: (e?: PointerEvent) => void;
    let handleMouseLeave: (e?: PointerEvent) => void;
    let dragging: (e: PointerEvent) => void;
    let handleScroll: (this: HTMLUListElement, ev?: Event) => any;
    let handleArrowsClick: (e: Event) => void;


    containers.forEach(c => {

      // Getting elements with the given class names
      const parent = c.querySelector<HTMLUListElement>(obj.parent) as HTMLUListElement;
      const arrows = c.querySelectorAll<HTMLElement>(obj.arrows);
      // handleIcons(); // Checking scrollX. If it's greater than max hide or else do nothing;
      // Checking if the elements have been found, otherwise throw an Error
      if (!(parent || arrows.length))
        throw new Error('There are no such elements. Please check the classes');
      // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
      if (!arrows[0].classList.contains('left'))
        arrows[0].classList.add('left');
      if (!arrows[1].classList.contains('right'))
        arrows[1].classList.add('right');

      handleChildrenClicks = (e: Event) => { e.preventDefault() };
      handleMouseDown = () => { isDragging = true }
      handleMouseUp = () => { isDragging = false };
      handleMouseLeave = () => { isDragging = false };

      // Handling visiblity of Arrows
      const handleIcons = () => {
        const x = Math.round(parent.scrollLeft)
        const xMax = parent.scrollWidth - parent.clientWidth;
        x > 0
          ? arrows[0].classList.remove('rsl__hide')
          : arrows[0].classList.add('rsl__hide');
        xMax > x + 1
          ? arrows[1].classList.remove('rsl__hide')
          : arrows[1].classList.add('rsl__hide');
      } // handleIcons

      const handleArrowsClick = (e: Event) => {
        const target = e.currentTarget as HTMLDivElement;
        parent.scrollLeft += target.classList.contains('left')
          ? -350
          : target.classList.contains('right')
            ? 350
            : 0;
        handleIcons();
      }

      // Handling draggability of UL Element
      // Prevents clicking by mistake
      dragging = (e: PointerEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isDragging) {
          parent.childNodes.forEach(el => {
            el.removeEventListener('click', handleChildrenClicks);
          });
          parent.classList.remove('dragging')
          return;
        }
          parent.childNodes.forEach(el => {
            el.addEventListener('click', handleChildrenClicks);
          })
          parent.classList.add('dragging')
          parent.scrollLeft -= e.movementX;

      };

      handleScroll = () => { handleIcons() }

      parent.addEventListener('pointerdown', handleMouseDown);
      parent.addEventListener('pointermove', dragging);
      parent.addEventListener('pointerleave', handleMouseLeave);
      parent.addEventListener('pointerup', handleMouseUp);
      parent.addEventListener('scroll', handleScroll);

      // Adding EventListener to Arrows
      arrows.forEach(ar => ar.addEventListener('click', handleArrowsClick) // addEvListener for Arrows
      ); // forEach


    })


    // Cleanings when component is unmounted
    return () => {
        const parents = document.querySelectorAll('.rsl__container_list') as NodeListOf<HTMLUListElement>
      if (parents.length) {

        parents.forEach(p => {
          p.removeEventListener('pointerdown', handleMouseDown)
          p.removeEventListener('pointerup', handleMouseUp);
          p.removeEventListener('pointermove', dragging);
          p.removeEventListener('pointerleave', handleMouseLeave);
          p.removeEventListener('scroll', handleScroll);
          const arrows = p.querySelectorAll('.rsl__container__shadow__arrow') as NodeListOf<HTMLElement>
          arrows.forEach(a => {
            a.removeEventListener('click', handleArrowsClick)
          })
        });
      };
      if (timeout) clearTimeout(timeout);
    }; // end of the function

  }, [])

  return;
}; // end of the hook