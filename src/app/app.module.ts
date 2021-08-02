import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';

// Services
import { DataProviderService } from './services/data-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftMenuComponent,
    ListItemComponent,
    ListComponent,
    SearchComponent,
    MainContainerComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PdfViewerModule,
    HttpClientModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
