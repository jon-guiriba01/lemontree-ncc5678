var Task = /** @class */ (function () {
    function Task(name, group) {
        this.activities = [];
        this.status = 'todo';
        this.name = name;
        this.group = group;
    }
    return Task;
}());
var Activity = /** @class */ (function () {
    function Activity(description) {
        this.status = false;
        // this.id = id
        this.description = description;
    }
    return Activity;
}());
var Event = /** @class */ (function () {
    function Event(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
    }
    return Event;
}());
export { Activity, Task, Event };
//# sourceMappingURL=app-objects.js.map