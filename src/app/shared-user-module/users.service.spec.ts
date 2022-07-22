import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let userdata =[
    { id:"user1","firstName":"Saniddhya",lastName:"Nigam",age: 22,"login": "Sani1",password:"xyz22",isDeleted: false},
    { id:"user2","firstName":"Mohit",lastName:"Nigam",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: true},
    { id:"user3","firstName":"darsh",lastName:"Nigam",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},
    { id:"user4","firstName":"Nishant",lastName:"Nigam",age: 25,"login": "Nishan1",password:"xyz22",isDeleted: true},
    { id:"user5","firstName":"Rashi",lastName:"Nigam",age: 22,"login": "Rash1",password:"xyz22",isDeleted: false},
    { id:"user6","firstName":"Pooja",lastName:"Nigam",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: false},
    { id:"user7","firstName":"Gourav",lastName:"Nigam",age: 42,"login": "Sou1",password:"xyz22",isDeleted: true},
    { id:"user8","firstName":"Siddu",lastName:"Nigam",age: 65,"login": "Siddu1",password:"xyz22",isDeleted: false},
    { id:"user9","firstName":"Shanu",lastName:"Nigam",age: 32,"login": "Shanu11",password:"xyz22",isDeleted:true},
    { id:"user10","firstName":"Vineet",lastName:"Nigam",age: 42,"login": "Vine1",password:"xyz22",isDeleted: false},
    { id:"user11","firstName":"Manan",lastName:"Nigam",age: 52,"login": "Mana1",password:"xyz22",isDeleted: true},
    { id:"user12","firstName":"Ananya",lastName:"Nigam",age: 42,"login": "Anan1",password:"xyz22",isDeleted: false},
    { id:"user13","firstName":"Sabir",lastName:"Nigam",age: 31,"login": "Sa1",password:"xyz22",isDeleted: true},
    { id:"user14","firstName":"Daksh",lastName:"Nigam",age: 55,"login": "Dak1",password:"xyz22",isDeleted:false}
  ]
  let sampeluser ={id:"user7","firstName":"Gourav",lastName:"Nigam",age: 42,"login": "Sou1",password:"xyz22",isDeleted: true}
  let sampleuserid="user7"
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getallusers should ,by default,return an object array', () => {
    expect(service.getallusers()).toEqual(userdata);
  });

  it('getuserbyid should ,return an object of user details', () => {
  expect(service.getuserbyid(sampleuserid)).toEqual(sampeluser); 
  });

});
