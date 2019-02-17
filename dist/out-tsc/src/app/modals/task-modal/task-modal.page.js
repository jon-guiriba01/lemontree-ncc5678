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
import { Task } from '../../../models/app-objects';
import { TaskService } from '../../services/task.service';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
var TaskModalPage = /** @class */ (function () {
    function TaskModalPage(taskService, modalController) {
        this.taskService = taskService;
        this.modalController = modalController;
        this.progress = 0;
    }
    TaskModalPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.getProgress(); }, 100);
    };
    TaskModalPage.prototype.onClickAddActivity = function (evt) {
        this.taskService.addActivityToTask(this.task, this.newActivityDescription);
        this.newActivityDescription = null;
    };
    TaskModalPage.prototype.onClickActivityStatus = function (act, evt) {
        for (var _i = 0, _a = this.task.activities; _i < _a.length; _i++) {
            var activity = _a[_i];
            if (activity.description == act.description) {
                activity.status = act.status;
            }
        }
        this.taskService.updateTask(this.task);
        this.getProgress();
    };
    TaskModalPage.prototype.onInputTaskName = function () {
        var _this = this;
        if (this.inputWait) {
            clearTimeout(this.inputWait);
        }
        this.inputWait = setTimeout(function () {
            _this.taskService.updateTask(_this.task);
        }, 500);
    };
    TaskModalPage.prototype.onClickDelete = function () {
        var _this = this;
        this.taskService.deleteTask(this.task).then(function (res) {
            _this.modalController.dismiss();
        });
    };
    TaskModalPage.prototype.onInputActivityDescription = function () {
        var _this = this;
        if (this.inputWait) {
            clearTimeout(this.inputWait);
        }
        this.inputWait = setTimeout(function () {
            _this.taskService.updateTask(_this.task);
        }, 500);
    };
    TaskModalPage.prototype.deleteActivity = function (evt, act) {
        console.log('delete', act);
        console.log('delete', act);
        this.task.activities = this.task.activities.filter(function (e) {
            if (e.description != act.description)
                return e;
        });
        console.log('deletexxxx', this.task);
        this.taskService.updateTask(this.task);
    };
    TaskModalPage.prototype.getProgress = function () {
        var done = 0.00;
        var max = this.task.activities.length;
        for (var _i = 0, _a = this.task.activities; _i < _a.length; _i++) {
            var activity = _a[_i];
            if (activity.status)
                done += 1.0;
        }
        this.progress = (done / max);
        console.log("p ", this.progress);
        $('.progressbar').attr('value', this.progress);
        return this.progress;
    };
    __decorate([
        Input(),
        __metadata("design:type", Task)
    ], TaskModalPage.prototype, "task", void 0);
    TaskModalPage = __decorate([
        Component({
            selector: 'app-task-modal',
            templateUrl: './task-modal.page.html',
            styleUrls: ['./task-modal.page.scss'],
        }),
        __metadata("design:paramtypes", [TaskService,
            ModalController])
    ], TaskModalPage);
    return TaskModalPage;
}());
export { TaskModalPage };
//# sourceMappingURL=task-modal.page.js.map