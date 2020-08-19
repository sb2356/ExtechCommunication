import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  toggleVideoFlag: boolean = true;
  toggleMicFlag: boolean = true;
  toggleScreenShareFlag: boolean = true;
  initiateCallFlag: boolean = false;

  toggleVideo() {

    if (this.toggleVideoFlag) {
      this.toggleVideoFlag = false;
    }
    else {
      this.toggleVideoFlag = true;
    }

  }

  toggleMic() {
    if (this.toggleMicFlag) {
      this.toggleMicFlag = false;
    }
    else {
      this.toggleMicFlag = true;
    }

  }

  toggleScreenShare() {
    if (this.toggleScreenShareFlag) {
      this.toggleScreenShareFlag = false;
    }
    else {
      this.toggleScreenShareFlag = true;
    }


  }
  initiateCall() {
    if (this.initiateCallFlag) {
      this.initiateCallFlag = false;
    }
    else {
      this.initiateCallFlag = true;
    }


  }



}
