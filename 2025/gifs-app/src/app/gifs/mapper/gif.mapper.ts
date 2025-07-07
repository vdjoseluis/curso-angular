import { Gif } from "@gifs/interfaces/gif.interace";
import { GiphyItem } from "@gifs/interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    }
  }
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
