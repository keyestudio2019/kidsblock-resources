#include "TM1650.h"



/** Constructor, uses default values for the parameters
 * so could be called with no parameters.
 * aNumDigits - number of display digits (default = 4)
 */
TM1650::TM1650(unsigned int aNumDigits) {

    iNumDigits =  (aNumDigits > TM1650_NUM_DIGITS) ? TM1650_NUM_DIGITS : aNumDigits;

}

/** Initialization
 * initializes the driver. Turns display on, but clears all digits.
 */
void TM1650::init() {

    Wire.begin();

    iPosition = NULL;

    for (int i=0; i<iNumDigits; i++) {
        iBuffer[i] = 0;
        iCtrl[i] = 0;
    }

    Wire.beginTransmission(TM1650_DISPLAY_BASE);
    iActive = (Wire.endTransmission() == 0);
    clear();
    displayOn();

}

/** Set brightness of all digits equally
 * aValue - brightness value with 1 being the lowest, and 7 being the brightest
 */
void TM1650::setBrightness(unsigned int aValue) {

    if (!iActive) return;

    iBrightness = (aValue > TM1650_MAX_BRIGHT) ? TM1650_MAX_BRIGHT : aValue;

    for (int i=0; i<iNumDigits; i++) {
        Wire.beginTransmission(TM1650_DCTRL_BASE+i);
        iCtrl[i] = (iCtrl[i] & TM1650_MSK_BRIGHT) | ( iBrightness << TM1650_BRIGHT_SHIFT );
        Wire.write((byte) iCtrl[i]);
        Wire.endTransmission();
    }

}

/** Set brightness of all digits equally
 * aValue - brightness value with 1 being the lowest, and 7 being the brightest
 */
void TM1650::setBrightnessGradually(unsigned int aValue) {

    if (!iActive || aValue == iBrightness) return;

    if (aValue > TM1650_MAX_BRIGHT) aValue = TM1650_MAX_BRIGHT;
    int step = (aValue < iBrightness) ? -1 : 1;
    unsigned int i = iBrightness;

    do {
        setBrightness(i);
        delay(50);
        i += step;
    } while (i!=aValue);

}

/** Turns display on or off according to aState
 */
void TM1650::displayState (bool aState) {

    if (aState) displayOn ();

    else displayOff();

}

/** Turns the display on
 */
void TM1650::displayOn () {

    if (!iActive) return;

    for (int i=0; i<iNumDigits; i++) {
        Wire.beginTransmission(TM1650_DCTRL_BASE+i);
        iCtrl[i] = (iCtrl[i] & TM1650_MSK_ONOFF) | TM1650_BIT_DOT;
        Wire.write((byte) iCtrl[i]);
        Wire.endTransmission();
    }

}
/** Turns the display off
 */
void TM1650::displayOff() {

    if (!iActive) return;

    for (int i=0; i<iNumDigits; i++) {
        Wire.beginTransmission(TM1650_DCTRL_BASE+i);
        iCtrl[i] = (iCtrl[i] & TM1650_MSK_ONOFF);
        Wire.write((byte) iCtrl[i]);
        Wire.endTransmission();
    }

}

/** Directly write to the CONTROL register of the digital position
 * aPos = position to set the control register for
 * aValue = value to write to the position
 *
 * Internal control buffer is updated as well
 */
void TM1650::controlPosition(unsigned int aPos, byte aValue) {

    if (!iActive) return;

    if (aPos < iNumDigits) {
        Wire.beginTransmission(TM1650_DCTRL_BASE + (int) aPos);
        iCtrl[aPos] = aValue;
        Wire.write(aValue);
        Wire.endTransmission();
    }

}

/** Directly write to the digit register of the digital position
 * aPos = position to set the digit register for
 * aValue = value to write to the position
 *
 * Internal position buffer is updated as well
 */
void TM1650::setPosition(unsigned int aPos, byte aValue) {

    if (!iActive) return;

    if (aPos < iNumDigits) {
        Wire.beginTransmission(TM1650_DISPLAY_BASE + (int) aPos);
        iBuffer[aPos] = aValue;
        Wire.write(aValue);
        Wire.endTransmission();
    }

}

/** Directly set/clear a 'dot' next to a specific position
 * aPos = position to set/clear the dot for
 * aState = display the dot if true, clear if false
 *
 * Internal buffer is updated as well
 */
void TM1650::setDot(unsigned int aPos, bool aState) {

    iBuffer[aPos] = iBuffer[aPos] & 0x7F |(aState ? 0b10000000 : 0);

    setPosition(aPos, iBuffer[aPos]);

}

/** Clear all digits. Keep the display on.
 */
void TM1650::clear() {

    if (!iActive) return;

    for (int i=0; i<iNumDigits; i++) {
        Wire.beginTransmission(TM1650_DISPLAY_BASE+i);
        iBuffer[i] = 0;
        Wire.write((byte) 0);
        Wire.endTransmission();
    }

}

/** Display string on the display 
 * aString = character array to be displayed
 *
 * Internal buffer is updated as well
 * Only first N positions of the string are displayed if
 *  the string is longer than the number of digits
 */
void TM1650::displayString(char *aString) {

    if (!iActive) return;

    uint8_t buf[5],k=0;
    memset(buf,100,5);
    unsigned int slen = strlen(aString) > 49 ? 49 : strlen(aString);
    char cString[50];
    memcpy(cString, aString, slen);
    cString[slen] = '\0';

    for(int i=0; i<slen; i++){
        if(cString[i] == 46 && i != 0){
            if(cString[i-1] != 46){
                if(i<5) buf[k++]=i;
                for(int j=i; j<slen-1; j++){
                    cString[j] = cString[j+1];
                }
                slen--;
            }
        }
    }
    slen = (slen>4)?4:slen;
    String bString = cString;

    for (int i = 0; i < 4 - slen; i++) 
        bString = " " + bString;

    for (int i = 0; i<iNumDigits; i++) {
        byte a = ((byte)bString.charAt(i)) & 0b01111111;
        byte dot = ((byte)bString.charAt(i)) & 0b10000000;
#ifndef TM1650_USE_PROGMEM	  
        iBuffer[i] = TM1650_CDigits[a];
#else
        iBuffer[i] = pgm_read_byte_near(TM1650_CDigits + a);
#endif
        if (a) {
            Wire.beginTransmission(TM1650_DISPLAY_BASE + i);
            Wire.write(iBuffer[i] | dot);
            Wire.endTransmission();
        }
        else
            break;

    }

    for(int i=0; i<5; i++){
        if(buf[i]!=100){
            setDot(buf[i]-1 + (4-slen),true);
        }
    }
}

void TM1650::displayString(String aString) {
    displayString((char *)aString.c_str());
}

void TM1650::displayString(double value) {
    displayString(String(value));
}

void TM1650::displayString(int value) {
    displayString(String(value));
}

void TM1650::displayString(long value) {
    displayString(String(value));
}

/** Display string on the display in a running fashion
 * aString = character array to be displayed
 *
 * Starts with first N positions of the string.
 * Subsequent characters are displayed with 1 char shift each time displayRunningShift() is called
 *
 * returns: number of iterations remaining to display the whole string
 */
int TM1650::displayRunning(char *aString) {

    strncpy(iString, aString, TM1650_MAX_STRING+1);
    iPosition = iString;
    iString[TM1650_MAX_STRING] = '\0'; //just in case.
        displayString(iPosition);

    int l = strlen(iPosition);

    if (l <= iNumDigits) return 0;
    return (l - iNumDigits);
}

/** Display next segment (shifting to the left) of the string set by displayRunning()
 * Starts with first N positions of the string.
 * Subsequent characters are displayed with 1 char shift each time displayRunningShift is called
 *
 * returns: number of iterations remaining to display the whole string
 */
int TM1650::displayRunningShift() {

    if (strlen(iPosition) <= iNumDigits) return 0;

    displayString(++iPosition);

    return (strlen(iPosition) - iNumDigits);

}
