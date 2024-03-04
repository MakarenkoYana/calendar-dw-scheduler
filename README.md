# Calendar DW Scheduler

Calendar DW Scheduler is a simple module for scheduling events and checking if events are scheduled for today.

## Installation

You can install Calendar DW Scheduler via npm:

```bash
npm install calendar-dw-scheduler
```

## Usage

```javascript
const calendarScheduler = require('calendar-dw-scheduler');

// Example usage:
const eventDate = new Date('2024-03-04');
calendarScheduler.scheduleEvent('Meeting', eventDate);
calendarScheduler.isEventScheduledForToday('Meeting', eventDate);
```

## API

### scheduleEvent(eventName, eventDate)

Schedules an event with the specified name for the given date.

- `eventName`: The name of the event.
- `eventDate`: The date object representing the event's date.

### isEventScheduledForToday(eventName, eventDate)

Checks if the event with the specified name is scheduled for today's date.

- `eventName`: The name of the event.
- `eventDate`: The date object representing the event's date.

## Dependencies

This module relies on the `dateworkutil` package for date-related functionalities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
