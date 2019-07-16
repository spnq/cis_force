import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatonService } from '../paginaton.service';
import { iDatum } from '../../model';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  id: number;
  user: iDatum;
  message: string;
  constructor(private route: ActivatedRoute, private paginatorService: PaginatonService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.user = this.paginatorService.userStore.filter( el => el.id === this.id)[0]
    if (!this.user) {
      this.paginatorService.getSingleUser(this.id).subscribe( user => this.user = user.data);
    }
  }
}
