import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  standalone: false,
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css'
})
export class DynamicRoutingComponent implements OnInit {

  noteId!: string | null;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((hel) => {
      this.noteId = hel.get('id');
    });
  }


}
