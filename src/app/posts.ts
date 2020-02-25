import {Deserializable} from "./deserializable";
import {Author} from "./auther";


export class Posts implements Deserializable {
  id: number;
  title: string;
  author: Author;

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}
