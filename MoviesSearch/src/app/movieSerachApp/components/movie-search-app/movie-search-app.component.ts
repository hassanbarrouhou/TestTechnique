import { Component, OnInit, Output } from '@angular/core';
import { MovieSearchAppService } from '../../movie-search-app/movie-search-app.service';
import { MovieSearchAppModel, SearchModel } from '../../models/movie-search-app.model';
import { Observable } from 'rxjs';


export interface Gg{
  name: string;
  count:number;
}



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}]


@Component({
  selector: 'app-movie-search-app',
  templateUrl: './movie-search-app.component.html',
  styleUrls: ['./movie-search-app.component.css']
})

export class MovieSearchAppComponent implements OnInit {
  detail_video: MovieSearchAppModel[];
  video_info: MovieSearchAppModel;
  value: string = '';
  name: string;
  favoritsWords: Gg[] = [];
  sortedFavorits: Gg[] = [];
  icon_star: string;

  constructor(private movieSearchService: MovieSearchAppService) { }
  // private router: Router, private route: ActivatedRoute

  ngOnInit() {
    this.icon_star = '../../assets/icons/star_black.svg';
    this.sortedFavorits = this.favoritsWords.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 3);
  }

  searchVideo(value: string){
    if(this.favoritsWords.find(x => x.name == this.value) != undefined){
      this.icon_star = '../../assets/icons/star_gold.svg';
    }
     return this.movieSearchService.getVideo(value).subscribe(data =>{
       this.detail_video = data.Search;
     });
  }
  async putInFavorit(){
    this.icon_star = '../../assets/icons/star_gold.svg';
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(100);
    setTimeout('', 2000);
    if(this.value != undefined && this.value != '') {
      if(this.detail_video != undefined && this.detail_video.length > 0) {
        const checkWord = this.favoritsWords.find(x => x.name == this.value);
        if (checkWord != undefined){
          this.favoritsWords.find(x => x.name == this.value).count += 1;
        } else {
          const newWord: Gg = {name:this.value, count: 1}
          this.favoritsWords.push(newWord);
        }
      }
    }
    this.ngOnInit();
  }
  incrementFavoritCount(fav: Gg){
   this.favoritsWords.find(x => x.name == fav.name).count += 1;
  }

  getVideoDetail(video: MovieSearchAppModel){
    this.video_info = video;
  }

}




