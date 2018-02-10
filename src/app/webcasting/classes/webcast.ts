export class Webcast {
  id: string;
  legacy: number;
  company_name: string;
  ci_Company: string;
  em_Entity: number;
  title: string;
  description: string;
  occur: string;
  publish: string;
  hidden: string;
  expire: string;
  audio: string;
  isLive: boolean;
  presentationType: string;
  conferenceNumber: string;
  replayNumber: string;
  replayPasscode: string;
  resources: Resources;

  constructor() {
    this.id = null;
    this.legacy = null;
    this.company_name = '';
    this.ci_Company = null;
    this.em_Entity = null;
    this.title = null;
    this.description = '';
    this.occur = '';
    this.publish = '';
    this.hidden = '';
    this.expire = '';
    this.audio = '';
    this.isLive = false;
    this.presentationType = '';
    this.conferenceNumber = '';
    this.replayNumber = '';
    this.replayPasscode = '';
    this.resources = new Resources();
  }
}

class Resources {
  logo: object[];
  website: object[];
  link: object[];
  slide: object;
  audio: object;

  constructor() {
    this.logo = [];
    this.website = [];
    this.link = [];
    this.slide = {};
    this.audio = {};
  }
}
