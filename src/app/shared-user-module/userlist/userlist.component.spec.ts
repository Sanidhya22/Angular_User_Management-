import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let de : DebugElement;
  let sampleusers=[
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
  let  Activeuserdata =[
    { id:"user1","firstName":"Saniddhya",lastName:"Nigam",age: 22,"login": "Sani1",password:"xyz22",isDeleted: false},
    { id:"user3","firstName":"darsh",lastName:"Nigam",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},
    { id:"user5","firstName":"Rashi",lastName:"Nigam",age: 22,"login": "Rash1",password:"xyz22",isDeleted: false},
    { id:"user6","firstName":"Pooja",lastName:"Nigam",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: false},
    { id:"user8","firstName":"Siddu",lastName:"Nigam",age: 65,"login": "Siddu1",password:"xyz22",isDeleted: false},
    { id:"user10","firstName":"Vineet",lastName:"Nigam",age: 42,"login": "Vine1",password:"xyz22",isDeleted: false},
    { id:"user12","firstName":"Ananya",lastName:"Nigam",age: 42,"login": "Anan1",password:"xyz22",isDeleted: false},
    { id:"user14","firstName":"Daksh",lastName:"Nigam",age: 55,"login": "Dak1",password:"xyz22",isDeleted:false}
  ]
  let deactiveduserlist=[
    { id:"user2","firstName":"Mohit",lastName:"Nigam",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: true},
    { id:"user4","firstName":"Nishant",lastName:"Nigam",age: 25,"login": "Nishan1",password:"xyz22",isDeleted: true},
    { id:"user7","firstName":"Gourav",lastName:"Nigam",age: 42,"login": "Sou1",password:"xyz22",isDeleted: true},
    { id:"user9","firstName":"Shanu",lastName:"Nigam",age: 32,"login": "Shanu11",password:"xyz22",isDeleted:true},
    { id:"user11","firstName":"Manan",lastName:"Nigam",age: 52,"login": "Mana1",password:"xyz22",isDeleted: true},
    { id:"user13","firstName":"Sabir",lastName:"Nigam",age: 31,"login": "Sa1",password:"xyz22",isDeleted: true},
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    de=fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit Hook ,fetch Active users list', () => {
    component.item=false
    fixture.detectChanges();
    component.ngOnInit()
    expect(component.users).toEqual(Activeuserdata)
  });

  it('OnInit Hook ,fetch Deactive users list', () => {
    component.item=true
    fixture.detectChanges();
    component.ngOnInit()
    expect(component.users).toEqual(deactiveduserlist)
  });

  it('OnInit Hook ,fetch All users list', () => {
    expect(component.users).toEqual(sampleusers)
  });
});

