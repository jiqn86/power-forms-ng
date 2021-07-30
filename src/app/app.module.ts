import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

// Services

import { DataProviderService } from './services/data-provider.service';
import { ListSearchComponent } from './components/list-search/list-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftMenuComponent,
    ListItemComponent,
    ListComponent,
    SearchComponent,
    MainContainerComponent,
    ListSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
