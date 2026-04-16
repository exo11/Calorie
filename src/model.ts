export interface IUser {
  gender: 'male' | 'female', 
  age: string, 
  height: string, 
  weight: string, 
  activity: 'low' | 'middle' | 'high'
}

export interface IDiet {
  cal: number, 
  monthMinus: number,
  threeMonthMinus: number,
  newWeight: number,
  plan: string, 
  title: string
}

export interface ICompute {
  weight: number,
  height: number,
  ideal: number,
  diff: number,
  calories: number,
  diet: IDiet[]
}

export interface ISegment {
  name: string, 
  s: number, 
  f: number,
  color: string,
  border: string
}

interface ICircle {
  name: string,
  pr: string
}

export interface IContext {
  state: number, 
  how: boolean, 
  verify?: string, 
  compute: ICompute, 
  result: IDiet, 
  onHow: () => void, 
  onSubmit: (evt: React.FormEvent) => void,
  onChange: () => void, 
  onResult: (evt: React.MouseEvent) => void
}

/* PROPS */

export interface BtnProps {
  form?: string, 
  children: React.ReactNode
}

export interface StateProps {
  num: number,
  group: string 
}

export interface CardProps {
  diet: IDiet
  children?: React.ReactNode
}

export interface InputProps {
  id: string, 
  name: string, 
  holder: string, 
  verify?: string
}

export interface RadioProps {
  value: string, 
  label: string, 
  check?: boolean, 
  children: React.ReactNode
}

export interface SelectProps {
  id: string, 
  name: string, 
  verify?: string, 
  children: React.ReactNode
}

export interface WrapProps {
  cls: string,
  title: string, 
  type: string, 
  value: number
}

export interface SegmentsProps {
  circle: ICircle, 
  segments: ISegment[]
}

export interface ColProps {
  cls: {col: string, title: string},
  title: string, 
  children?: React.ReactNode
}