import { Component, Input } from '@angular/core';
import { Blog, Comment } from '../app.interface';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blogData!: Blog;

  comments: Comment[] = [];
  commentForm: FormGroup = new FormGroup({
    commentDetail: new FormControl(),
    blogId: new FormControl(),
  });
  showCommentForm: boolean = false;
  showComments: boolean = false;
  commentCreated: boolean = false;
  isCommentRequested: boolean = false;

  constructor(private appService: AppService) {}

  getComments() {
    this.showComments = !this.showComments;
    this.showCommentForm = false;
    this.appService.getComments(this.blogData.blogId).subscribe((data: any) => {
      this.comments = data;
    });
  }

  addComment() {
    this.showCommentForm = !this.showCommentForm;
    this.showComments = false;
  }

  postComment() {
    let newComment: Comment = {
      commentDetail: this.commentForm.get('commentDetail')?.value,
      blogId: this.blogData.blogId,
    };
    this.appService.createComment(newComment).subscribe((data: any) => {
      if (data.status === 200) {
        this.commentCreated = true;
        this.showCommentForm = false;
      } else {
        this.isCommentRequested = true;
        this.commentCreated = false;
      }
    });
  }
}
