import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../card/card.component";
import {Field} from "../post-filter/post-filter.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], query: string = '', field: Field = 'no_filter'): Post[] {
    if (!query.trim() || field === 'no_filter') {
      return posts;
    }
    return posts.filter(post => {
      return post[field as keyof Post].toLowerCase().includes(query.toLowerCase())
    });
  }
}
