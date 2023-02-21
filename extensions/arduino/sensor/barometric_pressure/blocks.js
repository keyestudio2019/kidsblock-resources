/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const bpIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgd2lkdGg9IjUwLjc1OTk5OG1tIgogICBoZWlnaHQ9IjUyLjMzNjAxOG1tIgogICB2ZXJzaW9uPSIxLjEiCiAgIHN0eWxlPSJjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsLXJ1bGU6ZXZlbm9kZDtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5O3NoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247dGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uIgogICB2aWV3Qm94PSIwIDAgNTA3NS45OTk4IDUyMzMuNjAxOCIKICAgaWQ9InN2ZzIzIgogICBzb2RpcG9kaTpkb2NuYW1lPSLmsJTljosuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI3Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzI1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjEuNTQ0NzM5MSIKICAgaW5rc2NhcGU6Y3g9Ii00NC4yOTYwNjIiCiAgIGlua3NjYXBlOmN5PSIxNTMuMjE3MzIiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyMyIgLz4KIDxkZWZzCiAgIGlkPSJkZWZzNCI+CiAgPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KICAgPCFbQ0RBVEFbCiAgICAuZmlsMCB7ZmlsbDojRkZGMDAwfQogICBdXT4KICA8L3N0eWxlPgogCiAgCiAgCiAKICAgCiAgIAogICAKICAgCiAgIAogICAKICAgCiAgPC9kZWZzPgogPHBhdGgKICAgY2xhc3M9ImZpbDAiCiAgIGQ9Im0gMjIyNSwxMDE0LjYwMTcgYyAwLDgyNyAyNTUsNDQwIDI1NSwxMTEzIDAsMjM4IC0yNTUsNDU0IC0yNTUsNzE4IHYgMjc5IGMgMCwyOTkgMjU1LDQxMCAyNTUsNzg4IGggLTYwMyBjIDIzLDg0IDUzMCw5NDMgNjI1LDExMTQgNDUsODIgMjgsMTE0IDExNywxMzcgbCA1MjAsLTk0MCBjIDY1LC0xMTEgMTE4LC0yMDMgMTc1LC0zMTEgaCAtNDg2IGMgMCwtNDkwIC0yNTUsLTU5NCAtMjU1LC03ODggMCwtNDA5IC0yMCwtMjg5IDE0NiwtNTk1IDEwNSwtMTkyIDEwOSwtMzUxIDEwOSwtNTY1IDAsLTMxMyAtMjU1LC01NTMgLTI1NSwtNzE4IDAsLTQwNSAtMjAsLTI3OCAxMzksLTU3OSAxNzcsLTMzNyAxNTgsLTc2MiAtMTE0LC02NDkgLTE1MSw2NCAtOTEsMTYyIC0xMjcsMzM4IC0zNiwxNzUgLTI0NiwzNDcgLTI0Niw2NTggeiIKICAgaWQ9InBhdGg3IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgIGNsYXNzPSJmaWwwIgogICBkPSJtIDM0NywxMDM3LjYwMTcgYyAwLDYyMyAyNTUsNjUwIDI1NSw4ODEgMCw0MDUgMjAsMjc4IC0xMzksNTc5IC0xNTYsMjk2IC0xNjIsNjYwIC04LDk1OSAxMTIsMjE4IDE0NywxNzIgMTQ3LDQ1NiBIIDAgYyAxMTMsMjEzIDIyOCw0MTYgMzQ5LDYyNCA1NywxMDAgMTE2LDIwMiAxNzYsMzExIDQ2LDg0IDE1MCwyNDAgMTcwLDMxNiBsIDM5NCwtNjI2IGMgMTE0LC0yMTAgMjM0LC00MTEgMzQ4LC02MjUgSCA5NTAgYyAwLC0yMTMgLTEyLC0yODUgLTEwOCwtNDcyIC0xNTEsLTI5NSAtMTQ3LC0xNjYgLTE0NywtNTQ4IDAsLTMzNSAyNTUsLTE5OCAyNTUsLTk1MSAwLC00MjMgLTI1NSwtMzIzIC0yNTUsLTkwNCAwLC0zMjUgMjU1LC0yNzQgMjU1LC05MDQgMCwtMTE2IC0zMDgsLTI0MSAtMzQ0LDk2IC0xNywxNTggLTEzLDE2MyAtNzMsMjc2IC03OCwxNTAgLTE4NiwyOTkgLTE4Niw1MzIgeiIKICAgaWQ9InBhdGg5IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwb2x5Z29uCiAgIGNsYXNzPSJmaWwwIgogICBwb2ludHM9IjE2NzQ4LDY5ODIgMTU2MTIsNjk4MiAxNTYxMiw3NDY4IDE2NzQ4LDc0NjggIgogICBpZD0icG9seWdvbjExIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE2NzIsLTY2ODUuMzk4MykiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBvbHlnb24KICAgY2xhc3M9ImZpbDAiCiAgIHBvaW50cz0iMTY3NDgsOTE4NCAxNTYxMiw5MTg0IDE1NjEyLDk2NzAgMTY3NDgsOTY3MCAiCiAgIGlkPSJwb2x5Z29uMTMiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY3MiwtNjY4NS4zOTgzKSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cG9seWdvbgogICBjbGFzcz0iZmlsMCIKICAgcG9pbnRzPSIxNjc0OCwxMTQzMiAxNTYxMiwxMTQzMiAxNTYxMiwxMTkxOSAxNjc0OCwxMTkxOSAiCiAgIGlkPSJwb2x5Z29uMTUiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY3MiwtNjY4NS4zOTgzKSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cG9seWdvbgogICBjbGFzcz0iZmlsMCIKICAgcG9pbnRzPSIxNjc0OCw4MDk0IDE2MDMwLDgwOTQgMTYwMzAsODU4MSAxNjc0OCw4NTgxICIKICAgaWQ9InBvbHlnb24xNyIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjcyLC02Njg1LjM5ODMpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwb2x5Z29uCiAgIGNsYXNzPSJmaWwwIgogICBwb2ludHM9IjE2NzQ4LDEwMzQzIDE2MDMwLDEwMzQzIDE2MDMwLDEwODI5IDE2NzQ4LDEwODI5ICIKICAgaWQ9InBvbHlnb24xOSIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjcyLC02Njg1LjM5ODMpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L3N2Zz4K';
    
    Blockly.Blocks.bmp388_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BMP388_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: bpIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.bmp388_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BMP388_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: bpIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['Pressure', '(float)s32PressureVal / 100'],
                            ['Altitude', '(float)s32AltitudeVal / 100'],
                            ['℃', '(float)s32TemperatureVal / 100']],
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
