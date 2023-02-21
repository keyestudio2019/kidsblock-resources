/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#FF6F00';
    const color5 = '#7700FF';
    const color6 = '#42CCFF';
    const color7 = '#FF3399';
    const color8 = '#D39DDB';
    const color9 = '#008000';

    const secondaryColour = '#CD5C5C';
    const LEDIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDQuNSA0NS4zIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NC41IDQ1LjM7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJSR0IgbGVkLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyOSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczI3IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzI1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjE5LjEzOTA3MyIKICAgaW5rc2NhcGU6Y3g9IjIyLjI1IgogICBpbmtzY2FwZTpjeT0iMjguOTE5ODk2IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsMzkuMVYyMS45YzAtNi4zLDUuMS0xMS40LDExLjQtMTEuNHMxMS40LDUuMSwxMS40LDExLjR2MTcuMkMzMy45LDM5LjEsMTEuMSwzOS4xLDExLjEsMzkuMXogTTMxLjgsMjEuOSAgIGMwLTUuMS00LjItOS4zLTkuMy05LjNzLTkuMyw0LjItOS4zLDkuM3YxNWgxOC41TDMxLjgsMjEuOUwzMS44LDIxLjl6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTcsNDQuOVYzMi4xYzAtMywyLjQtNS40LDUuNC01LjRzNS40LDIuNCw1LjQsNS40djEyLjdjMCwwLjMtMC4yLDAuNS0wLjUsMC41cy0wLjUtMC4yLTAuNS0wLjVWMzIuMSAgIGMwLTIuNC0yLTQuNC00LjQtNC40cy00LjQsMi00LjQsNC40djEyLjdjMCwwLjMtMC4yLDAuNS0wLjUsMC41UzE3LDQ1LjEsMTcsNDQuOXoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNS4yLDI2Ljh2LTEuMWMwLTAuNSwwLjQtMC45LDAuOS0wLjloNy41YzAuNSwwLDAuOSwwLjQsMC45LDAuOXYxLjFjMCwwLjUtMC40LDAuOS0wLjksMC45aC03LjUgICBDMzUuNSwyNy42LDM1LjIsMjcuMiwzNS4yLDI2LjgiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMy43LDE1LjVMMzMsMTQuN2MtMC4zLTAuNC0wLjItMC45LDAuMS0xLjJsNS44LTQuOGMwLjQtMC4zLDAuOS0wLjIsMS4yLDAuMWwwLjcsMC44ICAgYzAuMywwLjQsMC4yLDAuOS0wLjEsMS4ybC01LjgsNC44QzM0LjUsMTUuOSwzNCwxNS44LDMzLjcsMTUuNSIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik05LjMsMjYuOHYtMS4xYzAtMC41LTAuNC0wLjktMC45LTAuOUgwLjljLTAuNSwwLTAuOSwwLjQtMC45LDAuOXYxLjFjMCwwLjUsMC40LDAuOSwwLjksMC45aDcuNSAgIEM5LDI3LjYsOS4zLDI3LjIsOS4zLDI2LjgiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjEuNyw5LjJoMS4xYzAuNSwwLDAuOC0wLjQsMC44LTAuOFYwLjljMC0wLjUtMC40LTAuOS0wLjgtMC45aC0xLjFjLTAuNSwwLTAuOSwwLjQtMC45LDAuOXY3LjUgICBDMjAuOSw4LjgsMjEuMiw5LjIsMjEuNyw5LjIiCiAgIGlkPSJwYXRoMTQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTAuOCwxNS41bDAuNy0wLjhjMC4zLTAuNCwwLjItMC45LTAuMS0xLjJMNS42LDguN0M1LjIsOC40LDQuNyw4LjUsNC40LDguOEwzLjcsOS42ICAgYy0wLjMsMC40LTAuMiwwLjksMC4xLDEuMmw1LjgsNC44QzEwLDE1LjksMTAuNSwxNS44LDEwLjgsMTUuNSIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yMi40LDI5LjljLTEuNSwwLTIuNi0xLjItMi42LTIuNmMwLTEuNSwxLjItMi42LDIuNi0yLjZjMS41LDAsMi42LDEuMiwyLjYsMi42UzIzLjgsMjkuOSwyMi40LDI5LjkiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNy4xLDM4di0xYzAtMS4xLDAuOS0yLDItMmgyNi44YzEuMSwwLDIsMC45LDIsMnYxYzAsMS4xLTAuOSwyLTIsMkg5LjFDOCw0MCw3LjEsMzkuMSw3LjEsMzgiCiAgIGlkPSJwYXRoMjAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    const motor130IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjkuNCA3Mi43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2OS40IDcyLjc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSIxMzDpo47miYfmqKHlnZcuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTEuOTI1NzIzIgogICBpbmtzY2FwZTpjeD0iMzQuNzAwMDAxIgogICBpbmtzY2FwZTpjeT0iMzYuMzQ5OTk4IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjYsNDFjLTAuOSwwLjEtMS43LTAuNC0yLjEtMS4yYy0wLjEtMC4yLTEyLjQtMjQuMSw4LjMtMzYuMWM2LjEtMy41LDExLjctNC40LDE2LjYtMi42ICAgYzcuNCwyLjgsMTAuMiwxMC44LDEwLjMsMTEuMnYwLjFjMC4yLDAuOCwyLjEsOC4yLTEuNiwxMi45Yy0xLjksMi40LTQuOSwzLjYtOC43LDMuNEMzOS4yLDI3LjksMzcuOCwzOC45LDM3LjgsMzkgICBjLTAuMSwxLTAuOCwxLjgtMS44LDEuOUMzNS44LDQwLjksMzUuNyw0MSwzNS42LDQxIE01Mi4zLDQuN0M0OS44LDQuOSw0Nyw1LjgsNDQsNy42Yy0xMiw2LjktMTAuNSwxOC44LTguNSwyNS4zICAgYzIuOS00LjMsOS4yLTkuMywyMy04LjdjMi40LDAuMSw0LTAuNSw1LTEuN2MxLjktMi40LDEuMi03LjIsMC44LTguOGMtMC4yLTAuNi0yLjUtNi40LTcuNi04LjRDNTUuNCw0LjgsNTMuOSw0LjYsNTIuMyw0Ljd6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzcuMywzNy44Yy0wLjEsMC45LTAuNywxLjYtMS42LDEuOWMtMC4zLDAuMS0yNS45LDcuOC0zNC0xNC43Yy0yLjQtNi43LTIuMi0xMi4zLDAuNS0xNi44ICAgQzYuMywxLjQsMTQuNywwLjEsMTUsMC4xaDAuMUMxNiwwLDIzLjUtMC41LDI3LjQsNGMyLDIuMywyLjYsNS40LDEuOCw5LjJjLTQuMywxOC43LDYuMywyMi4xLDYuNCwyMi4yYzAuOSwwLjMsMS42LDEuMSwxLjYsMi4xICAgQzM3LjMsMzcuNywzNy4zLDM3LjgsMzcuMywzNy44IE00LjcsMTQuOWMtMC4zLDIuNSwwLjIsNS40LDEuMyw4LjZjNC43LDEzLjEsMTYuNSwxMy43LDIzLjQsMTIuOWMtMy43LTMuNS03LjUtMTAuNi00LjUtMjQuMSAgIGMwLjUtMi4zLDAuMy00LjEtMC44LTUuM2MtMi0yLjMtNi45LTIuNS04LjUtMi40Yy0wLjcsMC4xLTYuOCwxLjMtOS42LDZDNS4zLDExLjksNC44LDEzLjMsNC43LDE0Ljl6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzMuOCwzMS45YzAuOS0wLjEsMS43LDAuNCwyLjEsMS4yYzAuMSwwLjIsMTIuNCwyNC4xLTguMywzNi4xYy02LjEsMy41LTExLjcsNC40LTE2LjYsMi42ICAgQzMuNyw2OC45LDAuOSw2MC45LDAuOCw2MC42di0wLjFjLTAuMi0wLjgtMi4xLTguMiwxLjYtMTIuOWMxLjktMi40LDQuOS0zLjYsOC43LTMuNEMzMC4zLDQ1LDMxLjcsMzQsMzEuOCwzMy45ICAgYzAuMS0xLDAuOC0xLjgsMS44LTEuOUMzMy43LDMxLjksMzMuOCwzMS45LDMzLjgsMzEuOSBNMTcuMiw2OC4xYzIuNS0wLjIsNS4zLTEuMSw4LjMtMi45YzEyLTYuOSwxMC41LTE4LjgsOC41LTI1LjMgICBjLTIuOSw0LjMtOS4yLDkuMy0yMyw4LjdjLTIuNC0wLjEtNCwwLjUtNSwxLjdjLTEuOSwyLjQtMS4yLDcuMi0wLjgsOC44YzAuMiwwLjYsMi41LDYuNCw3LjYsOC40QzE0LjEsNjgsMTUuNiw2OC4yLDE3LjIsNjguMXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMi4yLDM1YzAuMS0wLjksMC43LTEuNiwxLjYtMS45YzAuMy0wLjEsMjUuOS03LjgsMzQsMTQuN2MyLjQsNi43LDIuMiwxMi4zLTAuNSwxNi44ICAgYy00LjEsNi44LTEyLjUsOC4xLTEyLjgsOC4xaC0wLjFjLTAuOSwwLjEtOC40LDAuNi0xMi4zLTMuOWMtMi0yLjMtMi42LTUuNC0xLjgtOS4yYzQuMS0xOC43LTYuNC0yMi4yLTYuNS0yMi4yICAgYy0wLjktMC4zLTEuNi0xLjEtMS42LTIuMUMzMi4yLDM1LjIsMzIuMiwzNS4xLDMyLjIsMzUgTTY0LjgsNThjMC4zLTIuNS0wLjItNS40LTEuMy04LjZjLTQuNy0xMy4xLTE2LjYtMTMuOC0yMy40LTEzICAgYzMuNywzLjYsNy41LDEwLjcsNC40LDI0LjJjLTAuNSwyLjMtMC4zLDQuMSwwLjgsNS4zYzIsMi4zLDYuOSwyLjUsOC41LDIuNGMwLjctMC4xLDYuOC0xLjMsOS42LTZDNjQuMiw2MSw2NC42LDU5LjYsNjQuOCw1OHoiCiAgIGlkPSJwYXRoMTAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    const buzzerIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzAuMSA0OCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAuMSA0ODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IuaXoOa6kOicgum4o+WZqC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcxNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxOC4wNjI1IgogICBpbmtzY2FwZTpjeD0iMTUuMDUiCiAgIGlua3NjYXBlOmN5PSIyOC40MjkwNjYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cmVjdAogICB4PSIxNS45IgogICB5PSI5LjUiCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIyLjkiCiAgIGhlaWdodD0iMy4yIgogICBpZD0icmVjdDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIxMC45IgogICB5PSI0LjciCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIzLjciCiAgIGhlaWdodD0iMy43IgogICBpZD0icmVjdDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIyMC42IgogICBjbGFzcz0ic3QwIgogICB3aWR0aD0iMy43IgogICBoZWlnaHQ9IjMuNyIKICAgaWQ9InJlY3Q4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTMwLDIwLjFjMC0xLjQsMC0yLjUsMC0zLjJ2LTAuM2gtMC4zYy0wLjksMC00LjQsMC44LTcuMSwxLjVjLTEuMSwwLjMtMi4xLDAuNS0yLjYsMC42ICAgYy0zLjIsMC42LTYuMywxLjMtOS4zLDJsLTAuNCwwLjF2MTYuNmMtMC40LTAuMS0wLjctMC4xLTEuMS0wLjJjLTAuNi0wLjEtMS4yLTAuMy0yLjEtMC4zYy0zLDAtNy4xLDMuMy03LjEsNi42ICAgYzAsMS45LDEuNSwzLjUsMy43LDQuMkM0LjMsNDcuOSw1LDQ4LDUuNiw0OGMyLjIsMCw0LjgtMSw2LjUtMy44YzAuNi0wLjksMC43LTEuMywwLjctMi43YzAtMi42LDAtNS4xLDAtNy43YzAtMS42LDAtMy4zLDAtNC45ICAgYzEuNS0wLjUsMTEuNS0yLjksMTQuMS0zLjN2OC4yYy0wLjEsMC0wLjItMC4xLTAuMy0wLjFjLTAuNy0wLjItMS4zLTAuNC0yLjMtMC40Yy0zLjYsMC02LjMsMi4zLTcuMiw0LjVjLTAuOCwxLjktMC40LDMuNywwLjksNSAgIGMyLjIsMi4xLDcuMiwxLjcsOS44LTAuOWMwLjQtMC40LDEuMi0xLjYsMS41LTIuMUMzMC4yLDM4LDMwLjEsMjguNywzMCwyMC4xeiBNMjYuNSwyMy40Yy0wLjIsMC0wLjMsMC4xLTAuNiwwLjFsLTUuNiwxLjIgICBjLTAuNSwwLjEtMS4xLDAuMy0xLjksMC40Yy0yLjEsMC41LTQuNywxLjEtNS43LDEuMWgtMC4zdi0yLjljMC0xLDAuNi0xLjEsMS4yLTEuMmMwLjEsMCwwLjMsMCwwLjQtMC4xbDEzLjYtMi44djAuNCAgIGMwLDAuNSwwLDAuOSwwLDEuM0MyNy42LDIzLDI3LjYsMjMuMywyNi41LDIzLjR6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    const ksservoIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDkuMyA1NC42IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OS4zIDU0LjY7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLoiLXmnLouc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTM1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMzMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MzEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTUuODc5MTIxIgogICBpbmtzY2FwZTpjeD0iMjQuNjUiCiAgIGlua3NjYXBlOmN5PSIyNy4yOTk5OTkiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcyOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMCw0OS4xQzAsNDksMCw0OSwwLDQ4LjljMC4xLTAuNCwwLjMtMC43LDAuNi0wLjhsNi44LTMuN2MwLjQtMC4yLDEtMC4yLDEuNCwwLjFsNC4zLDMuNyAgIGMwLjMsMC4zLDAuNCwwLjYsMC40LDFzLTAuMiwwLjctMC42LDAuOWwtNy4yLDQuM2MtMC41LDAuMy0xLjEsMC4yLTEuNS0wLjJjLTAuNC0wLjQtMy42LTMuOS0zLjktNC4zQzAuMSw0OS44LDAsNDkuNSwwLDQ5LjEgICAgTTcuOCw0Ni44bC00LjcsMi42YzAuNiwwLjcsMS41LDEuNiwyLjIsMi40bDQuOS0zTDcuOCw0Ni44eiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsNDkuMUwxMS4xLDQ5LjFjMC0wLjcsMC42LTEuMiwxLjItMS4ybDE3LjUsMC4zYzAuMiwwLDguNCwwLjcsMTEuNi0zLjVjMi44LTMuNy0wLjctNi42LTEuMS02LjkgICBjLTAuNS0wLjQtMC42LTEuMi0wLjItMS43YzAuNC0wLjUsMS4xLTAuNiwxLjctMC4yYzIsMS41LDUsNS43LDEuNiwxMC4yYy00LDUuMy0xMy4yLDQuNS0xMy42LDQuNWwtMTcuNS0wLjMgICBDMTEuNiw1MC4zLDExLjEsNDkuOCwxMS4xLDQ5LjEiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik04LjgsNDcuMUw4LjgsNDcuMWMwLTAuNywwLjYtMS4yLDEuMi0xLjJsMTguNCwwLjNjMi4xLDAsNy45LTAuNCwxMC4zLTIuNmMwLjktMC44LDEuMy0xLjYsMS4yLTIuMiAgIGMtMC4yLTEuMS0xLjYtMi0yLTIuM2MtMC42LTAuMy0wLjgtMS0wLjUtMS42czEtMC44LDEuNi0wLjVjMC4zLDAuMiwzLDEuNiwzLjQsNC4xYzAuMiwxLjUtMC40LDMtMiw0LjNjLTMuNiwzLjMtMTEuNiwzLjItMTIsMy4yICAgTDEwLDQ4LjNDOS4zLDQ4LjMsOC44LDQ3LjgsOC44LDQ3LjEiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02LjgsNDUuNUM2LjgsNDUuNSw2LjgsNDUuMyw2LjgsNDUuNWMwLTAuNywwLjYtMS4yLDEuMi0xLjJsMTYuMSwwLjNjMy45LDAuMiwxMC42LTAuMiwxMi4zLTEuOCAgIGMwLjItMC4yLDAuNy0wLjcsMC42LTEuMWMtMC4xLTAuNS0xLjItMS4yLTEuOS0xLjRjLTAuNi0wLjItMC45LTAuOS0wLjctMS41czAuOS0wLjksMS41LTAuN2MwLjMsMC4xLDMsMS4xLDMuNCwzLjIgICBjMC4yLDAuOCwwLDItMS40LDMuM2MtMywyLjgtMTIuOSwyLjQtMTQsMi40TDcuOCw0Ni43QzcuMyw0Ni42LDYuOCw0Niw2LjgsNDUuNSIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC41LDMxLjVMMTAuNSwzMS41bDAuNi0yNC40YzAtMC43LDAuNi0xLjIsMS4yLTEuMmMwLjcsMCwxLjIsMC42LDEuMiwxLjJsLTAuNiwyMy42TDMwLjQsNDBsMTAuOC00LjUgICBsLTAuNi02LjljLTAuMS0wLjcsMC40LTEuMiwxLjEtMS4zYzAuNy0wLjEsMS4yLDAuNCwxLjMsMS4xbDAuNiw3LjdjMCwwLjUtMC4zLDEtMC43LDEuMmwtMTIuMSw1LjJjLTAuMywwLjEtMC43LDAuMS0xLDAgICBsLTE4LjYtOS45QzEwLjcsMzIuNSwxMC41LDMyLDEwLjUsMzEuNSIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yLjgsMTEuM0MyLjgsMTEuMywyLjgsMTEuMiwyLjgsMTEuM2MwLTAuNSwwLjMtMC45LDAuNy0xLjFMMjMuMywwLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwbDYuOCwzLjZMMzcsMC45ICAgYzAuNC0wLjIsMS0wLjIsMS4zLDAuMkw0Mi44LDVjMC4zLDAuMiwwLjQsMC42LDAuNCwxUzQzLDYuNyw0Mi42LDYuOWwtMy4zLDIuMWwzLjMsMi4zYzAuNCwwLjMsMC42LDAuNywwLjUsMS4xbC0wLjYsNS4yICAgYzEuNSwwLjksNC41LDIuOSw2LjMsNC4yYzAuMywwLjIsMC41LDAuNiwwLjUsMWMwLDAuMiwwLDAuMy0wLjEsMC41bDAuMSwxLjJjMCwwLjUtMC4yLDAuOS0wLjUsMS4xbC0xMSw3LjIgICBjLTAuNCwwLjMtMC45LDAuMy0xLjMsMEwzLjQsMTIuM0MzLDEyLjEsMi44LDExLjgsMi44LDExLjMgTTIzLjgsMi42TDYuNCwxMS41bDIzLDE0LjJjLTAuMy0wLjQtMC40LTEtMC4xLTEuNCAgIGMwLjQtMC41LDEuMS0wLjcsMS43LTAuM2w2LDQuMWw4LjgtNS4zYy0yLjQtMS42LTQuOC0zLjItNS4yLTMuM2MtMC41LTAuMi0wLjgtMC43LTAuNy0xLjNsMC43LTUuM0wzNi40LDEwICAgYy0wLjMtMC4yLTAuNS0wLjYtMC41LTFzMC4yLTAuOCwwLjYtMWwzLjYtMi4ybC0yLjctMi4zbC01LjcsMi44Yy0wLjMsMC4yLTAuOCwwLjItMS4xLDBMMjMuOCwyLjZ6IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI5LjIsMjQuOGMwLTAuNCwwLjItMC44LDAuNi0xbDEwLjctNi43YzAuNi0wLjQsMS4zLTAuMiwxLjcsMC40czAuMiwxLjMtMC40LDEuN2wtMTAuNyw2LjcgICBjLTAuNiwwLjQtMS4zLDAuMi0xLjctMC40QzI5LjMsMjUuMywyOS4yLDI1LjEsMjkuMiwyNC44IgogICBpZD0icGF0aDE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsNy4xYzAtMC4yLDAuMS0wLjQsMC4yLTAuNmMwLjQtMC42LDEuMS0wLjcsMS43LTAuNEwyNS42LDE0bDQuNi0zLjdjMC40LTAuMywwLjktMC40LDEuNC0wLjFsNS44LDMuNCAgIGw0LjItMC44YzAuNy0wLjEsMS4zLDAuMywxLjQsMC45YzAuMSwwLjctMC4zLDEuMy0wLjksMS40bC00LjcsMC45Yy0wLjMsMC4xLTAuNiwwLTAuOC0wLjFsLTUuNS0zLjJsLTQuOCwzLjcgICBjLTAuNCwwLjMtMSwwLjQtMS40LDAuMUwxMS42LDguMUMxMS4zLDcuOSwxMS4xLDcuNSwxMS4xLDcuMSIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xOC45LDEyYzAtMC40LDAuMi0wLjgsMC42LTFsNS0yLjhsLTQuNy00LjRjLTAuNS0wLjUtMC41LTEuMy0wLjEtMS44YzAuNS0wLjUsMS4yLTAuNSwxLjctMC4xbDUuOSw1LjYgICBjMC4zLDAuMywwLjQsMC42LDAuNCwxcy0wLjMsMC43LTAuNiwwLjlMMjAuNywxM2MtMC42LDAuMy0xLjMsMC4xLTEuNi0wLjRDMTksMTIuNCwxOC45LDEyLjIsMTguOSwxMiIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMCw1LjFjMC0wLjYsMC41LTEuMiwxLjEtMS4yYzAuNywwLDEuMiwwLjUsMS4zLDEuMWwwLjIsMi45YzAsMC43LTAuNSwxLjItMS4xLDEuM2MtMC43LDAtMS4yLTAuNS0xLjMtMS4xICAgTDMwLDUuMUwzMCw1LjEiCiAgIGlkPSJwYXRoMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjkuMSw0MS41TDI5LjEsNDEuNWwwLjEtMjIuOWMwLTAuNCwwLjItMC43LDAuNS0xbDUuOS00LjJjMC41LTAuNCwxLjMtMC4zLDEuNywwLjNjMC40LDAuNSwwLjMsMS4zLTAuMywxLjcgICBsLTUuNCwzLjhsLTAuMSwyMi4zYzAsMC43LTAuNSwxLjItMS4yLDEuMkMyOS43LDQyLjYsMjkuMSw0Mi4xLDI5LjEsNDEuNSIKICAgaWQ9InBhdGgyNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNC40LDE1LjRjMC0wLjIsMC4xLTAuNCwwLjItMC42YzAuNC0wLjYsMS4xLTAuNywxLjctMC40bDQuOSwzLjFjMC42LDAuNCwwLjcsMS4xLDAuNCwxLjcgICBjLTAuNCwwLjYtMS4xLDAuNy0xLjcsMC40TDI1LDE2LjZDMjQuNiwxNi4yLDI0LjQsMTUuOCwyNC40LDE1LjQiCiAgIGlkPSJwYXRoMjYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();
    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
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

 // LED

 Blockly.Blocks.LED_setLEDState = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.LED_SET_LED_STATE,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
                    
            ],
            args1: [
                {
                    type: 'field_dropdown',
                    name: 'pin',
                    options: digitalPins
                },
                {
                    type: 'field_dropdown',
                    name: 'state',
                    options: [
                        ['HIGH', 'HIGH'],
                        ['LOW', 'LOW']
                    ]
                }
            ],
            colour: color4,
            extensions: ['shape_statement']
        });
    }
};


// buzzer
  
    Blockly.Blocks.buzzer_tone = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_TONE,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
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
                        name: 'fre',
                        options: [
                            ['NOTE_C3', '131'],
                            ['NOTE_D3', '147'],
                            ['NOTE_E3', '165'],
                            ['NOTE_F3', '175'],
                            ['NOTE_G3', '196'],
                            ['NOTE_A3', '220'],
                            ['NOTE_B3', '247'],
                            ['NOTE_C4', '262'],
                            ['NOTE_D4', '294'],
                            ['NOTE_E4', '330'],
                            ['NOTE_F4', '349'],
                            ['NOTE_G4', '392'],
                            ['NOTE_A4', '440'],
                            ['NOTE_B4', '494'],
                            ['NOTE_C5', '532'],
                            ['NOTE_D5', '587'],
                            ['NOTE_E5', '659'],
                            ['NOTE_F5', '698'],
                            ['NOTE_G5', '784'],
                            ['NOTE_A5', '880'],
                            ['NOTE_B5', '988']
                            ]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.buzzer_tone_d = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_TONE_D,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
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
                        name: 'fre',
                        options: [
                            ['NOTE_C3', '131'],
                            ['NOTE_D3', '147'],
                            ['NOTE_E3', '165'],
                            ['NOTE_F3', '175'],
                            ['NOTE_G3', '196'],
                            ['NOTE_A3', '220'],
                            ['NOTE_B3', '247'],
                            ['NOTE_C4', '262'],
                            ['NOTE_D4', '294'],
                            ['NOTE_E4', '330'],
                            ['NOTE_F4', '349'],
                            ['NOTE_G4', '392'],
                            ['NOTE_A4', '440'],
                            ['NOTE_B4', '494'],
                            ['NOTE_C5', '532'],
                            ['NOTE_D5', '587'],
                            ['NOTE_E5', '659'],
                            ['NOTE_F5', '698'],
                            ['NOTE_G5', '784'],
                            ['NOTE_A5', '880'],
                            ['NOTE_B5', '988']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dur',
                        options: [
                            ['1/4', '250'],
                            ['2/4', '500'],
                            ['3/4', '750'],
                            ['4/4', '1000'],
                            ['1/8', '125'],
                            ['3/8', '375']
                            ]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.buzzer_music = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_MUSIC,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
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
                        name: 'mus',
                        options: [
                            ['Birthday', 'Music.birthday();'],
                            ['Tetris', 'Music.tetris();'],
                            ['Ode to Joy', 'Music.Ode_to_Joy();'],
                            ['Christmas', 'Music.christmas();'],
                            ['Super mario', 'Music.super_mario();'],
                            ['Star war tone', 'Music.star_war_tone();']
                            ]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.buzzer_notone = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_NOTONE,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };
// Button

    Blockly.Blocks.Button_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };
 
    Blockly.Blocks.Button_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

//PIR

    Blockly.Blocks.pir_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PIR_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['shape_statement']
            });
        }
    };

//light
Blockly.Blocks.lightSensor_readValue = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.LIGHTSENSOR_READ_VALUE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'pin',
                    options: analogPins
                }
            ],
            colour: color,
            // secondaryColour: secondaryColour,
            extensions: ['output_number']
            // extensions: ['shape_statement']
        });
    }
};

//Gas
Blockly.Blocks.GasSensor_readValue = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.GASSENSOR_READ_VALUE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'pin',
                    options: analogPins
                }
            ],
            colour: color,
            // secondaryColour: secondaryColour,
            extensions: ['output_number']
            // extensions: ['shape_statement']
        });
    }
};



    // Motor
    Blockly.Blocks.motor130_digital = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_DIGITAL,
                args0: [
                    {
                        type: 'field_image',
                        src: motor130IconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state1',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state2',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    }
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motor130_analog = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_ANALOG,
                args0: [
                    {
                        type: 'field_image',
                        src: motor130IconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state1',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED2'
                    },
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };



    // servo
    Blockly.Blocks.ks_servo_angle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_SERVO_ANGLE,
                args0: [
                    {
                        type: 'field_image',
                        src: ksservoIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'angle'
                    },
                    {
                        type: 'input_value',
                        name: 'time'
                    }
                ],
                colour: color7,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.ks_servo_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_SERVO_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: ksservoIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color7,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.lcd_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ADDR',
                        options: [
                            ['0x20', '0x20'],
                            ['0x21', '0x21'],
                            ['0x22', '0x22'],
                            ['0x23', '0x23'],
                            ['0x24', '0x24'],
                            ['0x25', '0x25'],
                            ['0x26', '0x26'],
                            ['0x27', '0x27']
                        ]
                    }
                ],
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORPOSITION,
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
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_CLEAR,
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setBackLight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETBACKLIGHT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_ON, 'on'],
                            [Blockly.Msg.LCD_SATE_OFF, 'off']
                        ]
                    }
                ],
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorStyle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORSTYLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_DISPLAY, 'display'],
                            [Blockly.Msg.LCD_SATE_HIDE, 'hide']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.LCD_STYLE_BLINK, 'blink'],
                            [Blockly.Msg.LCD_STYLE_NOBLINK, 'onBlink']
                        ]
                    }
                ],
                colour: color8,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;

