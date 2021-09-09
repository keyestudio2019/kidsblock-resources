/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_VARIABLE_LABEL:'Variable Type',
        KS_variables_declare:'Declare %1 variable Type %2 Name %3 Assigned to %4',
        KS_variables_set:'Set %1 variable by %2',
        KS_variables_change:'Change %1 variable mode %2',
        KS_variables_value: 'variable %1',
        KS_variables_setString:'Set %1 String variable by %2',
        KS_global:'Global',
        KS_local:'Local',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'long',
        KS_MATH_FLOAT: 'float',
        KS_MATH_BOOLEAN: 'boolean',
        KS_MATH_BYTE: 'byte',
        KS_MATH_CHAR: 'char',
        KS_MATH_STRING: 'string',
        KS_MATH_UNSIGNED_INT: 'unsigned int',
        KS_MATH_WORD: 'word',
        KS_MATH_UNSIGNED_LONG: 'unsigned long',
        KS_MATH_UNSIGNED_CHAR: 'unsigned char',
        KS_MATH_DOUBLE: 'double',

        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'logic',
        KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_VARIABLE_LABEL:'变量类型',
        KS_variables_declare:'声明 %1 数字变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_declare2:'声明 %1 字符串变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_set:'设置 %1 变量 为 %2',
        KS_variables_change:'设置 %1 变量 模式 %2',
        KS_variables_value: '变量 %1',
        KS_variables_setString:'设置 %1 字符串变量 为 %2',
        KS_global:'全局',
        KS_local:'局部',
        KS_MATH_INT: '整数',
        KS_MATH_LONG: '长整数',
        KS_MATH_FLOAT: '小数',
        KS_MATH_BOOLEAN: '布尔',
        KS_MATH_BYTE: '字节',
        KS_MATH_CHAR: '字符',
        KS_MATH_STRING: '字符串',
        KS_MATH_UNSIGNED_INT: '无符号整数',
        KS_MATH_WORD: '字',
        KS_MATH_UNSIGNED_LONG: '无符号长整数',
        KS_MATH_UNSIGNED_CHAR: '无符号字符',
        KS_MATH_DOUBLE: '双精度浮点数',

        KS_TEXT_LABEL:'文本',
        KS_char: '\'%1\'',
        KS_string: '\"%1\"',
        KS_data: '%1',

        KS_LOGIC_LABEL:'逻辑',
        KS_judge:'%1 %2 %3',
    });
    return Blockly;
}

exports = addMsg;
