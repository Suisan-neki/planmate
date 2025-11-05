import { useEffect, useState } from 'react'

declare global {
  interface Window {
    __grid?: boolean
    __gridStep?: number
    __gridOpacity?: number
    __imgOverlay?: string
    __imgOpacity?: number
  }
}

export function DevOverlays() {
  const [grid, setGrid] = useState<boolean>(() => window.__grid ?? JSON.parse(localStorage.getItem('dev_grid') ?? 'false'))
  const [gridStep, setGridStep] = useState<number>(() => window.__gridStep ?? Number(localStorage.getItem('dev_grid_step') ?? '8'))
  const [gridOpacity, setGridOpacity] = useState<number>(() => window.__gridOpacity ?? Number(localStorage.getItem('dev_grid_opacity') ?? '0.25'))
  const [img, setImg] = useState<string | undefined>(() => window.__imgOverlay ?? localStorage.getItem('dev_img_overlay') ?? undefined)
  const [imgOpacity, setImgOpacity] = useState<number>(() => window.__imgOpacity ?? Number(localStorage.getItem('dev_img_opacity') ?? '0.3'))

  useEffect(() => {
    window.__grid = grid; localStorage.setItem('dev_grid', JSON.stringify(grid))
    window.__gridStep = gridStep; localStorage.setItem('dev_grid_step', String(gridStep))
    window.__gridOpacity = gridOpacity; localStorage.setItem('dev_grid_opacity', String(gridOpacity))
    window.__imgOverlay = img; img ? localStorage.setItem('dev_img_overlay', img) : localStorage.removeItem('dev_img_overlay')
    window.__imgOpacity = imgOpacity; localStorage.setItem('dev_img_opacity', String(imgOpacity))
    // notify listeners in same window
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [grid, gridStep, gridOpacity, img, imgOpacity])

  // listen for external updates (controls dispatch a custom event)
  useEffect(() => {
    const onChange = () => {
      setGrid(window.__grid ?? JSON.parse(localStorage.getItem('dev_grid') ?? 'false'))
      setGridStep(window.__gridStep ?? Number(localStorage.getItem('dev_grid_step') ?? '8'))
      setGridOpacity(window.__gridOpacity ?? Number(localStorage.getItem('dev_grid_opacity') ?? '0.25'))
      setImg(window.__imgOverlay ?? localStorage.getItem('dev_img_overlay') ?? undefined)
      setImgOpacity(window.__imgOpacity ?? Number(localStorage.getItem('dev_img_opacity') ?? '0.3'))
    }
    window.addEventListener('dev-overlay-change', onChange)
    return () => window.removeEventListener('dev-overlay-change', onChange)
  }, [])

  const gridStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,${gridOpacity}) 1px, transparent 1px)`,
    backgroundSize: `${gridStep}px ${gridStep}px`,
  }

  return (
    <>
      {img && (
        <img src={img} alt="overlay" style={{ opacity: imgOpacity }} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
      )}
      {grid && <div style={gridStyle} className="pointer-events-none absolute inset-0" />}
    </>
  )}

export function setOverlayOptions(opts: {
  grid?: boolean
  gridStep?: number
  gridOpacity?: number
  img?: string
  imgOpacity?: number
}) {
  if (opts.grid !== undefined) window.__grid = opts.grid
  if (opts.gridStep !== undefined) window.__gridStep = opts.gridStep
  if (opts.gridOpacity !== undefined) window.__gridOpacity = opts.gridOpacity
  if (opts.img !== undefined) window.__imgOverlay = opts.img
  if (opts.imgOpacity !== undefined) window.__imgOpacity = opts.imgOpacity
}
