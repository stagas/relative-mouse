import { getElementOffset } from 'get-element-offset'

export const getRelativeMouseFromEvent = (el: HTMLElement, event: MouseEvent | PointerEvent) =>
  getRelativeMouse(el, { x: event.pageX, y: event.pageY })

export const getRelativeMouse = (el: HTMLElement, pos: { x: number; y: number }) => {
  let x = 0
  let y = 0
  const offset = getElementOffset(el)
  // when moving cursor outside the window it very weirdly wraps
  // its coordinates so this is correcting it (on Chrome/Linux)
  let py = pos.y
  if (py > 16384) py -= 32768
  x = pos.x - offset.x
  y = py - offset.y
  return { x, y }
}
