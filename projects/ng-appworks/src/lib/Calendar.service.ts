import {Injectable} from "@angular/core";
import {AWCalendar} from 'appworks-js';
import { Observable, Observer } from 'rxjs';


@Injectable()
export class AWCalendarService {
    AWCalendar: any
    constructor() {
        this.AWCalendar =  new AWCalendar();
    }

    getCalendarOptions() {
        return this.AWCalendar.getCalendarOptions();
    }

    hasReadPermission() {
        return new Observable(ob => {
            this.AWCalendar.hasReadPermission(data => ob.next(data), err => ob.error(err));
        });
    }

    requestReadPermission() {
        return new Observable(ob => {
            this.AWCalendar.requestReadPermission(data => ob.next(data), err => ob.error(err));
        });
    }

    hasWritePermission() {
        return new Observable(ob => {
            this.AWCalendar.hasWritePermission(data => ob.next(data), err => ob.error(err));
        });
    }

    requestReadWritePermission() {
        return new Observable(ob => {
            this.AWCalendar.requestReadWritePermission(data => ob.next(data), err => ob.error(err));
        });
    }

    hasReadWritePermission() {
        return new Observable(ob => {
            this.AWCalendar.hasReadWritePermission(data => ob.next(data), err => ob.error(err));
        });
    }

    createCalendar(option: any) {
        return new Observable(ob => {
            this.AWCalendar.createCalendar(option, data => ob.next(data), err => ob.error(err));
        });
    }

    deleteCalendar(calendarName: string) {
        return new Observable(ob => {
            this.AWCalendar.deleteCalendar(calendarName, data => ob.next(data), err => ob.error(err));
        });
    }

    openCalendar(date: Date) {
        return new Observable(ob => {
            this.AWCalendar.openCalendar(date, data => ob.next(data), err => ob.error(err));
        });
    }

    createEventWithOptions(title: string,
            location: string,
            notes: string,
            startDate: Date,
            endDate: Date,
            options) {
                return new Observable(ob => {
                    this.AWCalendar.createEventWithOptions(title, location, notes, startDate, endDate, options, data => ob.next(data), err => ob.error(err));
                });
    }

    createEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date)
        {
            return new Observable(ob => {
                this.AWCalendar.createEvent(title, location, notes, startDate, endDate, data => ob.next(data), err => ob.error(err));
            });
        }
    
    createEventInteractivelyWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any) {
            return new Observable(ob => {
                this.AWCalendar.createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, options, data => ob.next(data), err => ob.error(err))
            });
    }

    createEventInteractively(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date) {
            return new Observable(ob => {
                this.AWCalendar.createEventInteractively(title, location, notes, startDate, endDate, data => ob.next(data), err => ob.error(err))
            });
    }

    findEventWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any) {
            return new Observable(ob => {
                this.AWCalendar.findEventWithOptions(title, location, notes, startDate, endDate, options, data => ob.next(data), err => ob.error(err))
            });
    }

    findEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date) {
            return new Observable(ob => {
                this.AWCalendar.findEvent(title, location, notes, startDate, endDate, data => ob.next(data), err => ob.error(err))
            });
    }

    findAllEventsInNamedCalendar(name: string) {
        return new Observable(ob => {
            this.AWCalendar.findAllEventsInNamedCalendar(name, data => ob.next(data), err => ob.error(err));
        });
    }

    deleteEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any) {
            return new Observable(ob => {
                this.AWCalendar.deleteEvent(title, location, notes, startDate, endDate, options, data => ob.next(data), err => ob.error(err))
            });
    }

    deleteEventFromNamedCalendar(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        calendarName: string) {
            return new Observable(ob => {
                this.AWCalendar.deleteEventFromNamedCalendar(title, location, notes, startDate, endDate, calendarName, data => ob.next(data), err => ob.error(err))
            });
    }

    modifyEventWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date,
        options,
        newOptions) {
            return new Observable(ob => {
                this.AWCalendar.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, newOptions, data => ob.next(data), err => ob.error(err))
            });
        }
    
    modifyEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date) {
            return new Observable(ob => {
                this.AWCalendar.modifyEvent(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, data => ob.next(data), err => ob.error(err))
            });
    }

    modifyEventInNamedCalendar(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date,
        calendarName: string) {
            return new Observable(ob => {
                this.AWCalendar.modifyEventInNamedCalendar(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, calendarName, data => ob.next(data), err => ob.error(err))
            });
    }

    listCalendars() {
        return new Observable(ob => {
            this.AWCalendar.listCalendars(data => ob.next(data), err => ob.error(err))
        });
    }

    listEventsInRange(startDate: Date, endDate: Date) {
        return new Observable(ob => {
            this.AWCalendar.listEventsInRange(startDate, endDate, data => ob.next(data), err => ob.error(err));
        });
    }
}
