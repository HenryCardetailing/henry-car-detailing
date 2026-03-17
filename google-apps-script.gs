var SHEET_ID = '1Z_9k3ZaDt_kfOzDGxX77A79E817JIa7UQ3BtZGIjL1Y'
var SHEET_NAME = 'Leads'

function doPost(e) {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID)
  var sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME)
    sheet.appendRow([
      'Submitted At',
      'Name',
      'Phone',
      'Vehicle',
      'Service',
      'Preferred Time',
      'Notes',
      'Source',
    ])
  }

  var data = JSON.parse(e.postData.contents)

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.vehicle || '',
    data.service || '',
    data.preferredTime || '',
    data.notes || '',
    data.source || '',
  ])

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON)
}
