import { RecoilState } from "recoil"

type select = "default" | "complete"

type selectTodo = {
  stash: select
  atom: RecoilState<[] | todo[]>
}
