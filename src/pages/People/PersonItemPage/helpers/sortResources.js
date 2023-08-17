function parseDate(dateString) {
  const dateParts = dateString.split(" ");

  if (dateParts.length === 3) {
    // Format: Month Day, Year
    const month = getMonthNumber(dateParts[0]);
    const day = parseInt(dateParts[1].replace(",", ""));
    const year = parseInt(dateParts[2]);

    return `${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}`;
  } else if (dateParts.length === 2) {
    // Format: Month Year or Year
    const month = getMonthNumber(dateParts[0]);
    const year = parseInt(dateParts[1]);

    return `${year}${month.toString().padStart(2, "0")}`;
  } else if (dateParts.length === 1) {
    // Format: Year
    return `${parseInt(dateString)}`;
  }

  return "0000"; // Default value if parsing fails
}

function getMonthNumber(monthName) {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  return months[monthName] || "00"; // '00' as a default value if month is not found
}

// Compare two dates in the format YYYYMMDD
function compareDates(dateStringA, dateStringB) {
  if (dateStringA.toLowerCase() === "present") {
    return dateStringB.toLowerCase() === "present" ? 0 : 1;
  }

  if (dateStringB.toLowerCase() === "present") {
    return -1;
  }

  const dateA = parseDate(dateStringA);
  const dateB = parseDate(dateStringB);

  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return 0;
  }
}

// Helper function to compare dates while handling "Present"
function compareDatesWithPresent(dateStartA, dateEndA, dateStartB, dateEndB) {
  if (dateEndA.toLowerCase() === "present") {
    if (dateEndB.toLowerCase() === "present") {
      // Both are "Present" - compare start dates
      return compareDates(dateStartA, dateStartB);
    } else {
      return 1; // A is "Present," B is not, so A comes after
    }
  }

  if (dateEndB.toLowerCase() === "present") {
    return -1; // B is "Present," A is not, so B comes after
  }

  return compareDates(dateStartA, dateStartB);
}

// Main sorting function for roles (oldest to newest)
export function sortRoles(roles) {
  return roles.sort((a, b) =>
    compareDatesWithPresent(a.dateStart, a.dateEnd, b.dateStart, b.dateEnd)
  );
}
