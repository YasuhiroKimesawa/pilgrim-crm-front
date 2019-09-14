import Title from "./Title";
import { ValidateNested } from "class-validator";

export default class Post {
  private id: number

  @ValidateNested()
  private title: Title

  private description: string

  constructor(id: number, title: Title, description: string){
    this.id = id
    this.title = title
    this.description = description
  }
}
