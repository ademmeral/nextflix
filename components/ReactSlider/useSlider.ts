import { useEffect, useRef } from "react";
import independentSmoothScroll from "./independentSmoothScroll";

type ReactSlider = {
  parent: string,
  arrows: string
}

export function useSlider(obj: ReactSlider, refs: React.MutableRefObject<HTMLElement | null>[]) {
  let { current: timeout } = useRef(0)

  if (!(obj.parent || obj.arrows || obj))
    throw new Error("Parent class and the Arrows class are required!");

  useEffect(() => {
    const parEvs: [string, EventListener | ((e: PointerEvent) => void)][] = []
    const arrEvs: [string, EventListener][] = []

    if (refs[0] && refs[0].current) {
      let isDragging = false;

      // Getting elements with the given class names
      const parent = refs[0].current.querySelector<HTMLUListElement>(obj.parent) as HTMLUListElement;
      const arrows = refs[0].current.querySelectorAll<HTMLElement>(obj.arrows);
      const [parLeft, parRight] = [arrows[0].parentElement, arrows[1].parentElement];

      // Checking if the elements have been found, otherwise throw an Error
      if (!(parent || arrows.length))
        throw new Error('There are no such elements. Please check the classes');
      
      // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
      if (!arrows[0].classList.contains('left'))
        arrows[0].classList.add('left');
      if (!arrows[1].classList.contains('right'))
        arrows[1].classList.add('right');

      const handleMouseDown = () => { isDragging = true }
      const handleMouseUp = () => { isDragging = false };
      const handleMouseLeave = () => { isDragging = false };
      parEvs.push(
        ['pointerdown', handleMouseDown],
        ['pointerup', handleMouseUp],
        ['pointerleave', handleMouseLeave]
      );

      // Handling visiblity of Arrows
      const handleIcons = () => {
        const x = Math.round(parent.scrollLeft)
        const xMax = parent.scrollWidth - parent.clientWidth;
        x > 1
          ? parLeft?.classList.remove('rsl__hide')
          : parLeft?.classList.add('rsl__hide');
        xMax > x + 1
          ? parRight?.classList.remove('rsl__hide')
          : parRight?.classList.add('rsl__hide');
      } // handleIcons

      const scrollConfig = (param: number) => independentSmoothScroll({
        position : 'x', 
        element : refs[1].current,
        target : parent.scrollLeft + param,
      })
      const handleArrowsClick = (e: Event) => {
        const target = e.currentTarget as HTMLDivElement;
        target.classList.contains('left')
          ? scrollConfig(-parent.clientWidth)
          : target.classList.contains('right')
            ? scrollConfig(parent.clientWidth)
            : parent.scrollLeft += 0;
        handleIcons();
      }

      // Handling draggability of UL Element
      const dragging = (e: PointerEvent) => {
        e.preventDefault();
        if (!isDragging) {
          parent.classList.remove('dragging');
          return;
        }
        parent.classList.add('dragging')
        parent.scrollLeft -= e.movementX / 2;
      };

      const handleScroll = () => { handleIcons() }
      parEvs.push(
        ['pointermove', dragging],
        ['scroll', handleScroll]
      );

      parent.addEventListener('pointerdown', handleMouseDown);
      parent.addEventListener('pointermove', dragging);
      parent.addEventListener('pointerleave', handleMouseLeave);
      parent.addEventListener('pointerup', handleMouseUp);
      parent.addEventListener('scroll', handleScroll);

      // Adding EventListener to Arrows
      arrows.forEach(ar => 
        ar.addEventListener('click', handleArrowsClick) // addEvListener for Arrows
      ); // forEach
      arrEvs.push(['click', handleArrowsClick])
    }; // topmost if stt

    // Cleanings when component is unmounted
    return () => {
      const parents = document.querySelectorAll('.rsl__container_list') as NodeListOf<HTMLUListElement>
      if (parents.length) {

        parents.forEach(p => {
          parEvs.forEach(ev => { p.removeEventListener(ev[0] as string, ev[1] as EventListener) });
          const arrows = p.querySelectorAll('.rsl__container__shadow__arrow') as NodeListOf<HTMLElement>
          arrows.forEach(a => { arrEvs.forEach( e => { a.removeEventListener(e[0], e[1]) }) });
        }); // parents forEach
      }; // if stt
      if (timeout) clearTimeout(timeout);
    }; // end of the function

  }, [])

  return;
}; // end of the hook