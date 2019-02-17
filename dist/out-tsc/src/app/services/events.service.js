var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as objects from '../../models/app-objects';
import { UtilService } from '../services/util.service';
import { AngularFirestore } from '@angular/fire/firestore';
var EventsService = /** @class */ (function () {
    function EventsService(sotrage, util, afs) {
        var _this = this;
        this.sotrage = sotrage;
        this.util = util;
        this.afs = afs;
        this.events = [];
        this.eventsCollection = this.afs.collection('events');
        this.eventsCollection.snapshotChanges().subscribe(function (dataSet) {
            var events = [];
            for (var _i = 0, dataSet_1 = dataSet; _i < dataSet_1.length; _i++) {
                var data = dataSet_1[_i];
                var event_1 = __assign({}, data.payload.doc.data());
                event_1.id = data.payload.doc.id;
                event_1.start = event_1.date;
                event_1.title = event_1.name;
                events.push(event_1);
            }
            _this.events = events;
            console.log("this.events", _this.events);
        });
    }
    EventsService.prototype.addEvent = function (name, description, date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!name || !description || !date)
                return;
            else if (name.length <= 0 || description.length <= 0 || date.length <= 0)
                return;
            var event = new objects.Event(name, description, date);
            console.log("[Added Event]", event);
            _this.eventsCollection.add(__assign({}, event)).then(function (res) {
                resolve();
            });
        });
    };
    EventsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Storage,
            UtilService,
            AngularFirestore])
    ], EventsService);
    return EventsService;
}());
export { EventsService };
//# sourceMappingURL=events.service.js.map