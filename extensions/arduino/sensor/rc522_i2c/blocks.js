/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const rc522IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzguMSA3OC4yIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3OC4xIDc4LjI7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJSRklELnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExOSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczE3IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzE1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjExLjA4Njk1NyIKICAgaW5rc2NhcGU6Y3g9IjM5LjA0OTk5OSIKICAgaW5rc2NhcGU6Y3k9IjI4LjI3NjQ2OSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik03OC4xLDQ0YzAtNy40LTAuNi0xMC43LTMuNC0xNy4yQzY5LjUsMTQuOSw1NS44LDYuNCw0Mi4xLDYuNGMwLDExLjYtMS4xLDcuNCw1LjUsOC43ICAgYzkuMywxLjksMTUuNSw3LjQsMTkuNywxNS41YzUsOS45LDIuNiwyMy01LDMwLjhjLTguNCw4LjQtMjEuNSwxMS4xLTMyLjEsNS44Yy02LjItMy0xMC43LTguMi0xMy41LTE0LjUgICBDMTEuNCw0MSwyMC4xLDQxLjksNi42LDQxLjljMCw2LjQsMC45LDEwLjgsMy42LDE2LjNjNS44LDExLjcsMTguNSwyMCwzMiwyMGM4LjgsMCwxOC44LTQsMjQuOS0xMGMzLjItMy4yLDUuMi01LjgsNy40LTEwLjEgICBDNzYuMiw1NC42LDc4LjEsNDkuMSw3OC4xLDQ0IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzUuNSwyOVYyLjhjMC0xLjctMS4xLTIuOC0yLjgtMi44SDMuMUMxLDAsMCwxLjcsMCwzLjl2MjkuN2MwLDIuMSwxLDMuOSwzLjEsMy45aDI0LjEgICBDMjgsMzcuNCwzNS41LDMwLDM1LjUsMjkgTTI0LDI0LjhIMTEuOFYxMi42SDI0VjI0Ljh6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNjIuMSw0M2MwLTExLjUtOC4yLTIwLjYtMTkuOS0yMC42YzAsMTEuNC0wLjYsNy4zLDQuMSw4LjhDNTQsMzMuOCw1Ni42LDQzLjgsNTEuMSw1MCAgIGMtNS4yLDUuOS0xNy45LDUuNi0yMC4yLTYuMmMtMC41LTIuNSwwLjYtMS45LTguMi0xLjljMCw4LjUsNC41LDE1LjMsMTIuMSwxOC42YzUuMywyLjIsMTAuNSwxLjksMTUuNy0wLjMgICBjMS4xLTAuNSwyLjItMS4yLDMuMS0xLjdDNTgsNTUuNCw2Mi4xLDQ5LjYsNjIuMSw0MyIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQ2LjcsNDIuM2MwLTUuNS04LjctNi04LjcsMEMzNy45LDQ4LjEsNDYuNyw0Ny42LDQ2LjcsNDIuMyIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9nPgo8L3N2Zz4K';
    
    Blockly.Blocks.rc522_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RC522_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: rc522IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.rc522_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RC522_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: rc522IconUrl,
                        width: 50,
                        height: 27
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
