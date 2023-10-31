export default function xSmoothScroll(obj: Record<string, any>) {
  // https://github.com/ademmeral/modules/xSmoothScroll
  let reqId: number;
  if (!obj.position) obj.position = 'y';
  if (!obj.target) obj.target = 0;
  if (!obj.duration) obj.duration = 1000;
  if (!obj.element) obj.element = document.body; // Fix the default element value
  let { position, target, duration, element } = obj;
  
  const easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const startTime = Date.now();
  let startPos = position === 'y' ? element.scrollTop : element.scrollLeft;

  function scrollStep() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easing(progress);
    const _scrollTo = startPos + (target - startPos) * ease;
    position === 'y' ? element.scrollTop = _scrollTo : element.scrollLeft = _scrollTo;
    startPos = _scrollTo;

    if (progress < 1) {
      reqId = window.requestAnimationFrame(scrollStep);
    }
  }

  reqId = requestAnimationFrame(scrollStep);
  return {
    clear: () => window.cancelAnimationFrame(reqId)
  }
}