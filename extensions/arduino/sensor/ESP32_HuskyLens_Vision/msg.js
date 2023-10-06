/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens camera',
        HUSKYLENSVISION_BEGIN_I2C: 'Initializes HuskyLens (I2C) address 0x32',
        HUSKYLENSVISION_WRITE_ALGORITHM: 'HuskyLens switches to the %1 algorithm',
        FACE_RECOGNITION: 'face recognition',
        OBJECT_TRACKING: 'object tracking',
        OBJECT_RECOGNITION: 'object recognition',
        LINE_TRACKING: 'line walking',
        COLOR_RECOGNITION: 'color recognition',
        TAG_RECOGNITION: 'label recognition',
        OBJECT_CLASSIFICATION: 'Object Classify ',
        QR_RECOGNITION: 'Qr code recognition (exclusive to Education Edition)',
        BARCODE_RECOGNITION: 'Bar code recognition(exclusive to Education Edition)',
        HUSKYLENSVISION_REQUEST: 'HuskyLens Request a data deposit result',

        HUSKYLENSVISION_READ_LEARNED_ID_COUNT: 'HuskyLens Gets the total number of learned ids from the result',
        HUSKYLENSVISION_IS_APPEAR_DIRECT: 'HuskyLens gets %1 from the result in the screen?',
        RESULT_BLOCK: 'BLOCK',
        RESULT_ARROW: 'ARROW',
        HUSKYLENSVISION_READ_BLOCK_CENTER_PARAMETER_DIRECT: 'HuskyLens Gets the %1 parameter near the center box from the result',
        BLOCK_PARAMETER_ID: 'ID',
        BLOCK_PARAMETER_XCENTER: 'X centre',
        BLOCK_PARAMETER_YCENTER: 'Y centre',
        BLOCK_PARAMETER_WIDTH: 'width',
        BLOCK_PARAMETER_HEIGHT: 'height',
        HUSKYLENSVISION_READ_ARROW_CENTER_PARAMETER_DIRECT: 'HuskyLens Gets the %1 parameter near the center arrow from the result',
        ARROW_PARAMETER_ID: 'ID',
        ARROW_PARAMETER_XORIGIN: 'X starting point',
        ARROW_PARAMETER_YORIGIN: 'Y starting point',
        ARROW_PARAMETER_XTARGET: 'X end point',
        ARROW_PARAMETER_YTARGET: 'Y end point',

        HUSKYLENSVISION_IS_LEARNED: 'HuskyLens Get ID %1 from the results learned?',
        HUSKYLENSVISION_IS_APPEAR: 'HuskyLens Get ID %1 %2 from the result in the screen ？',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER: 'HuskyLens Gets parameter %2 of the ID %1 box from the result',
        HUSKYLENSVISION_READ_ARROW_PARAMETER: 'HuskyLens Gets parameter %2 for the ID %1 arrow from the result',

        HUSKYLENSVISION_READ_COUNT: 'HuskyLens Gets the %1 total from the result',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER_DIRECT: 'HuskyLens Gets the %2 argument of the %1 th box from the result',
        HUSKYLENSVISION_READ_ARROW_PARAMETER_DIRECT: 'HuskyLens Gets the %2 parameter of the %1th arrow from the result',

        HUSKYLENSVISION_READ_COUNT2: 'HuskyLens Get the ID %1 %2 total from the result',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER2: 'HuskyLens Gets parameter %3 of the %2th box of ID %1 from the result',
        HUSKYLENSVISION_READ_ARROW_PARAMETER2: 'HuskyLens Gets parameter %3 of the %2th arrow of ID %1 from the result',

        HUSKYLENSVISION_LEARN_ONCE: 'HuskyLens 自动学习一次ID %1',
        HUSKYLENSVISION_FORGET_LEARN: 'HuskyLens Forget all learning data for the current algorithm',
        HUSKYLENSVISION_WRITE_NAME: 'HuskyLens Set the current algorithm ID %1 to name %2',

        HUSKYLENSVISION_WRITE_OSD: 'HuskyLens Superposition the text %3 on the screen at X:%1, Y:%2',
        HUSKYLENSVISION_CLEAR_OSD: 'HuskyLens Clear the text displayed on the screen',

        HUSKYLENSVISION_PHOTO_TO_SD_CARD: 'HuskyLens Trigger %1 saved on memory card',
        PHOTO_TAKE_PHOTO: 'PHOTO',
        PHOTO_SCREEN_SHOT: 'SHOT',
        HUSKYLENSVISION_MODEL_TO_TF_CARD: 'HuskyLens  %1 The current algorithm data is SD card %2 model',
        MODEL_SAVE: 'SAVE',
        MODEL_LOAD: 'LOAD'

    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens摄像头',
        HUSKYLENSVISION_BEGIN_I2C: '初始化HuskyLens (I2C) 地址 0x32',
        HUSKYLENSVISION_WRITE_ALGORITHM: 'HuskyLens 切换到 %1 算法',
        FACE_RECOGNITION: '人脸识别',
        OBJECT_TRACKING: '物体追踪',
        OBJECT_RECOGNITION: '物体识别',
        LINE_TRACKING: '巡线',
        COLOR_RECOGNITION: '颜色识别',
        TAG_RECOGNITION: '标签识别',
        OBJECT_CLASSIFICATION: '物体分类',
        QR_RECOGNITION: '二维码识别(教育版独有)',
        BARCODE_RECOGNITION: '条形码识别(教育版独有)',
        HUSKYLENSVISION_REQUEST: 'HuskyLens 请求一次数据 存入结果',

        HUSKYLENSVISION_READ_LEARNED_ID_COUNT: 'HuskyLens 从结果中获取 已学ID总数',
        HUSKYLENSVISION_IS_APPEAR_DIRECT: 'HuskyLens 从结果中获取 %1 在画面中 ？',
        RESULT_BLOCK: '方框',
        RESULT_ARROW: '箭头',
        HUSKYLENSVISION_READ_BLOCK_CENTER_PARAMETER_DIRECT: 'HuskyLens 从结果中获取靠近中心 方框 的 %1 参数',
        BLOCK_PARAMETER_ID: 'ID',
        BLOCK_PARAMETER_XCENTER: 'X中心',
        BLOCK_PARAMETER_YCENTER: 'Y中心',
        BLOCK_PARAMETER_WIDTH: '宽度',
        BLOCK_PARAMETER_HEIGHT: '高度',
        HUSKYLENSVISION_READ_ARROW_CENTER_PARAMETER_DIRECT: 'HuskyLens 从结果中获取靠近中心 箭头 的 %1 参数',
        ARROW_PARAMETER_ID: 'ID',
        ARROW_PARAMETER_XORIGIN: 'X起点',
        ARROW_PARAMETER_YORIGIN: 'Y起点',
        ARROW_PARAMETER_XTARGET: 'X终点',
        ARROW_PARAMETER_YTARGET: 'Y终点',

        HUSKYLENSVISION_IS_LEARNED: 'HuskyLens 从结果中获取ID %1 已学习 ？',
        HUSKYLENSVISION_IS_APPEAR: 'HuskyLens 从结果中获取ID %1 %2 在画面中 ？',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER: 'HuskyLens 从结果中获取ID %1 方框 的参数 %2',
        HUSKYLENSVISION_READ_ARROW_PARAMETER: 'HuskyLens 从结果中获取ID %1 箭头 的参数 %2',

        HUSKYLENSVISION_READ_COUNT: 'HuskyLens 从结果中获取 %1 总数',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER_DIRECT: 'HuskyLens 从结果中获取第 %1 个 方框 的 %2 参数',
        HUSKYLENSVISION_READ_ARROW_PARAMETER_DIRECT: 'HuskyLens 从结果中获取第 %1 个 箭头 的 %2 参数',

        HUSKYLENSVISION_READ_COUNT2: 'HuskyLens 从结果中获取ID %1 %2 总数',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER2: 'HuskyLens 从结果中获取ID %1 第 %2 个 方框 的参数 %3',
        HUSKYLENSVISION_READ_ARROW_PARAMETER2: 'HuskyLens 从结果中获取ID %1 第 %2 个 箭头 的参数 %3',

        HUSKYLENSVISION_LEARN_ONCE: 'HuskyLens 自动学习一次ID %1',
        HUSKYLENSVISION_FORGET_LEARN: 'HuskyLens 遗忘当前算法的所有学习数据',
        HUSKYLENSVISION_WRITE_NAME: 'HuskyLens 设置当前算法ID %1 名字为 %2',

        HUSKYLENSVISION_WRITE_OSD: 'HuskyLens 在屏幕X:%1 Y:%2 位置 叠加显示文字 %3',
        HUSKYLENSVISION_CLEAR_OSD: 'HuskyLens 清除屏幕显示的文字',

        HUSKYLENSVISION_PHOTO_TO_SD_CARD: 'HuskyLens 触发 %1 保存在内存卡',
        PHOTO_TAKE_PHOTO: '拍照',
        PHOTO_SCREEN_SHOT: '截屏',
        HUSKYLENSVISION_MODEL_TO_TF_CARD: 'HuskyLens  %1 当前算法数据为SD卡 %2 号模型',
        MODEL_SAVE: '保存',
        MODEL_LOAD: '加载'

    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        HUSKYLENSVISION_CATEGORY: 'HuskyLens攝像頭',
        HUSKYLENSVISION_BEGIN_I2C: '初始化HuskyLens (I2C) 地址 0x32',
        HUSKYLENSVISION_WRITE_ALGORITHM: 'HuskyLens 切換到 %1 演算法',
        FACE_RECOGNITION: '人臉識別',
        OBJECT_TRACKING: '物體追蹤',
        OBJECT_RECOGNITION: '物體識別',
        LINE_TRACKING: '巡線',
        COLOR_RECOGNITION: '顏色識別',
        TAG_RECOGNITION: '標籤識別',
        OBJECT_CLASSIFICATION: '物體分類',
        QR_RECOGNITION: '二維碼識別(教育版獨有)',
        BARCODE_RECOGNITION: '條碼識別(教育版獨有)',
        HUSKYLENSVISION_REQUEST: 'HuskyLens 請求一次數據 存入結果',

        HUSKYLENSVISION_READ_LEARNED_ID_COUNT: 'HuskyLens 從結果中獲取 已學ID總數',
        HUSKYLENSVISION_IS_APPEAR_DIRECT: 'HuskyLens 從結果中獲取 %1 在畫面中 ？',
        RESULT_BLOCK: '方框',
        RESULT_ARROW: '箭頭',
        HUSKYLENSVISION_READ_BLOCK_CENTER_PARAMETER_DIRECT: 'HuskyLens 從結果中獲取靠近中心 方框 的 %1 參數',
        BLOCK_PARAMETER_ID: 'ID',
        BLOCK_PARAMETER_XCENTER: 'X中心',
        BLOCK_PARAMETER_YCENTER: 'Y中心',
        BLOCK_PARAMETER_WIDTH: '寬度',
        BLOCK_PARAMETER_HEIGHT: '高度',
        HUSKYLENSVISION_READ_ARROW_CENTER_PARAMETER_DIRECT: 'HuskyLens 從結果中獲取靠近中心 箭頭 的 %1 參數',
        ARROW_PARAMETER_ID: 'ID',
        ARROW_PARAMETER_XORIGIN: 'X起點',
        ARROW_PARAMETER_YORIGIN: 'Y起點',
        ARROW_PARAMETER_XTARGET: 'X終點',
        ARROW_PARAMETER_YTARGET: 'Y終點',

        HUSKYLENSVISION_IS_LEARNED: 'HuskyLens 從結果中獲取ID %1 已學習 ？',
        HUSKYLENSVISION_IS_APPEAR: 'HuskyLens 從結果中獲取ID %1 %2 在畫面中 ？',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER: 'HuskyLens 從結果中獲取ID %1 方框 的參數 %2',
        HUSKYLENSVISION_READ_ARROW_PARAMETER: 'HuskyLens 從結果中獲取ID %1 箭頭 的參數 %2',

        HUSKYLENSVISION_READ_COUNT: 'HuskyLens 從結果中獲取 %1 總數',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER_DIRECT: 'HuskyLens 從結果中獲取第 %1 個 方框 的 %2 參數',
        HUSKYLENSVISION_READ_ARROW_PARAMETER_DIRECT: 'HuskyLens 從結果中獲取第 %1 個 箭頭 的 %2 參數',

        HUSKYLENSVISION_READ_COUNT2: 'HuskyLens 從結果中獲取ID %1 %2 總數',
        HUSKYLENSVISION_READ_BLOCK_PARAMETER2: 'HuskyLens 從結果中獲取ID %1 第 %2 個 方框 的參數 %3',
        HUSKYLENSVISION_READ_ARROW_PARAMETER2: 'HuskyLens 從結果中獲取ID %1 第 %2 個 箭頭 的參數 %3',

        HUSKYLENSVISION_LEARN_ONCE: 'HuskyLens 自動學習一次ID %1',
        HUSKYLENSVISION_FORGET_LEARN: 'HuskyLens 遺忘當前演算法的所有學習數據',
        HUSKYLENSVISION_WRITE_NAME: 'HuskyLens 設置當前演算法ID %1 名字為 %2',

        HUSKYLENSVISION_WRITE_OSD: 'HuskyLens 在螢幕X:%1 Y:%2 位置 疊加顯示文字 %3',
        HUSKYLENSVISION_CLEAR_OSD: 'HuskyLens 清除螢幕顯示的文字',

        HUSKYLENSVISION_PHOTO_TO_SD_CARD: 'HuskyLens 觸發 %1 保存在內存卡',
        PHOTO_TAKE_PHOTO: '拍照',
        PHOTO_SCREEN_SHOT: '截屏',
        HUSKYLENSVISION_MODEL_TO_TF_CARD: 'HuskyLens  %1 當前演算法數據為SD卡 %2 號模型',
        MODEL_SAVE: '保存',
        MODEL_LOAD: '加載'
        
    });

    return Blockly;
}

exports = addMsg;