import { DataSource } from '../data/DataSource';
import { Template } from 'meteor/templating';
import './container.html';

var chart;

Template.acTemplate.rendered = function() {
  /*
    Get container for chart.
    It is not actually necessary here, `chart.container('container').draw();` can be used
    for current scope, but container is found in template to avoid container ID duplication.
   */
  var container = this.find("#container");

  // Turn Meteor Collection to simple array of objects.
  var data = DataSource.find({}).fetch();

  //  ----- Standard Anychart API in use -----
  chart = anychart.pie(data);
  chart.title('ACME Corp. apparel sales through different retail channels');

  chart.legend()
      .position('bottom')
      .itemsLayout('horizontal')
      .align('center')
      .title('Retail channels');

  chart.animation(true);
  chart.container(container).draw();
};
