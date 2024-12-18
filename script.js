/**
 * Menuliskan "Hello World" ke sel A1 di Sheet1
 */
function writeHelloWorldToSheet() {
    // Membuka spreadsheet aktif
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    // Membuka Sheet1
    const sheet = spreadsheet.getSheetByName("Sheet1");

    if (sheet) {
        // Menuliskan "Hello World" ke sel A1
        sheet.getRange("A1").setValue("Hello World");
    } else {
        // Jika Sheet1 tidak ditemukan, buat Sheet1
        const newSheet = spreadsheet.insertSheet("Sheet1");
        newSheet.getRange("A1").setValue("Hello World");
    }
}
