import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HomePageComponent} from './home-page/home-page.component';
import { CompensationHomeComponent } from './compensation-home/compensation-home.component' ;
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component' ;
import { DrLeaveRequestComponent } from './dr-leave-request/dr-leave-request.component';
import { AllCompHistoryComponent } from './all-comp-history/all-comp-history.component';
import { AssignmentStatusComponent } from './assignment-status/assignment-status.component' ;
import { HelpComponent } from './help/help.component' ;
import { AllCompRequestComponent } from './all-comp-request/all-comp-request.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component' ;
import { HqOpsComponent } from './hq-ops/hq-ops.component' ;

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent,  },
  { path: 'HomePage', component: HomePageComponent  },
  { path: 'compHome', component: CompensationHomeComponent  },
  { path: 'myCompRequest', component: MyCompRequestsComponent  },
  { path: 'allCompHistory', component: AllCompHistoryComponent  },
  { path: 'drLeaveRequest', component: DrLeaveRequestComponent  },
  { path: 'assignmentStatus', component: AssignmentStatusComponent },
  { path: 'help', component: HelpComponent },
  { path: 'allCompRequest', component: AllCompRequestComponent },
  { path: 'onboardingList', component: OnboardingListComponent },
  { path: 'hqOps', component: HqOpsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
