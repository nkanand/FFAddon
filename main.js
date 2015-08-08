var { Toolbar }  = require("sdk/ui/toolbar");
var { Frame } = require("sdk/ui/frame");

var self = require("sdk/self");
var data = self.data;
	
var frame = new Frame({
    url: data.url("Toolbar.html"),
});

var toolbar = Toolbar({
    title: "My toolbar",
    items: [frame]
});
