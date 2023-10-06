/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00a300';
    const secondaryColor = '#008000';

    const huskyLens_vision_icon = 'data:image/png;base64,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';

    var huskyLens_algorithm_model_sn = [
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"]
    ];


    
    Blockly.Blocks.huskyLensVision_beginI2C= {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_BEGIN_I2C,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [],
                "tooltip": "HuskyLens摄像头初始化I2C地址直到成功，地址为0x32",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_writeAlgorithm= {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_WRITE_ALGORITHM,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'ALGORITHM',
                        options: [
                            [Blockly.Msg.FACE_RECOGNITION, 'ALGORITHM_FACE_RECOGNITION'],
                            [Blockly.Msg.OBJECT_TRACKING, 'ALGORITHM_OBJECT_TRACKING'],
                            [Blockly.Msg.OBJECT_RECOGNITION, 'ALGORITHM_OBJECT_RECOGNITION'],
                            [Blockly.Msg.LINE_TRACKING, 'ALGORITHM_LINE_TRACKING'],
                            [Blockly.Msg.COLOR_RECOGNITION, 'ALGORITHM_COLOR_RECOGNITION'],
                            [Blockly.Msg.TAG_RECOGNITION, 'ALGORITHM_TAG_RECOGNITION'],
                            [Blockly.Msg.OBJECT_CLASSIFICATION, 'ALGORITHM_OBJECT_CLASSIFICATION'],
                            [Blockly.Msg.QR_RECOGNITION, 'ALGORITHM_QR_RECOGNITION'],
                            [Blockly.Msg.BARCODE_RECOGNITION, 'ALGORITHM_BARCODE_RECOGNITION']
                        ]
                    }
                ],
                "tooltip": "切换算法，可以随时切换到其他算法，同时只能存在一个算法，注意切换算法需要一些时间",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

   
    Blockly.Blocks.huskyLensVision_request = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_REQUEST,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "主控板向HuskyLens请求一次数据存入“结果”，之后可以从“结果”中获取数据，此模块调用之后“结果”中才会获取到最新的数据",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_readLearnedIDCount = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_LEARNED_ID_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前算法下已经学习了多少个目标，注意HuskyLens端长按选择键开启高级设置后可以设置是否学习多个目标",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

   
    Blockly.Blocks.huskyLensVision_isAppearDirect = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_IS_APPEAR_DIRECT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'RESULT',
                        options: [
                            [Blockly.Msg.RESULT_BLOCK, 'Block'],
                            [Blockly.Msg.RESULT_ARROW, 'Arrow']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前界面中是否有方框或箭头，包含已学习（id大于0）和未学习的，有一个及以上则返回1",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readBlockCenterParameterDirect = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_BLOCK_CENTER_PARAMETER_DIRECT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'BLOCK_PARAMETER',
                        options: [
                            [Blockly.Msg.BLOCK_PARAMETER_ID, 'ID'],
                            [Blockly.Msg.BLOCK_PARAMETER_XCENTER, 'xCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_YCENTER, 'yCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_WIDTH, 'width'],
                            [Blockly.Msg.BLOCK_PARAMETER_HEIGHT, 'height']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前界面中靠近中心的方框信息，未学习的方框id为0，没有则返回-1",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readArrowCenterParameterDirect = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_ARROW_CENTER_PARAMETER_DIRECT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'ARROW_PARAMETER',
                        options: [
                            [Blockly.Msg.ARROW_PARAMETER_ID, 'ID'],
                            [Blockly.Msg.ARROW_PARAMETER_XORIGIN, 'xOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_YORIGIN, 'yOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_XTARGET, 'xTarget'],
                            [Blockly.Msg.ARROW_PARAMETER_YTARGET, 'yTarget']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前界面中靠近中心的箭头信息，未学习的箭头id为0，没有则返回-1",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_isLearned = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_IS_LEARNED,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取是否IDx已经进行了学习",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

   
    Blockly.Blocks.huskyLensVision_isAppear = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_IS_APPEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RESULT',
                        options: [
                            [Blockly.Msg.RESULT_BLOCK, 'Block'],
                            [Blockly.Msg.RESULT_ARROW, 'Arrow']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取是否IDx在画面中，方框指屏幕上目标为方框的的算法，箭头对应屏幕上目标为箭头的算法，当前仅为巡线算法时选择箭头，其他算法都选择方框",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readBlockParameter = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_BLOCK_PARAMETER,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BLOCK_PARAMETER',
                        options: [
                            [Blockly.Msg.BLOCK_PARAMETER_XCENTER, 'xCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_YCENTER, 'yCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_WIDTH, 'width'],
                            [Blockly.Msg.BLOCK_PARAMETER_HEIGHT, 'height']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取IDx的参数，如果此ID在画面中没有或没有学习则会返回-1",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readArrowParameter = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_ARROW_PARAMETER,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ARROW_PARAMETER',
                        options: [
                            [Blockly.Msg.ARROW_PARAMETER_XORIGIN, 'xOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_YORIGIN, 'yOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_XTARGET, 'xTarget'],
                            [Blockly.Msg.ARROW_PARAMETER_YTARGET, 'yTarget']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取IDx的参数，如果此ID在画面中没有或没有学习则会返回-1 ，此模块对应“巡线”算法的输出结果",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_readCount = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'RESULT',
                        options: [
                            [Blockly.Msg.RESULT_BLOCK, 'Block'],
                            [Blockly.Msg.RESULT_ARROW, 'Arrow']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前算法下当前视野中所有的“方框”或“箭头”的数量，包括没有学习或者已经学习的目标",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readBlockParameterDirect = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_BLOCK_PARAMETER_DIRECT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'SN',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BLOCK_PARAMETER',
                        options: [
                            [Blockly.Msg.BLOCK_PARAMETER_ID, 'ID'],
                            [Blockly.Msg.BLOCK_PARAMETER_XCENTER, 'xCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_YCENTER, 'yCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_WIDTH, 'width'],
                            [Blockly.Msg.BLOCK_PARAMETER_HEIGHT, 'height']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前界面中第N个（顺序随机）方框信息，包含已学习（id大于0）和未学习的",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readArrowParameterDirect = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_ARROW_PARAMETER_DIRECT,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'SN',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ARROW_PARAMETER',
                        options: [
                            [Blockly.Msg.ARROW_PARAMETER_ID, 'ID'],
                            [Blockly.Msg.ARROW_PARAMETER_XORIGIN, 'xOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_YORIGIN, 'yOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_XTARGET, 'xTarget'],
                            [Blockly.Msg.ARROW_PARAMETER_YTARGET, 'yTarget']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前界面中第N个（顺序随机）箭头信息，包含已学习（id大于0）和未学习的",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_readCount2 = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_COUNT2,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RESULT',
                        options: [
                            [Blockly.Msg.RESULT_BLOCK, 'Block'],
                            [Blockly.Msg.RESULT_ARROW, 'Arrow']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前算法下相同ID的目标的数量，例如两个相同的人脸照片都在视野中则此数量为2",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readBlockParameter2 = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_BLOCK_PARAMETER2,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'input_value',
                        name: 'SN',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BLOCK_PARAMETER',
                        options: [
                            [Blockly.Msg.BLOCK_PARAMETER_XCENTER, 'xCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_YCENTER, 'yCenter'],
                            [Blockly.Msg.BLOCK_PARAMETER_WIDTH, 'width'],
                            [Blockly.Msg.BLOCK_PARAMETER_HEIGHT, 'height']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前算法下IDx的第y个方框的参数，同一个ID可能有多个目标，注意同一个ID下的目标顺序是随机的",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_readArrowParameter2 = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_READ_ARROW_PARAMETER2,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'input_value',
                        name: 'SN',
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ARROW_PARAMETER',
                        options: [
                            [Blockly.Msg.ARROW_PARAMETER_XORIGIN, 'xOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_YORIGIN, 'yOrigin'],
                            [Blockly.Msg.ARROW_PARAMETER_XTARGET, 'xTarget'],
                            [Blockly.Msg.ARROW_PARAMETER_YTARGET, 'yTarget']
                        ]
                    }
                ],
                "tooltip": "从请求得到的“结果”中获取当前算法下IDx的第y个箭头的参数，同一个ID可能有多个目标，注意同一个ID下的目标顺序是随机的",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_learnOnce = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_LEARN_ONCE,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    }
                ],
                "tooltip": "此积木触发一次相当于按一次学习按键，可以由程序控制二哈的学习。需要学习多次则可以多次执行此模块",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_forgetLearn = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_FORGET_LEARN,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "此积木触发一次相当于触发了遗忘功能，将当前算法学习过的内容全部清除",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_writeName = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_WRITE_NAME,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'COUNT',
                    },
                    {
                        type: 'input_value',
                        name: 'STRING'
                    }
                ],
                "tooltip": "此积木可以设置任意ID对应显示的名字，不同算法的名字可以分别设置",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };


   
    Blockly.Blocks.huskyLensVision_writeOSD = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_WRITE_OSD,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'ROW'
                    },
                    {
                        type: 'input_value',
                        name: 'COLUMN'
                    },
                    {
                        type: 'input_value',
                        name: 'STRING'
                    }
                ],
                "tooltip": "此积木可以在屏幕任意位置显示字符。可以显示英文字母、数字及符号，不可显示中文",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

   
    Blockly.Blocks.huskyLens_screen_row_length = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '319'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    
    Blockly.Blocks.huskyLens_screen_column_length = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '239'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_clearOSD = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_CLEAR_OSD,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                "tooltip": "此积木可以触发清除屏幕叠加显示积木所显示的所有字符",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };


    
    Blockly.Blocks.huskyLensVision_photoToSDCard = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_PHOTO_TO_SD_CARD,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PHOTO',
                        options: [
                            [Blockly.Msg.PHOTO_TAKE_PHOTO, 'takePhoto'],
                            [Blockly.Msg.PHOTO_SCREEN_SHOT, 'screenshot']
                        ]
                    }
                ],
                "tooltip": "此积木可以触发拍照或截屏成图片保存到huskylens上的TF卡。注意需要在Huskylens上插一张TF卡，截屏出的图片包含屏幕上显示的文字方框等内容，拍照出的图只包含摄像头中的照片，没有方框文字信息",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.huskyLensVision_ModelToTFCard = {
        init: function () {
            this.jsonInit ({
                message0: '%1',
                message1: Blockly.Msg.HUSKYLENSVISION_MODEL_TO_TF_CARD,
                args0: [
                    {
                        type: 'field_image',
                        src: huskyLens_vision_icon,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MODEL',
                        options: [
                            [Blockly.Msg.MODEL_SAVE, 'saveModelToTFCard'],
                            [Blockly.Msg.MODEL_LOAD, 'loadModelFromTFCard']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SN',
                    }
                ],
                "tooltip": "加载或保存模型到HUSKYLENS上的TF卡。需要在HUSKYLENS上插上TF卡，可以保存5组数据，每个算法分开保存",
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.huskyLens_model_dropdown = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SN',
                        options: huskyLens_algorithm_model_sn
                    }
                ],
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;