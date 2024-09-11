type component = React.ComponentType

type children = React.ReactNode

type svgBundle = {
  item: todo
  setState: open<selectTodo>[string]
}

type progessSvg = {
  changeState: todo
}

type addTodo = { state: modifyTodo } & Pick<svgBundle, "setState">
