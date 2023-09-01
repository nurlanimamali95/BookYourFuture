export function createData(key, event, date, location, group, student) {
  return { key, event, date, location, group, student };
}

export const rows = [
  createData(342, "Class Call", "12.03.2023", "Online", 42, ""),
  createData(345, "Class Call", "17.03.2023", "Online", 43, ""),
  createData(765, "Social Interview", "18.03.2023", "Online", 44, "Nurlan"),
  createData(5456, "Social Call", "19.03.2023", "Offline", 43, "Alevtina"),
  createData(656, "Tech Interview", "20.03.2023", "Offline", 44, "Alex"),
  createData(865, "Class Call", "12.03.2023", "Online", 44, "All"),
  createData(979, "Class Call", "25.03.2023", "Online", 43, "All"),
  createData(9086, "Social Interview", "18.03.2023", "Online", 44, "Nurlan"),
  createData(3333, "Class Call", "17.03.2023", "Online", 43, "All"),
  createData(854, "Class Call", "17.03.2023", "Online", 43, "All"),
];
