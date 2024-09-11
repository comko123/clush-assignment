type component = React.ComponentType

type children = React.ReactNode

type svgBundle = {
  item: todo
  setState: open<modifyTodo>[string]
}

type progessSvg = {
  changeState: todo
}

type addTodo = { state: modifyTodo } & Pick<svgBundle, "setState">
