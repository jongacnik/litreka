import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  gameState: service(),
  classNames: ['game-board'],
});
