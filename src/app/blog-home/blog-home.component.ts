import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../app.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
})
export class BlogHomeComponent {
  loggedInUser: string | null = '';
  allBlogs: Blog[] = [];
  isBlogCreated: boolean = false;
  isCreationRequested: boolean = false;
  blogForm: FormGroup = new FormGroup({
    blogTitle: new FormControl(),
    blogDescription: new FormControl(),
  });

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loggedInUser = this.route.snapshot.paramMap.get('name');
    this.getAllBlogs();
  }

  createBlog() {
    this.isBlogCreated = false;
    this.appService.postBlog(this.blogForm.value).subscribe(
      (data: any) => {
        this.isCreationRequested = true;
        if (data) {
          this.isBlogCreated = true;
          this.blogForm.reset();
          this.getAllBlogs();
        } else {
          this.isBlogCreated = false;
        }
      },
      () => {
        this.isBlogCreated = false;
      }
    );
  }

  getAllBlogs() {
    this.appService.getPosts().subscribe((data: any) => {
      this.allBlogs = data;
    });
  }
}
