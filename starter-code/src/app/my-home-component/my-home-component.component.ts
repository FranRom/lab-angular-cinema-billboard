import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieArray : Array<Object>;
  constructor(public cinemaService:MoviesService) { }

  ngOnInit() {
    this.movieArray = this.cinemaService.getMovies();
  }

}
