// Copyright 2015-2016 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

describe('contentServerService', function () {

    var $cs;

    beforeEach(module('angular-appworks'));

    beforeEach(inject(function (_$contentServer_) {
        $cs = _$contentServer_;
    }));

    it('should expose a method to get root items', function () {
        expect($cs.rootItems).not.toBeUndefined();
    });

    xit('should return items with parent id of id passed in', function () {
        var collection;
        $cs.rootItems(3, function (items) {
            collection = items;
            expect(collection[0].parent).toEqual(3);
        });
    });
});
