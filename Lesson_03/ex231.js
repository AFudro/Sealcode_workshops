function f($el){
	console.log($el.parent())
	console.log($el.closest('section'))
	console.log($el.next())
	console.log($el.prev())
	console.log($el.prevAll())
}

let $el=$(".popular-recipes")
f($el)
$el=$('nav')
f($el)
$el=$('aside')
f($el)
$el=$('fieldset')
f($el)