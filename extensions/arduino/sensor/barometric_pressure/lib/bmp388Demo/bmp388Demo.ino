#include <BMP388.h>

void setup() {
  // put your setup code here, to run once:
  bool bRet;
  PRESS_EN_SENSOR_TYPY enPressureType;
  Serial.begin(115200);

  pressSensorInit( &enPressureType );
  if(PRESS_EN_SENSOR_TYPY_BMP388 == enPressureType)
  {
    Serial.println("Pressure sersor is BMP388");
  }
  else
  {
    Serial.println("Pressure sersor NULL");
  }
  Serial.println("/-------------------------------------------------------------/");
  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  int32_t s32PressureVal = 0, s32TemperatureVal = 0, s32AltitudeVal = 0;
  
  pressSensorDataGet(&s32TemperatureVal, &s32PressureVal, &s32AltitudeVal);
  
  Serial.print("Pressure : "); Serial.print((float)s32PressureVal / 100);
  Serial.print("   Altitude : "); Serial.print((float)s32AltitudeVal / 100);
  Serial.print("   Temperature : "); Serial.print((float)s32TemperatureVal / 100);
  Serial.println();  
  delay(100);
}
