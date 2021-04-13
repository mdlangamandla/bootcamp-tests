
describe('The findItemsOver function', function() {

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27},
        {name : 'apples', qty : 3},
    
    ];


    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'apples', qty : 3},
    
    
    ];

    var threshold = 20;
    it('should return items over the threshold', function() {
         assert.deepEqual([{name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27}], findItemsOver(itemList, threshold));
    })


    var threshold = 20;     
    it('should return an empty array if there are no items on the threshold', function() {
        assert.deepEqual([], findItemsOver(itemList2, threshold));
    })
});