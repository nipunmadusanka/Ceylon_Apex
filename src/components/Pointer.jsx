import {useEffect, useRef } from "react"

export default function Pointer() {
  const pointerRef = useRef(null)
  const isOverLinks = useRef(false)
  
  const handlePointer = (e) => {
    if (pointerRef.current !== null) {
      pointerRef.current.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`
    }
    if (isOverLinks.current == true && pointerRef.current !== null) {
      pointerRef.current.classList.remove('w-9', 'h-9')
      pointerRef.current.classList.add('w-12', 'h-12')
    } else {
      if (pointerRef.current !== null) {
        pointerRef.current.classList.remove('w-12', 'h-12')
        pointerRef.current.classList.add('w-9', 'h-9')
      }
    }
  }

  useEffect(() => {
    if (pointerRef.current !== undefined) {
      pointerRef.current.style.transition = "width 150ms ease 0s, height 150ms ease 0s"
    }
    const links = document.querySelectorAll('a, button, button *, .cursor-pointer, .scalepointer')
    let enter, exit
    links.forEach(item => {
      enter = item.addEventListener('mouseover', (e) => {
        isOverLinks.current = true
        handlePointer(e)
      })
      exit = item.addEventListener('mouseout', (e) => {
        isOverLinks.current = false
        handlePointer(e)
      })
    })
    const mouseMove = window.addEventListener('mousemove', (e) => {
      handlePointer(e)
    })
    return () => {
      if (enter !== undefined && exit !== undefined) {
        links.forEach(item => {
          item.removeEventListener('mouseover', enter)
          item.removeEventListener('mouseout', exit)
        })
      }
      window.removeEventListener('mousemove', mouseMove)
    }
  },[])
  return(
    <div className="w-12 h-12 z-40 relative">
      <div
        className={`${!isOverLinks.current && "w-9 h-9"} border-red-600 border rounded-full bg-transparent fixed top-0 left-0 z-50 pointer-events-none`}
        ref={pointerRef} 
      />
    </div>
  )
}