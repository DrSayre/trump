import Ember from 'ember';

export default Ember.Controller.extend({
	numberData: Ember.computed('model', function() {
		return {
			labels: this.get('model.meanSamples').mapBy('formattedDate'),
      datasets: [{
				label: 'Probability of winning election',
				data: this.get('model.meanSamples').mapBy('probability'),
				fillColor: '#efefef'
			}]
		};
	}),
	lineOptions: {
		responsive: true,
    scaleGridLineColor : "black",
    scaleGridLineWidth : 0.2,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    scaleOverride: true,
    scaleStartValue: 0,
    scaleStepWidth: 0.05,
    scaleSteps: 20,
    scaleFontColor: "#efefef",
    scaleIntegersOnly: false
	}
});
