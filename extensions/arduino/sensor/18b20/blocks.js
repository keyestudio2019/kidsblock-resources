/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const t18b20IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNTcuMSAyOC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ny4xIDI4Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSIxOEIyMC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjciPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyNSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcyMyIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxOS41Nzk2ODUiCiAgIGlua3NjYXBlOmN4PSIyOC41NDk5OTkiCiAgIGlua3NjYXBlOmN5PSIxNC4zNSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik00NC43LDIyYy0zLjIsMC01LjgtMi42LTUuOC01LjhjMC0zLjIsMi42LTUuOCw1LjgtNS44czUuOCwyLjYsNS44LDUuOEM1MC41LDE5LjQsNDcuOSwyMiw0NC43LDIyIgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNDQuNywzLjhjLTMuOSwwLTcuNCwxLjgtOS43LDQuNkg3LjlDMy42LDguNCwwLDEyLDAsMTYuNGMwLDQuNCwzLjYsNy45LDcuOSw3LjloMjcuMyAgIGMyLjMsMi43LDUuNyw0LjQsOS41LDQuNGM2LjksMCwxMi41LTUuNiwxMi41LTEyLjVTNTEuNiwzLjgsNDQuNywzLjggTTM1LjEsMjIuMkg3LjljLTMuMiwwLTUuOS0yLjYtNS45LTUuOSAgIGMwLTMuMiwyLjYtNS44LDUuOS01LjhoMjcuM2wxLjUtMC45YzEuOS0yLjMsNC44LTMuNyw4LTMuN2M1LjcsMCwxMC40LDQuNywxMC40LDEwLjRzLTQuNywxMC40LTEwLjQsMTAuNGMtMy4yLDAtNi4xLTEuNS04LTMuNyAgIEwzNS4xLDIyLjJ6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNDEuMSwxOUgxNi42Yy0wLjYsMC0xLjEtMC41LTEuMS0xLjJ2LTMuMmMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMjQuNVYxOXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik03LjIsOC40SDcuMUM2LjYsOC40LDYuMiw4LDYuMiw3LjVWMC45QzYuMiwwLjQsNi42LDAsNy4xLDBoMC4xYzAuNSwwLDAuOSwwLjQsMC45LDAuOXY2LjYgICBDOC4xLDgsNy43LDguNCw3LjIsOC40IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjYsOC40aC0wLjFjLTAuNSwwLTAuOS0wLjQtMC45LTAuOVYyLjljMC0wLjUsMC40LTAuOSwwLjktMC45aDAuMWMwLjUsMCwwLjksMC40LDAuOSwwLjl2NC42ICAgQzEyLjUsOCwxMi4xLDguNCwxMS42LDguNCIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xNS45LDguNGgtMC4xYy0wLjUsMC0wLjktMC40LTAuOS0wLjlWMC45YzAtMC41LDAuNC0wLjksMC45LTAuOWgwLjFjMC41LDAsMC45LDAuNCwwLjksMC45djYuNiAgIEMxNi44LDgsMTYuNCw4LjQsMTUuOSw4LjQiCiAgIGlkPSJwYXRoMTQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjQuNiw4LjRoLTAuMmMtMC41LDAtMC45LTAuNC0wLjktMC45VjAuOUMyMy42LDAuNCwyNCwwLDI0LjUsMGgwLjJjMC41LDAsMC45LDAuNCwwLjksMC45djYuNiAgIEMyNS41LDgsMjUuMSw4LjQsMjQuNiw4LjQiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjAuMyw4LjRoLTAuMWMtMC41LDAtMC45LTAuNC0wLjktMC45VjIuOWMwLTAuNSwwLjQtMC45LDAuOS0wLjloMC4xYzAuNSwwLDAuOSwwLjQsMC45LDAuOXY0LjYgICBDMjEuMiw4LDIwLjgsOC40LDIwLjMsOC40IgogICBpZD0icGF0aDE4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.t18b20_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.T18B20_READ_TEMPERATURE,
                args0: [
                    {
                        type: 'field_image',
                        src: t18b20IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['C°', '0'],
                            ['F', '1']
                            ]
                    }
                   
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
