import { lineSegments, lineCircle } from 'utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import type { RefObject } from 'react'
import type { ICompute } from 'model'

function useAnimation(state: number, scope: RefObject<null>, compute: ICompute) {

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    // COMPONENTS/CALC/STATE
    gsap.from('.gsapCalcState', { y: -20, opacity: 0, stagger: .2, duration: .5, ease: 'back.out'})
    // COMPONENTS/CALC/BTN
    gsap.from('.gsapCalcBtn', { scale: .5, opacity: 0, duration: .5, ease: 'back.out'}) 

    if (state === 0) {
      gsap.timeline({ defaults: { duration: .5, ease: 'back.out', opacity: 0} })
        // COMPONENTS/FORM/INPUT && SELECT
        .from('.gsapFormElement', {x: -100, stagger: .2}) 
        // COMPONENTS/FORM/RADIO && RADIOGROUP
        .from('.gsapFormRadio', {x: 100, stagger: .2}, '<') 
    }
    
    if (state === 1) {
      const {pr} = lineCircle(compute.weight, lineSegments(compute))
      gsap.timeline({ defaults: { duration: .5, ease: 'power1.out', opacity: 1} })
        // COMPONENTS/LINE/SEGMENTS
        .to('.gsapLineSegment', { x: 0, stagger: {each: .1, from: 'end'}}) 
        // COMPONENTS/LINE/CONTENT
        .to('.gsapLineContent > div', {}, '<') 
        // COMPONENTS/LINE/NUMBERS
        .to('.gsapLineNumber' , {}) 
        // COMPONENTS/LINE/SEGMENTS
        .to('.gsapLineBall', { left: pr}, '<') 
    }

    if (state === 2) {
      // COMPONENTS/CARDS/CARD
      gsap.to('.gsapCardsBtn', { scale: 1, duration: .5, ease: 'back.out'}) 
    }

    if (state === 3) {
      // COMPONENTS/RESULT/CARD
      gsap.to('.gsapResultCard', { y: 0, opacity: 1,duration: .5, ease: 'bounce.out'})
    }
    
  }, { dependencies: [state], scope })

}

export default useAnimation