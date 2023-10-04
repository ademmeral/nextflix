import { useEffect, useRef } from "react";

type ReactSlider = {
  parent: string,
  arrows: string
}

export function useSlider(obj: ReactSlider) {
  let { current: timeout } = useRef(0)

  if (!(obj.parent || obj.arrows || obj))
    throw new Error("Parent class and the Arrows class are required!");

  useEffect(() => {
    const containers = document.querySelectorAll('.rsl__container') as NodeListOf<HTMLElement>
    const parEvs:[string, EventListener | ((e:PointerEvent) => void) ][] = []
    const arrEvs:[string, EventListener][] = []

    containers.forEach(c => {
      let isDragging = false;
      // Getting elements with the given class names
      const parent = c.querySelector<HTMLUListElement>(obj.parent) as HTMLUListElement;
      const arrows = c.querySelectorAll<HTMLElement>(obj.arrows);
      const [parLeft, parRight] = [arrows[0].parentElement, arrows[1].parentElement]
      // handleIcons(); // Checking scrollX. If it's greater than max hide or else do nothing;
      // Checking if the elements have been found, otherwise throw an Error
      if (!(parent || arrows.length))
        throw new Error('There are no such elements. Please check the classes');
      // One of the arrows should contain class named 'left' and the other 'right', otherwise iamma include
      if (!arrows[0].classList.contains('left'))
        arrows[0].classList.add('left');
      if (!arrows[1].classList.contains('right'))
        arrows[1].classList.add('right');

      const handleChildrenClicks = (e: Event) => { e.preventDefault() };
      const handleMouseDown = () => { isDragging = true }
      const handleMouseUp = () => { isDragging = false };
      const handleMouseLeave = () => { isDragging = false };
      parEvs.push(
        ['pointerdown', handleMouseDown], 
        ['pointerup', handleMouseUp], 
        ['pointerleave',handleMouseLeave]
      )

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
      const dragging = (e: PointerEvent) => {
        e.preventDefault();
        // e.stopPropagation();

        if (!isDragging) {
          parent.childNodes.forEach(el => {
            el.removeEventListener('click', handleChildrenClicks);
          });
          parent.classList.remove('dragging')
          return;
        }
        // if (!isDragging) return;
          parent.childNodes.forEach(el => {
            el.addEventListener('click', handleChildrenClicks);
          })
          parent.classList.add('dragging')
          parent.scrollLeft -= e.movementX/3;

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
      arrows.forEach(ar => ar.addEventListener('click', handleArrowsClick) // addEvListener for Arrows
      ); // forEach
      arrEvs.push( ['click', handleArrowsClick] )

    })


    // Cleanings when component is unmounted
    return () => {
      const parents = document.querySelectorAll('.rsl__container_list') as NodeListOf<HTMLUListElement>
      if (parents.length) {

        parents.forEach(p => {
          parEvs.forEach(ev => {
            p.removeEventListener(ev[0] as string, ev[1] as EventListener)
          })
          const arrows = p.querySelectorAll('.rsl__container__shadow__arrow') as NodeListOf<HTMLElement>
          arrows.forEach(a => {
            arrEvs.forEach(e => {
              a.removeEventListener(e[0], e[1])
            }) // arrEvs forEach
          }) // arrows forEach
        }); // parents forEach
      }; // if stt
      if (timeout) clearTimeout(timeout);
    }; // end of the function

  }, [])

  return;
}; // end of the hook