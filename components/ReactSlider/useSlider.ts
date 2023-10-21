import { useEffect, useRef } from "react";
import independentSmoothScroll from "@/components/ReactSlider/independentSmoothScroll";


export function useSlider(ref: React.MutableRefObject<HTMLElement | null>) {

  useEffect(() => {
    const parentEvents: [string, EventListener | ((e: PointerEvent) => void)][] = []
    const arrowEvents: [string, EventListener][] = []

    if (ref && ref.current) {
      let isDragging = false;

      // Getting elements with the given class names
      const parent = ref.current.querySelector<HTMLUListElement>('.rsl_list') as HTMLUListElement;
      const arrows = ref.current.querySelectorAll<HTMLElement>('.rsl_arrow');
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
      parentEvents.push(
        ['pointerdown', handleMouseDown],
        ['pointerup', handleMouseUp],
        ['pointerleave', handleMouseLeave]
      );

      // Handling visiblity of Arrows
      const handleIcons = () => {
        const x = Math.round(parent.scrollLeft)
        const xMax = parent.scrollWidth - parent.clientWidth;
        x > 1
          ? parLeft?.classList.remove('rsl_hide')
          : parLeft?.classList.add('rsl_hide');
        xMax > x + 1
          ? parRight?.classList.remove('rsl_hide')
          : parRight?.classList.add('rsl_hide');
      } // handleIcons

      const softenScroll = (param:number) => independentSmoothScroll({
        position : 'x',
        element : parent,
        target : parent.scrollLeft + param
      });
      const handleArrowsClick = (e: Event) => {
        const target = e.currentTarget as HTMLDivElement;
        target.classList.contains('left')
          ? softenScroll(-parent.clientWidth)
          : target.classList.contains('right')
            ? softenScroll(parent.clientWidth)
            : parent.scrollLeft = 0;
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
      parentEvents.push(
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
      arrowEvents.push(['click', handleArrowsClick])
    }; // topmost if stt

    // Cleanings when component is unmounted
    return () => {

      const parents = document.querySelectorAll('.rsl__container_list') as NodeListOf<HTMLUListElement>
      if (parents.length) {

        parents.forEach(p => {
          parentEvents.forEach(ev => { p.removeEventListener(ev[0] as string, ev[1] as EventListener) });
          const arrows = p.querySelectorAll('.rsl__container__shadow__arrow') as NodeListOf<HTMLElement>
          arrows.forEach(a => { arrowEvents.forEach( e => { a.removeEventListener(e[0], e[1]) }) });
        }); // parents forEach

      }; // if stt

    }; // end of the function

  }, [])

  return;
}; // end of the hook