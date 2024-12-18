// Menuliskan "Hello World" ke Sheet1 di Google Sheets
function writeHelloWorld() {
    const sheetName = "Sheet1"; // Nama sheet yang dituju
    const range = "A1"; // Sel tempat teks ditulis
    const text = "Hello World"; // Teks yang akan ditulis

    // Mendapatkan spreadsheet aktif
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // Periksa apakah sheet ada
    if (!sheet) {
        throw new Error(`Sheet dengan nama "${sheetName}" tidak ditemukan.`);
    }

    // Menuliskan teks ke sel
    sheet.getRange(range).setValue(text);

    Logger.log(`Teks "${text}" berhasil dituliskan ke ${sheetName}!`);
}
