// import { useEffect, useState } from 'react'

// interface AnimatedCounterProps {
//   end: number
//   duration?: number
//   label?: string
// }

// export function AnimatedCounter({ end, duration = 2000, label = 'Counter' }: AnimatedCounterProps) {
//   const [count, setCount] = useState<number>(0)

//   useEffect(() => {
//     let startTime: number | null = null
//     let animationFrameId: number

//     const easeOutQuad = (t: number) => t * (2 - t)

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp
//       const progress = timestamp - startTime
//       const percentage = easeOutQuad(Math.min(progress / duration, 1))
//       const currentCount = Math.floor(percentage * end)

//       setCount(currentCount)

//       if (percentage < 1) {
//         animationFrameId = requestAnimationFrame(animate)
//       }
//     }

//     if (end === 0) {
//       setCount(0)
//       return
//     }

//     animationFrameId = requestAnimationFrame(animate)

//     return () => cancelAnimationFrame(animationFrameId)
//   }, [end, duration])

//   return (
//     <div className="text-center">
//       <div className="text-4xl font-bold text-primary mb-2" aria-live="polite">
//         {count}+
//       </div>
//       <p className="text-muted-foreground">{label}</p>
//     </div>
//   )
// }
