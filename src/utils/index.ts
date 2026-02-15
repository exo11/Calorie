import type { IUser, ICompute, ISegment } from 'model'

export const addVerify = (user?: IUser) => {
  if (user) {
    const {gender: g, age: a, height: h, weight: w, activity: ac} = user
    const v = (value: string) => !value || value.length <= 1 || value.length > 3
    return !g ? 'gender' : v(a) ? 'age' : v(h) ? 'height' : v(w) ? 'weight' : !ac ? 'activity' : undefined
  }
}

export const calc = (user: IUser): ICompute => {

  const {gender: g, age, height, weight, activity} = user
  
  const a = Number(age)
  const h = Number(height)
  const w = Number(weight)
  
  const gen = (m: number, f: number) => g === 'male' ? m : f
	const formula = (x: number, y: number) => x + y * (0.393701 * h - 60)
	
  const broke = (h: number) => (h < 155 || h > 185) ? 0 : (h - 100) * gen(0.9, 0.85)
	const brokeBrug = (h: number) => h - (h < 165 ? 100 : h > 175 ? 110 : 105)
	const brokeAge = (a: number, h: number) => h - (a > 40 ? 100 : 110)
	const lorenco = (a: number, h: number) => (a < 18 || (h < 140 || h > 220)) ? 0 : (h - 100) - ((h - 150) / gen(4, 2))
	const potton = (h: number) => h - 100 - h / gen(200, 100)
	const robinson = () => formula(gen(52, 49), gen(1.9, 1.7))
	const miller = () => formula(gen(56.2, 53.1), gen(1.41, 1.36))
	const hamvi = () => formula(gen(48, 45.5), gen(2.7, 2.2))
	const devin = () => formula(gen(50, 45.5), 2.3)
	const kreff = (a: number, h: number) => (h - 100 + (a / 10)) * 0.9
	const nagler = () => formula(gen(48, 45.3), gen(2.7, 2.27))
	const metro = (a: number, h: number) => (a < 25 || a > 59) ? 0 : 50 + 0.75 * (h - 150) + (a - 20) / 4
	
  const calories = (a: number, h: number, w: number, activity: 'low' | 'middle' | 'high') => {
		const ratio = {low: 1.2, middle: 1.462, high: 1.725}
		return ((10 * w) + (6.25 * h) - (5 * a) + gen(5, -161)) * ratio[activity] 
	}

	const slim = (x: number, y: number, w: number) => {
    const c = x - y
    const g = gen(1400, 1200)
		const cal = c < g ? g : c
		const kg = Math.round((x - cal) / 256)
    const three = kg * 3

		return {
      cal: Math.round(cal), 
      monthMinus: kg, 
      threeMonthMinus: three,
      newWeight: w - three
    }
	}

	const arr = [
    {n: 'broke', w: broke(h)},
    {n: 'brokeBrug', w: brokeBrug(h)},
    {n: 'brokeAge', w: brokeAge(a, h)},
    {n: 'lorenco', w: lorenco(a, h)},
    {n: 'potton', w: potton(h)},
    {n: 'robinson', w: robinson()},
    {n: 'miller', w: miller()},
    {n: 'hamvi', w: hamvi()},
    {n: 'devin', w: devin()},
    {n: 'kreff', w: kreff(a, h)},
    {n: 'nagler', w: nagler()},
    {n: 'metro', w: metro(a, h)}
  ]
	
  const filter = arr.filter(obj => obj.w > 0)
  const ideal = filter.reduce((sum, obj) => sum + obj.w, 0) / filter.length
  const cal = calories(a, h, w, activity)
  const diet = [  
    {...slim(cal, 250, w), plan: 'comfort', title: 'Комфортный план'}, 
    {...slim(cal, 500, w), plan: 'fast', title: 'Быстрый план'}, 
    {...slim(cal, gen(1400, 1266), w), plan: 'extrim', title: 'Экстренный план'}
  ]
	
  return {weight: w, height: h, ideal, diff: w - ideal, calories: Math.round(cal), diet}

}

const initialDiet = [{cal: 0, monthMinus: 0, threeMonthMinus: 0, newWeight: 0, plan: '', title:''}]
export const initialCompute = {weight: 0, height: 0, ideal: 0, diff: 0, calories: 0, diet: initialDiet}
export const initialResult = initialDiet[0]

export const lineSegments = ({height, ideal}: ICompute) => {
  
  const n2 = (val: number) => Number(val.toFixed(2))
  const ln = (num: number) => n2(Math.pow(height * 0.01, 2) * num)
  const nt = (num: number) => n2(num + 0.01)
  
  return [
    {name: 'disadvantage', s: 0, f: ln(16), color:'bg-[#9DD6C9]', border: 'border-[#9DD6C9] border-7'}, 
    {name: 'standard', s: nt(ln(16)), f: n2(ideal), color:'bg-[#97BF4C]', border: 'border-[#97BF4C] border-7'},
    {name: 'excess', s: nt(ideal), f: ln(30), color:'bg-[#FBD578]', border: 'border-[#FBD578] border-7'},
    {name: 'obesity-one', s: nt(ln(30)), f: ln(35), color:'bg-[#FF8A00]', border: 'border-[#FF8A00] border-7'},
    {name: 'obesity-two', s: nt(ln(35)), f: ln(35) + 50, color:'bg-[#FF2222]', border: 'border-[#FF2222] border-7'}
  ]

}

export const lineCircle = (weight: number, segments: ISegment[]) => {
  const max = segments[segments.length - 1].f
  if (weight < max) {
    const obj = segments.find(seg => (weight >= seg.s && weight <= seg.f))
    if (obj) {
      const long = obj.f - obj.s
      const dot = weight - obj.s
      const precentage = `${Math.round((dot / long) * 100)}%`
      return {name: obj?.name, pr: precentage}
    }
    
  } 
  return {name:'obesity-two', pr: '99%'}
}

export const cardsDate = () => {
  const monthArr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  const day = 86400000
  const threeMonth = day * 90
  const date = new Date()
  const time = date.getTime() + threeMonth
  const dt = new Date(time)
  const today = `${date.getDate()} ${monthArr[date.getMonth()]}`
  const after = `${dt.getDate()} ${monthArr[dt.getMonth()]}`
  return {today: today, after: after}
}