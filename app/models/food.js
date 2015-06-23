
function Food (opts) {
  this.id = opts.id || '';
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.description = opts.description || '';
  this.price = opts.price || '';
  this.people = opts.people || '';
  this.RemainDays = opts.RemainDays || '';
  this.RemainNumer = opts.RemainNumer || '';
  this.tag = opts.tag || '';
}

module.exports = Food;

