yaml = require('js-yaml');
fs   = require('fs');

var i = 0;

try {
  var doc = yaml.safeLoad(fs.readFileSync('languages.yml', 'utf8'));
  var keys = Object.keys(doc);

  console.log(keys.length);
  for (var i=0; i<135; i++) {
    
    var lang = keys[i]
  	var ext = doc[lang].extensions
  	if (!ext || ext.length==0)
  		return
  	
  	var name = lang + ext[0];
  	fs.writeFileSync("../rainbow/" + name, "hi!", null)
  	//console.log(name)
  }

} catch (e) {
  console.log(e);
}