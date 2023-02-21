/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const TFTIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA3Ni40MjI4IDk5OS45OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0i6Kem5pG45bGPLee6ouiJsi5zdmciCiAgIHdpZHRoPSIxMDc2LjQyMjkiCiAgIGhlaWdodD0iMTAwMCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExNSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczEzIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzExIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNTg4MTI1MDYiCiAgIGlua3NjYXBlOmN4PSI5NjQuOTA2MzciCiAgIGlua3NjYXBlOmN5PSI1NTIuMzE3NzgiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgIHNob3dndWlkZXM9ImZhbHNlIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgoKCgo8ZwogICBpZD0i5Zu+5bGCX3gwMDIwXzEiCiAgIHN0eWxlPSJjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNmZjAwMDA7ZmlsbC1ydWxlOmV2ZW5vZGQ7aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTtzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO3RleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbiIKICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMDgwNzM2LDAsMCwwLjEwODA3MzYsLTUxMy4xMDY1NCwtNTk4LjgxNDY5KSI+PG1ldGFkYXRhCiAgICAgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIgLz48ZwogICAgIGlkPSJfMjQ2MTk0MDc3MTc5MiIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIj48cGF0aAogICAgICAgY2xhc3M9ImZpbDAiCiAgICAgICBkPSJtIDgzOTgsODY1NyBjIDAsMjgzIDUyLDM3NiAxMzYsNjQwIGwgNDYzLDE1NDcgYyAtMTk2LDEzMiAtNDIzLDQxNSAtNDIzLDY3MSAwLDE1NyAyMjUsOTk0IDQ1MywxMjc2IDM0OCw0MjkgODM1LDQ5OSAxMDU2LDEzMDYgMTEzLDQxMCAxMDksNDIxIDQzMSwzNDYgNzYsLTMxOSAtODMsLTcyMSAtMjIyLC05NzcgLTIyMCwtNDA2IC05MzQsLTc5OCAtMTA1OSwtMTEyOSAtNDgsLTEyOCAtMjM2LC03NDMgLTIzNiwtODU4IDAsLTk5IDgxLC0xMzYgMTQxLC0xNzYgMjcsMTE0IDEwNSw0MjUgMTU3LDUxNCAxMTYsMjAxIDM3MywxMDIgMzczLC01NSAwLC0zNzQgLTg0NywtMjcwMCAtODQ3LC0zMDY5IDAsLTg4IDEyMywtNzEgMjEyLC03MSBsIDUzMywxNzk1IGMgMTAyLDMwMSA3MCw0OTggMzQ5LDQ5OCAzOTQsMCAtNTEsLTgxOCAtNzEsLTEwNTggMzQ5LC03NCAzNDIsMzI3IDQ5Niw4MDkgMTMyLDQxMiA0MjEsMTMyIDQyMSw3MyAwLC0yMTcgLTY1LC0zMzggLTExOCwtNTE3IC0zMCwtMTAxIC00MSwtMTQ5IC03NSwtMjQ5IC0yNiwtNzYgLTc4LC0xODcgMTcsLTE4NyA0NTYsMCAyNTksMTA1OCA2NzAsMTA1OCAxODgsMCAyMTQsLTE5MyAxNzIsLTM0NCAtNDIsLTE1MiAtMTIxLC0zMTggLTEzNywtNTAyIDMzOSwyOCAzNjksMzk0IDQ3NCw3NjEgMTYwLDU2MSAyNjcsNjQwIDI2NywxMTc5IDAsNzI5IC0zMTEsNTk0IC0yMiwxNTc1IDUxLDE3NSA2Myw0MDEgMjY5LDQwMSAzNzksMCAxMDEsLTU2MyAzNiwtODUwIC03NiwtMzMyIDE0MSwtNTk2IDE0MSwtMTMwMiAwLC0yNTIgLTMxOSwtMTIyMyAtNDE5LC0xNTU3IC0yMjUsLTc1NSAtODIyLC01NzQgLTk5OCwtNjYxIC02NiwtMzMgLTk0LC04NiAtMjIxLC0xMzIgLTI1MCwtOTAgLTI5OSwtNiAtNTM1LDM4IC0xODIsMzQgLTM3NiwtNzkgLTU3OSwxOSAtMTQsLTE2NSAtMTYxLC02MDQgLTIxNiwtNzcyIC0xMTYsLTM1MSAtMjEwLC00OTggLTYzMSwtNDk4IC0yMTYsMCAtNDU4LDI0MiAtNDU4LDQ1OCB6IgogICAgICAgaWQ9InBhdGgxNDY1IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48cGF0aAogICAgICAgY2xhc3M9ImZpbDAiCiAgICAgICBkPSJtIDYzNTIsNjU0MSB2IDUwNDQgYyAwLDE2NiAxMzYsMzUxIDI1MSw0MTkgMjM3LDE0MSAxNjA0LDc1IDE5MzYsNzUgLTI4LC0xMTcgLTk0LC0zMjUgLTE0MSwtNDIzIEggNzEyNyBjIC0xNjMsMyAtMzUyLDQ4IC0zNTIsLTEwNiBWIDY1NDEgYyAwLC04MiAyNCwtMTA2IDEwNiwtMTA2IGggNDAyMSBjIDE3MSwwIDEwNiwzMTAgMTA2LDYzNSB2IDIyNTggYyAyMzIsNjEgLTkwLDcwIDQyMyw3MCBWIDY1NDEgYyAwLC0yNzMgLTIwNCwtNTMwIC00NTgsLTUzMCBIIDY4MTAgYyAtMjU0LDAgLTQ1OCwyNTcgLTQ1OCw1MzAgeiIKICAgICAgIGlkPSJwYXRoMTQ2NyIKICAgICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0ibSA3ODMzLDg2NTcgYyAwLDEyNSAxLDMyNCA5MCw0MDkgMTE1LDExMCAxODQsLTMgMjYzLC01NiAtMTQsLTE3MSAtMzUsLTkzIC0zNSwtMzg4IDAsLTc2MiAxMTU3LC05OTYgMTQ2OSwtMjcwIDc2LDE3NiAyMiwxOTkgMjI0LDE5OSAzMjIsMCAtNjEsLTk1MiAtOTUzLC05NTIgLTU2MSwwIC0xMDU4LDQ5NyAtMTA1OCwxMDU4IHoiCiAgICAgICBpZD0icGF0aDE0NjkiCiAgICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjwvZz48L2c+PC9zdmc+Cg==';
    
    return `
<category name="%{BKY_TFT_CATEGORY}" id="TFT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${TFTIconUrl}">
    <block type="tft_init" id="tft_init">
    	<value name="cs">
	        <shadow type="math_number">
	            <field name="NUM">10</field>
	        </shadow>
	    </value>
        <value name="dc">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
        <value name="rst">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
    </block>

    <block type="tft_background" id="tft_background">
        <value name="bR">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="bG">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="bB">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

    <block type="tft_stroke" id="tft_stroke">
        <value name="s_r">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="s_g">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="s_b">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

    <block type="tft_nostroke" id="tft_nostroke">
        
    </block>

    <block type="tft_fill" id="tft_fill">
        <value name="f_r">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="f_g">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="f_b">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

    <block type="tft_nofill" id="tft_nofill">
        
    </block>

    <block type="tft_text" id="tft_text">
        <value name="string">
            <shadow type="text">
                <field name="TEXT" disabled="true">abcd</field>
            </shadow>
        </value>
        <value name="x">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="y">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>

    <block type="tft_textSize" id="tft_textSize">
        <value name="size">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>

    <block type="tft_point" id="tft_point">
        <value name="xp">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="yp">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>

    <block type="tft_line" id="tft_line">
        <value name="xs">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="ys">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="xe">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="ye">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>

    <block type="tft_rect" id="tft_rect">
        <value name="xs">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="ys">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="xe">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="ye">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>

    <block type="tft_width" id="tft_width">
        
    </block>

    <block type="tft_height" id="tft_height">
        
    </block>

    <block type="tft_circle" id="tft_circle">
        <value name="x">
            <shadow type="math_number">
                <field name="NUM">60</field>
            </shadow>
        </value>
        <value name="y">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="radius">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>


</category>`;
}

exports = addToolbox;
