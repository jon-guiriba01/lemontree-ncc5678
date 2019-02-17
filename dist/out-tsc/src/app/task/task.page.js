var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ModalController } from '@ionic/angular';
import { TaskModalPage } from '../modals/task-modal/task-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
var TaskPage = /** @class */ (function () {
    function TaskPage(taskService, modalController, afs, storage) {
        var _this = this;
        this.taskService = taskService;
        this.modalController = modalController;
        this.afs = afs;
        this.storage = storage;
        this.department = 'marketing';
        this.showAddTaskView = false;
        this.storage.get('department').then(function (res) {
            _this.department = res || 'marketing';
        });
    }
    TaskPage.prototype.ngOnInit = function () {
    };
    TaskPage.prototype.switchTab = function (tab) {
        this.storage.set('department', tab);
        this.department = tab;
    };
    TaskPage.prototype.createNewTask = function (taskName, department) {
        this.taskService.createNewTask(taskName, department);
    };
    TaskPage.prototype.onClickAddTask = function (evt) {
        this.createNewTask(this.addTaskName, this.department);
    };
    TaskPage.prototype.onClickTask = function (evt, task) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[onClickTask]', task);
                        return [4 /*yield*/, this.modalController.create({
                                component: TaskModalPage,
                                componentProps: { task: task }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaskPage.prototype.addTask = function () {
        this.showAddTaskView = !this.showAddTaskView;
    };
    TaskPage = __decorate([
        Component({
            selector: 'app-task',
            templateUrl: './task.page.html',
            styleUrls: ['./task.page.scss'],
        }),
        __metadata("design:paramtypes", [TaskService,
            ModalController,
            AngularFirestore,
            Storage])
    ], TaskPage);
    return TaskPage;
}());
export { TaskPage };
//# sourceMappingURL=task.page.js.map