export function filterData(e, searchParameter, setFilteredData, dataForTable) {
  if (dataForTable) {
    let filter = dataForTable.filter(
      (data) =>
        String(data.id).indexOf(searchParameter, 0) !== -1 ||
        data.firstName.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
        data.lastName.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
        data.email.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
        data.phone.indexOf(searchParameter, 0) !== -1
    );
    setFilteredData(filter);
  }
}
