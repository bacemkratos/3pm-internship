import {Component, OnInit} from '@angular/core';
import {AnimationBuilder, AnimationService} from 'css-animator';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styles: [`.main-img {
    position: static !important;
  }`]
})
export class AnimationsComponent implements OnInit {

  public animation = 'bounce';
  public isVisible = true;
  public isAnimating = false;

  public animator: AnimationBuilder;

  constructor(animationService: AnimationService) {
    this.animator = animationService.builder();
    this.animator.useVisibility = true;
  }

  ngOnInit() {
  }

  public animate(element: HTMLElement, animation: string, status: boolean) {
      if (status) {
          this.animation = animation;
      }
    this.isAnimating = true;

    this.animator
        .setType(this.animation)
        .setDuration(1500)
        .animate(element)
        .then(() => {
          this.isAnimating = false;
        })
        .catch(e => {
          this.isAnimating = false;
          console.log('css-animator: Animation aborted', e);
        });
  }

}
