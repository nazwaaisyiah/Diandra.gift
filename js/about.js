function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("about");

  if (!sheet) {
    return ContentService.createTextOutput("Sheet 'about' tidak ditemukan");
  }

  const data = sheet.getRange(2, 1, 1, 4).getValues()[0];

  return ContentService
    .createTextOutput(JSON.stringify({
      judul: data[0],
      paragraf1: data[1],
      paragraf2: data[2],
      paragraf3: data[3]
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
