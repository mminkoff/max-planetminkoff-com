import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MenuComponent extends Component {
  items = [
    {
    //   href: "#about",
    //   icon: "info",
    //   name: "About"
    // },{
      href: "#portfolio",
      icon: "list",
      name: "Portfolio"
    },{
      href: "#personal",
      icon: "coffee",
      name: "Personal"
    },{
      href: "#contact",
      icon: "envelope",
      name: "Contact"
    },
  ];

  @tracked showMenu =  false;

  @action
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
}
