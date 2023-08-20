import { Component } from '@angular/core';
import { PublicService } from 'src/app/shared/services/public.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  version?: string;
  appEnvironment?: string;

  constructor (
    private publicService: PublicService
  ) {}

  ngOnInit (){
    this.publicService.version()
      .subscribe(data => this.version = data)

    this.appEnvironment = this.publicService.appEnvironment();
  }
}
