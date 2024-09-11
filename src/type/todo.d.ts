interface todo {
  title: string
  body: string
  important: string
  startDate: string
  endDate: string
  state: "progess" | "complete"
  id: string
}

interface selectTodo {
  view: boolean
  item: todo
}

interface modifyTodo extends selectTodo {
  modify: boolean
}
