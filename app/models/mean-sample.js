import DS from 'ember-data';

export default DS.Model.extend({
  sampleDate: DS.attr('date'),
  probability: DS.attr('number'),
  candidate: DS.belongsTo('candidate'),
  formattedDate: Ember.computed('sampleDate', {
  	get() {
  		return moment(this.get('sampleDate')).format('YYYY-MM-DD');
  	}
  }),
});
