import {Deserializable} from "../deserializable";
import {Hits} from "../hits";

interface SearchMetadata {
  post_id: number;
  hits:any;
  title:string;
  next_results: string;
  tags: string;
  refresh_url: string;
  count: number;
  author_id: number;
  date_from:string;
  date_to:string;
}


export class PostResponse implements Deserializable { 
	hits: Hits[];
	searchMetadata: SearchMetadata;

	deserialize(input: any) {
		Object.assign(<any>this, input);

		input.hits && (this.hits = input.hits.map((hits: Hits) => new Hits().deserialize(hits)));

		return this;
	}
  }
