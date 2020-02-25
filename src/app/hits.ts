import {Deserializable} from "./deserializable";
import {Posts} from "./posts";

export class Hits implements Deserializable {
  posts:Posts[]

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}