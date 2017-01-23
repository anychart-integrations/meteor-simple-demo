import {DataSource} from '../data/DataSource';

Meteor.startup(function() {
  return Meteor.methods({

    /**
     * Server debug function to clear the data.
     * @return {*}
     */
    clearData: function() {
      return DataSource.remove({});
    }
  });
});