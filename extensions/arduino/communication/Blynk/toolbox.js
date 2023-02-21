/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    
    return `
<category name="%{BKY_ADVANCED_BLYNK_CATEGORY}" id="ADVANCED_BLYNK_CATEGORY" colour="#FF3399" secondaryColour="#FF3399">
    <block type="esp32_blynk_server" name="服务器信息">
        <value name="server_add">
            <shadow type="text">
                <field name="TEXT">192.168.0.1</field>
            </shadow>
        </value>
        <value name="auth_key">
            <shadow type="text">
                <field name="TEXT">Get Authtoken from your Blynk project settings！</field>
            </shadow>
        </value>
        <value name="wifi_ssid">
            <shadow type="text">
                <field name="TEXT">ChinaNet-2.4G-0DF0</field>
            </shadow>
        </value>
        <value name="wifi_pass">
            <shadow type="text">
                <field name="TEXT">ChinaNet@233</field>
            </shadow>
        </value>
    </block>
    <block type="esp32_blynk_smartconfig" name="一键配网">
        <value name="server_add">
            <shadow type="text">
                <field name="TEXT">192.168.0.1</field>
            </shadow>
        </value>
        <value name="auth_key">
            <shadow type="text">
                <field name="TEXT">Get Authtoken from your Blynk project settings！</field>
            </shadow>
        </value>
    </block>
    <block type="BLYNK_CONNECTED" name="当连接上blynk云服">
        <statement name="DO"></statement>
    </block>
    <block type="BLYNK_APP_CONNECTED" name="当设备连接上APP">
        <statement name="DO"></statement>
    </block>
    <block type="BLYNK_APP_DISCONNECTED" name="当设备断开APP">
        <statement name="DO"></statement>
    </block>
    <block type="blynk_iot_CONNECTED" name="硬件连接服务器状态(布尔)"></block>
    <block type="blynk_iot_get_data">
        <statement name="DO">
            <block type="serialPrint">
                <value name="VALUE">
                    <block type="blynk_param"></block>
                </value>
            </block>
        </statement>
    </block>
    <block type="blynk_iot_push_data_request" name="推送数据">
        <value name="Vname">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_iot_syncVirtual" name="同步虚拟管脚数据" ></block>
    <block type="Blynk_iot_timer" name="定时器">
        <value name="TIME">
            <shadow type="math_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
        <statement name="DO">
            <block type="blynk_iot_push_data" name="发送数据到app">
                <value name="data">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
        </statement>
    </block>
    <block type="blynk_iot_WidgetLED_COLOR" name="LED组件颜色">
        <value name="RGB_LED_COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="blynk_iot_WidgetLED_VALUE" name="LED组件亮度">
        <value name="RGB_LED_COLOR">
            <shadow type="colour_picker"/>
        </value>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_email" name="发送邮件">
        <value name="email_add">
            <shadow type="text">
                <field name="TEXT">example@keyestudio.com</field>
            </shadow>
        </value>
        <value name="Subject">
            <shadow type="text">
                <field name="TEXT">Subject</field>
            </shadow>
        </value>
        <value name="content">
            <shadow type="text">
                <field name="TEXT">Content</field>
            </shadow>
        </value>
    </block>
   <!-- <block type="blynk_notify" name="发送通知">
        <value name="content">
            <shadow type="text">
                <field name="TEXT">通知内容</field>
            </shadow>
        </value>
    </block>
    -->
    <block type="blynk_terminal_clear" name="终端清屏"></block>
    <block type="blynk_iot_terminal_get" name="终端组件获取文本">
        <statement name="DO">
            <block type="serialPrint" >
                <value name="VALUE">
                    <block type="QH_variables_get">
                        <value name="VAR">
                            <shadow type="text">
                                <field name="TEXT">action</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
        </statement>
    </block>
    <block type="blynk_terminal" name="终端组件显示文本">
        <value name="content">
            <shadow type="text">
                <field name="TEXT">Hello,World!</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_lcd">
        <value name="x">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="value">
            <shadow type="math_number">
                <field name="NUM">923</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_lcd_clear"></block>
    <block type="blynk_table">
        <value name="xnyj">
            <shadow type="math_number">
                <field name="NUM">V0</field>
            </shadow>
        </value>
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="mingcheng">
            <shadow type="text">
                <field name="TEXT">Name</field>
            </shadow>
        </value>
        <value name="shujv">
            <shadow type="text">
                <field name="TEXT">John</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_table_highlight">
        <value name="xnyj">
            <shadow type="math_number">
                <field name="NUM">V0</field>
            </shadow>
            <value name="xnyj">
                <shadow type="math_number">
                    <field name="NUM">V0</field>
                </shadow>
            </value>
        </value>
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_table_cleardata">
        <value name="xnyj">
            <shadow type="math_number">
                <field name="NUM">V0</field>
            </shadow>
            <value name="xnyj">
                <shadow type="math_number">
                    <field name="NUM">V0</field>
                </shadow>
            </value>
        </value>
        <value name="id">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_time_input_1" name="时间输入">
        <statement name="DO">
            <block type="serialPrint">
                <value name="VALUE">
                    <block type="QH_variables_get">
                        <value name="VAR">
                            <shadow type="text">
                                <field name="TEXT">hour</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="serialPrint">
                        <value name="VALUE">
                            <block type="QH_variables_get">
                                <value name="VAR">
                                    <shadow type="text">
                                        <field name="TEXT">minute</field>
                                    </shadow>
                                </value>
                            </block>
                        </value>
                        <next></next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <block type="blynk_videourl" name="视频流">
        <value name="url">
            <shadow type="text">
                <field name="TEXT">http://yourvideostream.url</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_bridge_auth" name="桥接授权码">
        <value name="auth">
            <shadow type="text">
                <field name="TEXT">Get Authtoken from your Blynk project settings！</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_bridge_digitalWrite" name="桥接数字输出">
        <value name="PIN">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="STAT">
            <shadow type="inout_highlow">HIGH</shadow>
        </value>
    </block>
    <block type="blynk_bridge_AnaloglWrite" name="桥接模拟输出">
        <value name="PIN">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_bridge_VPin" name="桥接虚拟管脚">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_WidgetRTC_init" name="RTC组件">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block name="播放音乐组件" type="blynk_iot_playmusic" ></block>
    <block type="blynk_light" name="光线传感器">
        <field name="Vpin">V0</field>
        <statement name="DO">
            <block type="serialPrint" >
                <value name="VALUE">
                    <block type="QH_variables_get">
                        <value name="VAR">
                            <shadow type="text">
                                <field name="TEXT">lx</field>
                            </shadow>
                        </value>
                    </block>
                </value>
            </block>
        </statement>
    </block>
    <block type="blynk_gravity" name="重力传感器">
        <field name="Vpin">V0</field>
        <statement name="DO">
            <block type="serialPrint">
                <value name="VALUE">
                    <block type="QH_variables_get">
                        <value name="VAR">
                            <shadow type="text">
                                <field name="TEXT">x</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="serialPrint">
                        <value name="VALUE">
                            <block type="QH_variables_get">
                                <value name="VAR">
                                    <shadow type="text">
                                        <field name="TEXT">y</field>
                                    </shadow>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="serialPrint">
                                <value name="VALUE">
                                    <block type="QH_variables_get">
                                        <value name="VAR">
                                            <shadow type="text">
                                                <field name="TEXT">z</field>
                                            </shadow>
                                        </value>
                                    </block>
                                </value>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <label text="------"></label>  
    <block type="serialPrint">
        <value name="VALUE">
           <shadow type="text">
                <field name="TEXT">2</field>
            </shadow>
        </value>
    </block>
    <block type="blynk_param"></block>
    <block type="blynk_iot_push_data" name="发送数据到app">
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;
