angular
    .module('angular-appworks')
    .service('$contentServer', contentServerService);

function contentServerService($appworks, $timeout) {

    function getRootItems(id, callback) {
        // return all items with parent => id
        var items = mock(id);
        return callback(items);
    }

    function collectItemsByParent(items, parentId) {
        var collection = [];
        for (var item in items) {
            if (items[item].parent == parentId) {
                collection.push(items[item]);
            }
        }
        return collection;
    }

    function mock(id) {
        var fakeItem1 = {
                id: 1,
                name: 'Fake Item 1',
                description: 'A mocked out item',
                parent: 3,
                type: 0,
                children: []
            },
            fakeItem2 = {
                id: 1,
                name: 'Fake Item 2',
                description: 'Another mocked out item',
                parent: 3,
                type: 0,
                children: []
            },
            fakeItem3 = {
                id: 3,
                name: 'Fake Item 3',
                description: 'Yet another mocked out item',
                parent: null,
                type: 0,
                children: [fakeItem2, fakeItem1]
            },
            fakeItem4 = {
                id: 4,
                name: 'Fake Item 4',
                description: 'Yet another mocked out item',
                parent: null,
                type: 0,
                children: []
            },
            fakeItem5 = {
                id: 5,
                name: 'Fake Item 5',
                description: 'Yet another mocked out item',
                type: 1,
                parent: 4,
                children: []
            },
            fakeItem6 = {
                id: 6,
                name: 'Fake Item 6',
                description: 'Yet another mocked out item',
                type: 1,
                parent: null,
                children: []
            };


        var fakeItems = [fakeItem1, fakeItem2, fakeItem3, fakeItem4, fakeItem5, fakeItem6];
        return collectItemsByParent(fakeItems, id);

    }

    return {
        rootItems: getRootItems
    };
}