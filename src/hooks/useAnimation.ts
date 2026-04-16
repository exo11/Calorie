import { lineSegments, lineCircle } from 'utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import type { RefObject } from 'react'
import type { ICompute } from 'model'

function useAnimation(state: number, scope: RefObject<null>, compute: ICompute) {

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    
    gsap.timeline({ defaults: {ease: 'back.out', opacity: 0, duration: .5} })
      // COMPONENTS/CALC/STATE
      .from('.gsapCalcState', {y: -20,  stagger: .2})
      // COMPONENTS/CALC/BTN
      .from('.gsapCalcBtn', {scale: .5}, '<') 

    if (state === 0) {
      gsap.timeline({ defaults: { duration: .5, ease: 'back.out', opacity: 0, stagger: .2} })
        // COMPONENTS/FORM/INPUT && SELECT
        .from('.gsapFormElement', {x: -100}) 
        // COMPONENTS/FORM/RADIO && RADIOGROUP
        .from('.gsapFormRadio', {x: 100}, '<') 
    }
    
    if (state === 1) {
      gsap.timeline({ defaults: { duration: .5, ease: 'power1.out', opacity: 1} })
        // COMPONENTS/LINE/SEGMENTS
        .to('.gsapLineSegment', { x: 0, stagger: {each: .1, from: 'end'}}) 
        // COMPONENTS/LINE/CONTENT
        .to('.gsapLineContent > div', {}, '<') 
        // COMPONENTS/LINE/NUMBERS
        .to('.gsapLineNumber' , {}) 
        // COMPONENTS/LINE/SEGMENTS
        .to('.gsapLineBall', { left: lineCircle(compute.weight, lineSegments(compute)).pr}, '<') 
    }

    if (state === 2) {
      // COMPONENTS/CARDS/CARD
      gsap.to('.gsapCardsBtn', { scale: 1, duration: .5, ease: 'back.out'}) 
      // COMPONENTS/CARDS/CARDS
      gsap.from('.gsapCardsCard', {y: -20, opacity: 0, stagger: .1, duration: .7, ease: 'back.out'})
    }

    if (state === 3) {
      // COMPONENTS/RESULT/CARD
      gsap.to('.gsapResultCard', { y: 0, opacity: 1, duration: .5, ease: 'bounce.out'})
    }
    
  }, { dependencies: [state], scope })

}

export default useAnimation