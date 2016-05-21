import Ember from 'ember';

export default Ember.Component.extend({
	status: function() {
		var probability = this.get('prob');
		if (probability > 59.9) {
			return currentStatus(['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes']);
		}
		else if (probability > 39.9) {
			return currentStatus(['Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again']);
		} else {
			return currentStatus(["Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']);
		}
		function currentStatus(messages) {
			return messages[Math.floor(Math.random() * messages.length)];
		}
	}.property('prob')
});
