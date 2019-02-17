import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';
describe('EventsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EventsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=events.service.spec.js.map