// calendarScheduler.js

const dateUtility = require('dateworkutil');

const calendarScheduler = {
  // Function to schedule an event on a specific date
  scheduleEvent: function (eventName, eventDate) {
    const formattedDate = dateUtility.formatDate(eventDate, 'MMMM DD, YYYY');
    console.log(`Event "${eventName}" scheduled for ${formattedDate}`);
  },

  // Function to check if an event is scheduled for today
  isEventScheduledForToday: function (eventName, eventDate) {
    const currentDate = dateUtility.getCurrentDateTime();
    const formattedCurrentDate = dateUtility.formatDate(currentDate, 'MMMM DD, YYYY');
    const formattedEventDate = dateUtility.formatDate(eventDate, 'MMMM DD, YYYY');

    if (formattedCurrentDate === formattedEventDate) {
      console.log(`Event "${eventName}" is scheduled for today!`);
    } else {
      console.log(`Event "${eventName}" is not scheduled for today.`);
    }
  }
};

// Example usage:
const eventDate = new Date('2024-03-04');
calendarScheduler.scheduleEvent('Meeting', eventDate);
calendarScheduler.isEventScheduledForToday('Meeting', eventDate);

module.exports = calendarScheduler;
