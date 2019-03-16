import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

	description = ''
	team = ''

  constructor(public authService : AuthService) {
  		switch (this.authService.user.team) {
  			case "admin":
  				this.team = 'Administration'
  				this.description = 'In charge of finance and other administrative decisions'
  				break;
  			case "camps":
  				this.team = 'Camps & Competitions'
  				this.description = `In charge of judging and making sure that the rules are implemented, 
  				followed and observed. They are also the ones who teach and coach during camps`
  				break;
  			case "registration":
  				this.team = 'Registration'
  				this.description = 'In charge of inviting the participating schools and teams. They are also the ones who handle requirements, and take note if the teams arrived in the venue completely.'
  				break;
  			case "operations":
  				this.team = 'Operations'
  				this.description = 'In charge of the venue reservations overall logistics, and overall production work (stagings, tracking, etc.), issuance of permits, and arranging the on-site medics'
  				break;
  			case "marketing":
  				this.team = 'Marketing'
  				this.description = `In charge of social media and making the event reach its intended audience by publishing posts and visuals to entice audience and participating teams. They are also in charge of coordinating with media and sponsors`
  				break;
  			
  		}
  }

  ngOnInit() {
  }

}
