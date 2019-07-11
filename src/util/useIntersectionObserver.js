import { useState, useEffect } from 'react'
import 'intersection-observer'

const defaultOptions = {
  threshold: 0.25,
}

export default function useIntersectionObserver(ref, options = defaultOptions) {
  const [state, setState] = useState({
    isInView: false,
    wasTriggered: false,
    entry: null,
  })

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].intersectionRatio >= options.threshold) {
      setState({
        isInView: true,
        wasTriggered: true,
        entry: entries[0],
      })
      obs.unobserve(ref.current)
    }
  }, options)

  useEffect(() => {
    if (ref.current && !state.wasTriggered) {
      observer.observe(ref.current)
    }
  }, [])

  return [state.isInView, state.entry]
}
