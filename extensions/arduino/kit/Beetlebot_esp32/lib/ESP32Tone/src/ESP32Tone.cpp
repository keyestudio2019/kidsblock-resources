#include "ESP32Tone.h"

void tone(uint8_t pin, unsigned int frequency, unsigned long duration, uint8_t channel)
{
    //if (ledcRead(channel)) {
    //    log_e("Tone channel is already in use");
    //    return;
    //}
    ledcAttachPin(pin, channel);
    ledcWriteTone(channel, frequency);
    if (duration) {
        delay(duration);
        ledcWriteTone(channel, 20000);
    }    
}

void noTone(uint8_t pin, uint8_t channel)
{
    ledcDetachPin(pin);
    ledcWrite(channel, 0);
}
