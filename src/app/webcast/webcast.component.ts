import { Component, OnInit } from '@angular/core';
import { State } from './webcast.model';


@Component({
  selector: 'app-webcast',
  templateUrl: './webcast.component.html',
  styleUrls: ['./webcast.component.scss']
})

export class WebcastComponent implements OnInit {

  state: State = {
    company: {
      id: 0,
      name: 'Standard Company Name',
      description: `
        This is a standard company that does pretty basic things.
        Standard and boiler-plate things that don't deviate too far from the norm.
        If you're looking for a company that is "out of the ordinary" or 
        "wild and crazy" or "decent and respectable", then this certainly would not
        be the company for you. Far from it. In fact, "respectable" is never a word I
        would use to describe this standard company. At some point, the text will
        need to be cut off so I can test the roll-out functionality.
      `,
      toggleDescriptionLong: false,
      website: 'www.google.com',
      phone: '(555) 555-5555',
      email: 'test@standardcompany.com',
      address: '1234 Tester Lane',
      symbol: 'SCP',
      marketCap: '1,000,000',
      fiscalYearEnd: 'never!',
      sector: 'Food Service',
      location: 'Tallahasse, Florida',
      imageUrl: 'https://github.com/IssuerDirect.png',
      stockPrice: '$106.70',
      dailyChange: -0.01,
      yearlyChange: 0.32
    },
    speaker: {
      name: 'Patrick J Ottensmeyer',
      imgUrl: 'https://github.com/kurtlippert.png'
    },
    social: {
      facebook: '',
      twitter: '',
      linkedIn: '',
      website: ''
    },
    sponsorImageUrl: 'https://github.com/IssuerDirect.png',
    rating: 'N/A'
  }

  isNegative(num: number) {
    return Math.sign(num) === -1;
  }

  abs(num: number) {
    return Math.abs(num);
  }

  constructor() { }

  ngOnInit() {
  }

}
