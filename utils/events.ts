export function callMeBabyAfterComponentIsMounted(){
  const ul = document.querySelector('.genres') as HTMLUListElement
  const lis = [...document.querySelectorAll('.genres .genre')] as HTMLLinkElement[]
  const arrows = [...document.querySelectorAll('.shadow')] as HTMLDivElement[]
  let isDragging = false;

  // Handling draggability of UL Element
  const dragging = (e:MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    ul.scrollLeft -= e.movementX
  };
  ul.addEventListener('mousedown', () => isDragging = true);
  ul.addEventListener('mouseup', () => isDragging = false);
  ul.addEventListener('mousemove', dragging);
  // Adding EventListener to Arrows
  arrows.forEach(ar => ar.addEventListener('click', 
    (e) => {
      const target = e.currentTarget as HTMLDivElement;
      ul.scrollLeft += target.classList.contains('left') 
        ? -350 
        : target.classList.contains('right')
          ? 350
          : 0;
      setTimeout(() => handleIcons(), 50);
    })
  );
  // Handling visiblity of Arrows
  const handleIcons = () => {
    const x = Math.round(ul.scrollLeft);
    const xMax = ul.scrollWidth - ul.clientWidth
    x > 0  ? arrows[0].classList.remove('hide') : arrows[0].classList.add('hide')
    xMax > x ? arrows[1].classList.remove('hide') : arrows[1].classList.add('hide')
  }

}