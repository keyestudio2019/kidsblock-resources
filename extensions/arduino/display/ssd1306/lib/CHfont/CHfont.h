#ifndef CHFONT_H
#define CHFONT_H
#include "Arduino.h"

typedef struct ChFont_t{
    uint16_t unicode;
    uint32_t utf8;
    uint16_t gb2312;
    uint8_t matrix[32];
}ChFont;

typedef struct chfont_t{
  const ChFont* code;
	struct chfont_t* next;
} chfont;

class CHfont
{
  public:
  CHfont();
  ~CHfont();
  chfont* createNew(const ChFont* mycode);
  void listAdd(chfont** codehead,const ChFont* mycode);
  void freelist(chfont** codehead);

  chfont* listhead;
  chfont** gg;
  
};
extern CHfont DFFont;
#endif
