import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit, OnDestroy {

  artist;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private artistService: ArtistService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.artist = this.artistService.getArtist(params['artistId']);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
