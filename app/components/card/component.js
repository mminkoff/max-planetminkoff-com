import Component from '@glimmer/component';

export default class CardComponent extends Component {
  get target() {
    return this.args.target || '_minkoff';
  }
}
