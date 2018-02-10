
export class Company {
  id: number;
  name: string;
  business_description_long: string;
  website: string;
  phone: string;
  email: string;
  social: Social;
  address: object;
  securityListings: object;
  likes: object;
  interest: object;
  founder: string;
  ceo: string;

  constructor() {
    this.id = null;
    this.name = '';
    this.business_description_long = '';
    this.website = '';
    this.phone = '';
    this.email = '';
    this.social = new Social();
    this.address = {};
    this.securityListings = {};
    this.likes = new Likes();
    this.interest = new Interest();
    this.founder = '';
    this.ceo = '';
  }
}

class Social {
  bio: string;
  facebook: string;
  linkedIn: string;
  picture: string;
  twitter: string;
  website: string;

  constructor() {
    this.bio = '';
    this.facebook = '';
    this.linkedIn = '';
    this.picture = '';
    this.twitter = '';
    this.website = '';
  }
}

class Likes {
  pro: Like;
  joe: Like;

  constructor() {
    this.pro = new Like;
    this.joe = new Like;
  }
}

class Like {
  dislike: number;
  like: number;

  constructor() {
    this.dislike = 0;
    this.like = 0;
  }
}

class Interest {
  isBookmarked: boolean;
  isDisliked: boolean;
  isFollowed: boolean;
  isLiked: boolean;
  rating: number;

  constructor() {
    this.isBookmarked = false;
    this.isDisliked = false;
    this.isFollowed = false;
    this.isLiked = false;
    this.rating = 0;
  }
}

