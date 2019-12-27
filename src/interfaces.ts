// Defines the shape of component props and the todo object, or to type them


export interface BubbleListInterface {
  bubbles: Array<BubbleInterface>;
}

// Bubble
export interface BubbleInterface {
  id: number;
  category: string;
  ant: string;
  replacement: string;
  color: string;
}

// Nav Bar
export interface NavBarInterface {
  username: string;
  avatar: string;
  points: number;
}

// Todo interface
export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[]
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}