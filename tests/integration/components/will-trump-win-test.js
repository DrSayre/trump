import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('will-trump-win', 'Integration | Component | will trump win', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{will-trump-win}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#will-trump-win}}
      template block text
    {{/will-trump-win}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
