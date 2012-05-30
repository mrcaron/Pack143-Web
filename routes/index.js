
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cub Scouts Pack 143' })
};

exports.leaders = function(req, res){
  res.render('index', { title: 'Cub Scouts Pack 143 - Leaders' })
};