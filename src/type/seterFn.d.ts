type setState<type> = React.SetStateAction<type>

type setterFn = {
  setFn: open<selectTodo>[string]
  value?: string
}

type open<type> = {
  [key: string]: React.Dispatch<setState<type>>
}
