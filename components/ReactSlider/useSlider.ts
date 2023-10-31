import { useEffect } from "react";
import xSmoothScroll from "@/components/ReactSlider/xSmoothScroll";

// https://github.com/ademmeral/hooks/useSlider
export function useSlider(ref: React.MutableRefObject<HTMLElement | null>) {
  
  useEffect(() => {
    const parentEvents: [string, EventListener | ((e: PointerEvent) => void)][] = []
    const arrowEvents: [string, EventListener][] = []

    if (ref && ref.current) {
      let isDragging = false;

      // Getting elements with the given class names
      const wrapperList = ref.current.querySelector<HTMLUListElement>('.rsl_list') as HTMLUListElement;
      const arrows = ref.current.querySelectorAll<HTMLElement>('.rsl_arrow');
      const [leftArrowParent, rightArrowParent] = [arrows[0].parentElement, arrows[1].parentElement];

      // Checking if the elements have been found, otherwise throw an Error
      if (!(wrapperList || arrows.length))
        throw new Error('There are no such elements. Please check the classes');
      
      // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
      if (!arrows[0].classList.contains('rsl_arrow_left'))
        arrows[0].classList.add('rsl_arrow_left');
      if (!arrows[1].classList.contains('rsl_arrow_right'))
        arrows[1].classList.add('rsl_arrow_right');

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
        const x = Math.round(wrapperList.scrollLeft)
        const xMax = wrapperList.scrollWidth - wrapperList.clientWidth;
        x > 1
          ? leftArrowParent?.classList.remove('rsl_hide')
          : leftArrowParent?.classList.add('rsl_hide');
        xMax > x + 1
          ? rightArrowParent?.classList.remove('rsl_hide')
          : rightArrowParent?.classList.add('rsl_hide');
      } // handleIcons

      const scrollConfig = {
        position : 'x',
        element : wrapperList,
        target : wrapperList.scrollLeft
      }
      const handleArrowsClick = (e: Event) => {
        const target = e.currentTarget as HTMLDivElement;
        target.classList.contains('rsl_arrow_left')
          ? scrollConfig.target -= wrapperList.clientWidth
          : target.classList.contains('rsl_arrow_right')
            ? scrollConfig.target += wrapperList.clientWidth
            : wrapperList.scrollLeft = 0;
        handleIcons();
        xSmoothScroll(scrollConfig);
      }

      // Handling draggability of UL Element
      const dragging = (e: PointerEvent) => {
        e.preventDefault();
        if (!isDragging) {
          wrapperList.classList.remove('dragging');
          return;
        }
        wrapperList.classList.add('dragging')
        wrapperList.scrollLeft -= e.movementX / 2;
      };

      const handleScroll = () => { handleIcons() }
      parentEvents.push(
        ['pointermove', dragging],
        ['scroll', handleScroll]
      );

      for (const [event, handler] of parentEvents)
        wrapperList.addEventListener(event as string, handler as EventListener);

      // Adding EventListener to Arrows
      // I find for loop sexier than forEach
      for (const arrow of arrows)
        arrow.addEventListener('click', handleArrowsClick);

      arrowEvents.push(['click', handleArrowsClick]);
    }; // topmost if stt

    // Cleanings when component is unmounted
    return () => {

      const wrapperLists = document.querySelectorAll<HTMLUListElement>('.rsl_list');
      if (wrapperLists.length) {

        wrapperLists.forEach(p => {
          parentEvents.forEach(ev => { p.removeEventListener(ev[0] as string, ev[1] as EventListener) });
          const arrows = p.querySelectorAll<HTMLElement>('.rsl_arrow');
          arrows.forEach(a => { arrowEvents.forEach( e => { a.removeEventListener(e[0], e[1]) }) });
        }); // parents forEach

      }; // if stt

    }; // end of the function

  }, [])

  return;
}; // end of the hook