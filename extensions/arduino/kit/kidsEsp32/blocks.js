/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#000099';
    const color9 = '#930093';

    const secondaryColour = '#CD5C5C';
  

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();


    //变量
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'variables_type',
                        options:[[(Blockly.Msg.KS_global), "global_variate"],[(Blockly.Msg.KS_local), "local_variate"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.KS_MATH_INT, 'int'],[Blockly.Msg.KS_MATH_UNSIGNED_INT, 'unsigned int'],[Blockly.Msg.KS_MATH_LONG, 'long'],[Blockly.Msg.KS_MATH_UNSIGNED_LONG, 'unsigned long'],[Blockly.Msg.KS_MATH_FLOAT, 'float'],[Blockly.Msg.KS_MATH_DOUBLE, 'double'],[Blockly.Msg.KS_MATH_BOOLEAN, 'boolean'],[Blockly.Msg.KS_MATH_BYTE, 'byte'],[Blockly.Msg.KS_MATH_CHAR, 'char'],[Blockly.Msg.KS_MATH_UNSIGNED_CHAR, 'unsigned char'],[Blockly.Msg.KS_MATH_STRING, 'String']]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE',
                    },    
                ],
                "tooltip": "创建变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };
    //变量get
    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color,
                extensions: ['output_number']
            });
        }
    };
    //变量set
    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };
    //变量++--
    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[['++', '++'],['- -', '--']]
                    }
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符串变量set
    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置字符串变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }
    };
    
    //logic
    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE1',
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'judge',
                        options:[["==", "=="],["≠", "!="],[">", ">"],[">=", ">="],["<", "<"],["<=", "<="]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2',
                    },    
                ],
                "tooltip": "逻辑比较",
                colour:color3,
                extensions: ['output_boolean']
            });
        }
    };


//OLED
Blockly.Blocks.oled_init = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_INIT,
            args0: [
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'ADDR',
                    options: [
                        ['0x78 (0x3c)', '0x3c'],
                        ['0x7a (0x3d)', '0x3d']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawLine = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWLINE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawCircle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWCIRCLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillCircle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLCIRCLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawRoundRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWROUNDRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillRoundRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLROUNDRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawTriangle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWTRIANGLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'input_value',
                    name: 'X2'
                },
                {
                    type: 'input_value',
                    name: 'Y2'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillTriangle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLTRIANGLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'input_value',
                    name: 'X2'
                },
                {
                    type: 'input_value',
                    name: 'Y2'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_setText = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_SETTEXT,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'SIZE',
                    options: [
                        ['6x8', '1'],
                        ['12x16', '2'],
                        ['18x24', '3'],
                        ['24x32', '4'],
                        ['30x40', '5'],
                        ['36x48', '6'],
                        ['42x56', '7'],
                        ['48x64', '8']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'BGCOLOR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_setCursor = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_SETCURSOR,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_print = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_PRINT,
            args0: [
                {
                    type: 'input_value',
                    name: 'DATA'
                },
                {
                    type: 'field_dropdown',
                    name: 'EOL',
                    options: [
                        [Blockly.Msg.OLED_EOL_WARP, 'warp'],
                        [Blockly.Msg.OLED_EOL_NOWARP, 'noWarp']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_image = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_IMAGE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'IMAGE',
                    options: [
                        ['∩_∩', 'smile'],
                        ['U_U', 'angry'],
                        ['T_T', 'cry'],
                        ['↑', 'front'],
                        ['↓', 'back'],
                        ['←', 'left'],
                        ['→', 'right'],
                        ['❤', 'heart']
                        ],
                }
            ],
            colour: color4,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_clear = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_CLEAR,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_refresh = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_REFRESH,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_startScroll = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_STARTSCROLL,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'TYPE',
                    options: [
                        [Blockly.Msg.OLED_SCROLL_RIGHT, '0'],
                        [Blockly.Msg.OLED_SCROLL_LEFT, '1'],
                        [Blockly.Msg.OLED_SCROLL_DIAGRIGHT, '2'],
                        [Blockly.Msg.OLED_SCROLL_DIAGLEFT, '3']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'Y0',
                    options: [
                        ['0', '0x00'],
                        ['8', '0x01'],
                        ['16', '0x02'],
                        ['24', '0x03'],
                        ['32', '0x04'],
                        ['10', '0x05'],
                        ['48', '0x06'],
                        ['56', '0x07']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'Y1',
                    options: [
                        ['8', '0x00'],
                        ['16', '0x01'],
                        ['24', '0x02'],
                        ['32', '0x03'],
                        ['40', '0x04'],
                        ['48', '0x05'],
                        ['56', '0x06'],
                        ['64', '0x07']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_stopScroll = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_STOPSCROLL,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};   

//
    Blockly.Blocks.wifi_init = {
        init: function () {
            this.jsonInit({
                //message0: '%1',
                message0: Blockly.Msg.WIFI_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWD'
                    }
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ,
                args0: [
                    {
                        type: 'field_image',
                        //src: irIconUrl,
                        width: 0,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;

