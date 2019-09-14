import { validate, Max } from "class-validator"

export default class Title {

  @Max(10, {message: "Title is too long"})
  private value: string

  constructor(value: string){
    this.value = value
  }
}
