type component = React.ComponentType

type children = React.ReactNode

type svgBundle = Pick<todo, "id" | "state"> & Pick<setterFn<boolean>, "setFn">

type progessSvg = Omit<svgBundle, "state"> & {
  setterFn: open<boolean>[string]
  changeState: todo
}
