/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const dsIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzkuNCA3OS41IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3OS40IDc5LjU7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLml7bpkp8uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI3Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjUiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMy44NTU3MzMxIgogICBpbmtzY2FwZTpjeD0iMzkuNzAwMDAxIgogICBpbmtzY2FwZTpjeT0iMzkuNzUiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjAiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM5LjcsNzkuNWM1LjUsMCwxMi4xLTEuNSwxNS44LTMuNGMwLjYtMC4zLDEtMC40LDEuNS0wLjdjNy43LTMuNSwxNC41LTEwLjUsMTguMi0xOCAgIGM1LjYtMTEuMSw1LjYtMjQuNCwwLTM1LjVjLTEuMS0yLjMtMi4xLTMuOC0zLjYtNS44bC00LjUtNS4yQzYyLjQsNy4yLDYxLjYsNiw1NS41LDMuM2MtOS40LTQuMi0yMi40LTQuNi0zMS45LDAuMSAgIGMtMi4xLDEuMS00LjQsMi4yLTYuMywzLjVjLTIuMSwxLjUtMy40LDIuNi01LjMsNC41Yy04LjcsOC43LTEyLDE3LTEyLDMwLjFjMCw1LjcsMiwxMS40LDMuOCwxNS40YzAuOSwyLDIuNCw0LjMsMy43LDYuMSAgIGMwLjcsMC45LDEuMywxLjgsMi4xLDIuN2MwLjgsMC45LDEuNiwxLjYsMi41LDIuNUMxOS4yLDc1LjIsMjksNzkuNSwzOS43LDc5LjUgTTQwLjksNzQuMUMzMC4yLDc0LjEsMjIuMyw3MSwxNSw2My44ICAgYy00LjMtNC4zLTcuNy0xMC40LTktMTYuNGMtMC4yLTEtMC41LTIuNi0wLjYtMy41Yy0wLjQtNC0wLjItMy44LDAtNy44YzAuMS0xLjIsMC40LTIuOCwwLjYtMy44YzMuMS0xNC45LDE3LjMtMjcsMzIuNC0yNyAgIGM4LjksMCwxNC41LDEuNiwyMS41LDYuNWM0LjgsMy4zLDguNyw4LjUsMTEuMywxMy45YzcuMiwxNC44LDAuOSwzMy42LTExLjMsNDIuMWMtMiwxLjQtMy4yLDItNS40LDMuMSAgIEM1MSw3Mi42LDQ2LjIsNzQuMSw0MC45LDc0LjF6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzIuOCw0Mi40YzAuOSwzLjcsNy42LDcuNCwxMi40LDIuNmM0LjEtNC4xLDEuNy0xMS4zLTIuOS0xMi40YzAtMS41LDAuMi0yMC4yLTAuMS0yMS4yYy0wLjYtMS42LTItMS40LTMtMS40ICAgYy0yLjksMC0xLjksNy40LTEuOSwxMC40djEyLjNjLTEuOCwwLjktMy44LDEuOS00LjQsNC40SDE0Yy01LjgsMC00LjksNS4xLTAuOSw1LjRMMzIuOCw0Mi40eiBNNDAsNDIuMWMtMy40LDAtMy4zLTQuNy0wLjMtNC43ICAgQzQyLjksMzcuMyw0Mi40LDQyLjEsNDAsNDIuMXoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yMC41LDIzLjJjMC45LDAsMS4zLTAuMiwxLjgtMC43YzIuMy0yLjEtMC4xLTQuNy0xLjUtNC43QzE3LDE3LjgsMTcuNSwyMy4yLDIwLjUsMjMuMiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTY3LDQyLjRjMy4yLDAsMy4yLTUuMywwLTUuM0M2My40LDM3LDYzLjUsNDIuNCw2Nyw0Mi40IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTU5LjIsMTcuOGMtMS40LDAtMi44LDEuMy0yLjgsMi41YzAsMi4zLDIuNywzLjYsNC4zLDIuMUM2Mi41LDIwLjksNjEuMywxNy44LDU5LjIsMTcuOCIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yMC41LDYxLjVjMy41LDAsMy4yLTUuMiwwLTUuMlMxNyw2MS41LDIwLjUsNjEuNSIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik01OC45LDYxLjVjMy41LDAsMy4yLTUuMiwwLTUuMkM1NS42LDU2LjMsNTUuMyw2MS41LDU4LjksNjEuNSIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zOS4xLDY5LjRjNSwwLDMuMS01LDEuMy01QzM1LjQsNjQuNCwzNy4yLDY5LjQsMzkuMSw2OS40IgogICBpZD0icGF0aDE4IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    return `
<category name="%{BKY_DS3231_CATEGORY}" id="DS3231_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${dsIconUrl}">
    <block type="ds3231_init" id="ds3231_init">

    </block>

    <block type="ds3231_set_sys" id="ds3231_set_sys">

    </block>

    <block type="ds3231_set_time" id="ds3231_set_time">
	    <value name="year">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">2021</field>
	        </shadow>
	    </value>
	    <value name="month">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">2</field>
	        </shadow>
	    </value>
	    <value name="date">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">26</field>
	        </shadow>
	    </value>
	    <value name="hour">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">5</field>
	        </shadow>
	    </value>
	    <value name="minute">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">30</field>
	        </shadow>
	    </value>
	    <value name="second">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">50</field>
	        </shadow>
	    </value>
    </block>

    <block type="ds3231_read" id="ds3231_read">

    </block>

</category>`;
}

exports = addToolbox;
