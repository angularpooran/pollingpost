import {Deserializable} from "./deserializable";

export class Author implements Deserializable {
  id: number;
  name: string;
  screen_name: string;

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}