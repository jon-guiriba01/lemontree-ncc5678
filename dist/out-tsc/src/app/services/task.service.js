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
var TaskService = /** @class */ (function () {
    function TaskService(sotrage, util, afs) {
        var _this = this;
        this.sotrage = sotrage;
        this.util = util;
        this.afs = afs;
        this.tasks = [];
        this.tasksCollection = this.afs.collection('tasks');
        this.tasksCollection.snapshotChanges().subscribe(function (dataSet) {
            var tasks = [];
            for (var _i = 0, dataSet_1 = dataSet; _i < dataSet_1.length; _i++) {
                var data = dataSet_1[_i];
                var task = __assign({}, data.payload.doc.data());
                task.id = data.payload.doc.id;
                tasks.push(task);
            }
            _this.tasks = tasks;
            console.log("this.tasks", _this.tasks);
        });
    }
    TaskService.prototype.getTasks = function (dept) {
        console.log('[getTasks]', this.tasks);
        return this.tasks;
    };
    TaskService.prototype.createNewTask = function (taskName, department) {
        if (!taskName)
            return;
        else if (taskName.length <= 0)
            return;
        var task = new objects.Task(taskName, department);
        console.log("[Added Task]", task);
        this.tasksCollection.add(__assign({}, task));
    };
    TaskService.prototype.addActivityToTask = function (task, description) {
        console.log("[addActivityToTask]", task);
        var newAct = new objects.Activity(description);
        console.log("[addActivityToTask] activity|", newAct);
        var isDup = false;
        for (var _i = 0, _a = task.activities; _i < _a.length; _i++) {
            var activity = _a[_i];
            if (activity.description == newAct.description) {
                isDup = true;
            }
        }
        if (!isDup) {
            task.activities.push(__assign({}, newAct));
            this.tasksCollection.doc(task.id).update(task);
        }
    };
    TaskService.prototype.deleteTask = function (task) {
        console.log("[deleteTask]", task);
        return this.tasksCollection.doc(task.id).delete();
    };
    TaskService.prototype.updateTask = function (task) {
        console.log("[updateTask]", task);
        return this.tasksCollection.doc(task.id).update(task);
    };
    TaskService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Storage,
            UtilService,
            AngularFirestore])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map