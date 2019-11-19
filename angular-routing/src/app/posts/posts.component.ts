import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });
    this.route.fragment.subscribe(fragment => {
      console.log(fragment);
    })
  }

  showIdsProgramm() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: 'program-fragment'
    });
  }

}
