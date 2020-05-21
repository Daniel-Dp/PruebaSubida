import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TramitesPage } from './tramites.page';

describe('TramitesPage', () => {
  let component: TramitesPage;
  let fixture: ComponentFixture<TramitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TramitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
