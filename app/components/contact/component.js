import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactComponent extends Component {
  @tracked name = "";
  @tracked email = "";
  @tracked message = "";

  get formValid() {
    return this.name && this.email && this.message;
  }

  @action
  submitContact(evt) {
    evt.preventDefault();
    
    const contactInfo = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    this.args.submitContact & this.args.submitContact(contactInfo)
  }
}
