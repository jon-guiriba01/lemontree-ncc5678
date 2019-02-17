var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';
var AddEventPage = /** @class */ (function () {
    function AddEventPage(eventService, events, modalController) {
        this.eventService = eventService;
        this.events = events;
        this.modalController = modalController;
    }
    AddEventPage.prototype.ngOnInit = function () {
    };
    AddEventPage.prototype.onClickAddEvent = function () {
        var _this = this;
        this.eventService.addEvent(this.name, this.description, this.date.format()).then(function () {
            _this.events.publish('event:addSuccess');
            _this.modalController.dismiss();
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AddEventPage.prototype, "date", void 0);
    AddEventPage = __decorate([
        Component({
            selector: 'app-add-event',
            templateUrl: './add-event.page.html',
            styleUrls: ['./add-event.page.scss'],
        }),
        __metadata("design:paramtypes", [EventsService,
            Events,
            ModalController])
    ], AddEventPage);
    return AddEventPage;
}());
export { AddEventPage };
//# sourceMappingURL=add-event.page.js.map