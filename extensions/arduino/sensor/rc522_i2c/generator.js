/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.rc522_init = function (block) {

        Blockly.Arduino.includes_.include_rc522_init = `#include <Wire.h>\n#include <MFRC522_I2C.h>\n`;
        Blockly.Arduino.definitions_[`rc522_var`] = `MFRC522 mfrc522(0x28);\nString rfid_str = "";\n`;
        Blockly.Arduino.definitions_[`rc522_data_func`] = `String return_rfid_data()\n`+
        `{\n`+
        `  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n`+
        `    delay(50);\n`+
        `    return "0";\n`+
        `  }\n`+
        `  rfid_str = "";\n`+
        `  for (byte i = 0; i < mfrc522.uid.size; i++) {\n`+
        `    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n`+
        `  }\n`+
        `  return rfid_str;\n`+
        `}\n`;
        Blockly.Arduino.setups_['rc522_setup'] = 'Wire.begin();\n  mfrc522.PCD_Init();\n';
        return '';
    };

    Blockly.Arduino.rc522_read = function (block) {
        return [`return_rfid_data()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
