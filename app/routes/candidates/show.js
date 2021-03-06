import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('candidate', params.candidate_id, { include: 'mean-samples', reload: true });
	}
});
