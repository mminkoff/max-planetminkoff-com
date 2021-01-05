import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fetch } from 'fetch';

export default class ApplicationController extends Controller {
  @tracked submitted = false;

  @action
  async sendContact(params) {
    const contactFormApiUrl = "https://9o629ug0k5.execute-api.us-east-1.amazonaws.com/production/contact-messages";
    const resp = await fetch(contactFormApiUrl, {
      method: 'post',
      body: JSON.stringify(params)
    });
    this.response = await resp.json();
    return this.submitted = (resp.status == 200);
  }
}
