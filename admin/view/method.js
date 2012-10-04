var layout = require('./layout'),
    resource = require('resource');

module['exports'] = function (options, callback) {

  var methods = options.methods,
      $ = this.$;

  $('h1').html(options.resource.name + ' ' + options.name);
  $('.description').html(options.method.schema.description);
  $('.methods').html(layout.controls.list.present({ items: methods, root: '/admin/resources/foo/' }));

  var form = resource.forms.generate(options)
  form.render();

  form.present(options, function(err, str){
    $('.form').html(str);
    callback(null, $.html())
  });

  //$('.schema').html(resource.docs.schemaToHTML(options.resource.schema));

}