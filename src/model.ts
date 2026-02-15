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

/* PROPS */

export interface BtnProps {
  form?: string, 
  children: React.ReactNode
}

export interface CalcProps {
  state: number, 
  how: boolean, 
  onHow: () => void,
  children: React.ReactNode
}

export interface StateProps {
  num: number,
  group: string 
}

export interface LineProps {
  compute: ICompute,
  onHow: () => void
}

export interface HowProps {
  how: boolean, 
  onHow: () => void
}

export interface CardProps {
  diet: IDiet
  onResult: (evt: React.MouseEvent) => void, 
  children?: React.ReactNode
}

export interface CardsProps {
  compute: ICompute,
  plan: string, 
  onResult: (evt: React.MouseEvent) => void
}

export interface FormProps {
  verify?: string, 
  onSubmit: (evt: React.FormEvent) => void,
  onChange: () => void
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
  weight: number, 
  segments: ISegment[]
}

export interface ColProps {
  cls: {col: string, title: string},
  type: string, 
  title: string, 
  children?: React.ReactNode
}

export interface ResultProps {compute: 
  ICompute, 
  result: IDiet
}

export interface ResultCardProps {
  result: IDiet, 
  date: string
}