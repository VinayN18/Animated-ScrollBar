import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  ngAfterViewInit() {
    gsap.utils.toArray('.section').forEach((section: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true, // Pin the section to keep it fixed on the screen during the animation
          start: 'top top', // Animation starts when the top of the section reaches the top of the viewport
          end: 'bottom top', // Animation ends when the bottom of the section reaches the top of the viewport
          scrub: true, // Smooth animation during scrolling
          markers: true, // Add markers for debugging (optional)
        },
      });

      tl.from(section.querySelectorAll('.paragraph, .images'), {
        y: 100, // Move the paragraphs and images 100 pixels vertically
        opacity: 0, // Fade in the paragraphs and images
        duration: 1, // Animation duration
        stagger: 0.2, // Add stagger effect for multiple elements
      });

      tl.to(section.querySelectorAll('.paragraph, .images'), {
        y: 0, // Reverse the animation to bring the paragraphs and images back to their original position
        opacity: 1, // Reverse the opacity animation
        duration: 1, // Animation duration
        stagger: 0.2, // Add stagger effect for multiple elements
      });

      tl.from(section.querySelectorAll('.imagee'), {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
      tl.to(section.querySelectorAll('.imagee'), {
        y: 0, // Reverse the animation to bring the paragraphs and images back to their original position
        opacity: 1, // Reverse the opacity animation
        duration: 1, // Animation duration
        stagger: 0.2, // Add stagger effect for multiple elements
      });
      tl.from(section.querySelectorAll('.im'), {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
      tl.to(section.querySelectorAll('.im'), {
        x: 0, // Reverse the animation to bring the paragraphs and images back to their original position
        opacity: 1, // Reverse the opacity animation
        duration: 5, // Animation duration
        stagger: 0.2, // Add stagger effect for multiple elements
      });
    });
  }
}
