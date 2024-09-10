type setState<type> = React.SetStateAction<type>

type setterFn<type> = {
  setFn: (value: setState<type>) => void
  value?: string
}

type open<type> = {
  [key: string]: React.Dispatch<setState<type>>
}
