import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompensationHomeComponent } from './compensation-home/compensation-home.component';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { DrLeaveRequestComponent } from './dr-leave-request/dr-leave-request.component';
import { AllCompHistoryComponent } from './all-comp-history/all-comp-history.component';
import { AssignmentStatusComponent } from './assignment-status/assignment-status.component';
import { HelpComponent } from './help/help.component';
import { AllCompRequestComponent } from './all-comp-request/all-comp-request.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { HqOpsComponent } from './hq-ops/hq-ops.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoutingComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomePageComponent,
    CompensationHomeComponent,
    MyCompRequestsComponent,
    DrLeaveRequestComponent,
    AllCompHistoryComponent,
    AssignmentStatusComponent,
    HelpComponent,
    AllCompRequestComponent,
    OnboardingListComponent,
    HqOpsComponent
    // RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
