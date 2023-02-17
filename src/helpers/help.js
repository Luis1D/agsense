export const getDateTillDue = (date) => {
    const daysLeft = date - new Date().getDate();
    if (daysLeft <= 1) {
        return "red";
    } else if (daysLeft <= 2) {
        return "orange"
    } else if (daysLeft <= 3) {
        return "yellow"
    } else if (daysLeft <= 4) {
        return "green"
    } else {
        return "blue"
    }
}
export const getClockColor = (dueDate) => {
    if (dueDate === "yellow" || dueDate ==="blue" || dueDate ==="orange" ) {
        return "clock.png"
    } else {
        return "clock-white.png"
    }
}