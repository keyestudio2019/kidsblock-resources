/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const ksservoIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAuNyA5MC43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC43IDkwLjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQ0KCS5zdDF7ZmlsbDojRTYwMDEyO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODUsOTAuN0g1LjdDMi41LDkwLjcsMCw4OC4yLDAsODVWNS43QzAsMi41LDIuNSwwLDUuNywwSDg1YzMuMSwwLDUuNywyLjUsNS43LDUuN1Y4NQ0KCUM5MC43LDg4LjIsODguMiw5MC43LDg1LDkwLjd6Ii8+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMuMSw3OS42bDEuNC0wLjFjMC4xLDAuNSwwLjIsMC44LDAuNSwxczAuNiwwLjMsMSwwLjNjMC41LDAsMC44LTAuMSwxLTAuM2MwLjItMC4yLDAuMy0wLjQsMC4zLTAuNw0KCQljMC0wLjIsMC0wLjMtMC4xLTAuNHMtMC4zLTAuMi0wLjUtMC4zYy0wLjItMC4xLTAuNS0wLjItMS4xLTAuM2MtMC44LTAuMi0xLjMtMC40LTEuNi0wLjdjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40DQoJCWMwLTAuNCwwLjEtMC43LDAuMy0xczAuNS0wLjUsMC45LTAuN3MwLjgtMC4yLDEuNC0wLjJjMC45LDAsMS41LDAuMiwyLDAuNmMwLjQsMC40LDAuNywwLjksMC43LDEuNUwxNy4xLDc3DQoJCWMtMC4xLTAuNC0wLjItMC42LTAuNC0wLjhDMTYuNSw3NiwxNi4yLDc2LDE1LjgsNzZzLTAuNywwLjEtMSwwLjNjLTAuMSwwLjEtMC4yLDAuMy0wLjIsMC40YzAsMC4yLDAuMSwwLjMsMC4yLDAuNA0KCQljMC4yLDAuMSwwLjYsMC4zLDEuMywwLjVjMC43LDAuMiwxLjIsMC4zLDEuNSwwLjVzMC42LDAuNCwwLjgsMC43YzAuMiwwLjMsMC4zLDAuNywwLjMsMS4xcy0wLjEsMC44LTAuMywxLjENCgkJYy0wLjIsMC4zLTAuNSwwLjYtMC45LDAuOEMxNy4xLDgxLjksMTYuNiw4MiwxNiw4MmMtMC45LDAtMS42LTAuMi0yLTAuNkMxMy41LDgxLDEzLjIsODAuNCwxMy4xLDc5LjYiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuOCw4MC4zbDEuMywwLjJjLTAuMiwwLjUtMC40LDAuOS0wLjgsMS4xQzIzLDgxLjksMjIuNSw4MiwyMiw4MmMtMC45LDAtMS41LTAuMy0xLjktMC45DQoJCWMtMC4zLTAuNS0wLjUtMS0wLjUtMS43YzAtMC44LDAuMi0xLjUsMC43LTJjMC40LTAuNSwxLTAuNywxLjctMC43czEuMywwLjIsMS44LDAuN2MwLjQsMC41LDAuNiwxLjMsMC42LDIuM2gtMy4zDQoJCWMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC4zLDAuOCwwLjNjMC4yLDAsMC40LTAuMSwwLjUtMC4yQzIyLjYsODAuNywyMi43LDgwLjUsMjIuOCw4MC4zIE0yMi45LDc4LjkNCgkJYzAtMC40LTAuMS0wLjctMC4zLTAuOWMtMC4yLTAuMi0wLjQtMC4zLTAuNy0wLjNjLTAuMywwLTAuNSwwLjEtMC43LDAuM2MtMC4yLDAuMi0wLjMsMC41LTAuMywwLjlIMjIuOXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjYuNiw4MS45aC0xLjN2LTVoMS4ydjAuN2MwLjItMC4zLDAuNC0wLjYsMC42LTAuN3MwLjQtMC4yLDAuNi0wLjJjMC4zLDAsMC42LDAuMSwwLjksMC4zbC0wLjQsMS4yDQoJCUMyOCw3OC4xLDI3LjgsNzgsMjcuNiw3OHMtMC4zLDAuMS0wLjUsMC4yYy0wLjEsMC4xLTAuMiwwLjMtMC4zLDAuNmMtMC4xLDAuMy0wLjEsMC44LTAuMSwxLjd2MS40SDI2LjZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjUsODEuOWwtMi01aDEuNGwwLjksMi42bDAuMywwLjljMC4xLTAuMiwwLjEtMC40LDAuMS0wLjRjMC0wLjEsMC4xLTAuMywwLjEtMC40bDEtMi42aDEuNGwtMiw1TDMwLjUsODEuOQ0KCQlMMzAuNSw4MS45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNC4yLDc5LjNjMC0wLjQsMC4xLTAuOSwwLjMtMS4zczAuNS0wLjcsMC45LTAuOWMwLjQtMC4yLDAuOC0wLjMsMS4zLTAuM2MwLjgsMCwxLjQsMC4yLDEuOSwwLjcNCgkJczAuNywxLjEsMC43LDEuOXMtMC4yLDEuNC0wLjcsMS45cy0xLjEsMC44LTEuOSwwLjhjLTAuNSwwLTAuOS0wLjEtMS4zLTAuM2MtMC40LTAuMi0wLjctMC41LTEtMC45QzM0LjMsODAuNCwzNC4yLDc5LjksMzQuMiw3OS4zDQoJCSBNMzUuNSw3OS40YzAsMC41LDAuMSwwLjksMC40LDEuMWMwLjIsMC4zLDAuNSwwLjQsMC45LDAuNGMwLjMsMCwwLjYtMC4xLDAuOS0wLjRjMC4yLTAuMywwLjQtMC43LDAuNC0xLjJzLTAuMS0wLjktMC40LTEuMQ0KCQljLTAuMi0wLjMtMC41LTAuNC0wLjktMC40Yy0wLjMsMC0wLjYsMC4xLTAuOSwwLjRDMzUuNyw3OC41LDM1LjUsNzguOSwzNS41LDc5LjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ0LjEsNzguNGwtMS4yLTAuMmMwLjEtMC41LDAuNC0wLjgsMC43LTEuMWMwLjMtMC4yLDAuOC0wLjQsMS41LTAuNGMwLjYsMCwxLDAuMSwxLjMsMC4yczAuNSwwLjMsMC42LDAuNQ0KCQlzMC4yLDAuNiwwLjIsMS4ydjEuNmMwLDAuNCwwLDAuOCwwLjEsMWMwLDAuMiwwLjEsMC40LDAuMiwwLjdoLTEuM2MwLTAuMS0wLjEtMC4yLTAuMS0wLjRjMC0wLjEsMC0wLjEsMC0wLjINCgkJYy0wLjIsMC4yLTAuNSwwLjQtMC43LDAuNWMtMC40LDAuMS0wLjcsMC4yLTEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMi0wLjRzLTAuNC0wLjYtMC40LTEuMWMwLTAuMywwLjEtMC41LDAuMi0wLjgNCgkJYzAuMS0wLjIsMC4zLTAuNCwwLjYtMC41YzAuMi0wLjEsMC42LTAuMiwxLjEtMC4zYzAuNi0wLjEsMS4xLTAuMiwxLjMtMC4zdi0wLjFjMC0wLjMtMC4xLTAuNC0wLjItMC41Yy0wLjEtMC4xLTAuNC0wLjItMC43LTAuMg0KCQljLTAuMiwwLTAuNCwwLTAuNiwwLjFDNDQuMyw3OCw0NC4yLDc4LjEsNDQuMSw3OC40IE00NS45LDc5LjVjLTAuMiwwLjEtMC40LDAuMS0wLjgsMC4yYy0wLjQsMC4xLTAuNiwwLjItMC43LDAuMg0KCQljLTAuMiwwLjEtMC4zLDAuMy0wLjMsMC41czAuMSwwLjMsMC4yLDAuNWMwLjEsMC4xLDAuMywwLjIsMC41LDAuMnMwLjUtMC4xLDAuNy0wLjJzMC4zLTAuMywwLjMtMC40czAuMS0wLjMsMC4xLTAuNlY3OS41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01My4xLDgxLjloLTEuMnYtMC43Yy0wLjIsMC4zLTAuNCwwLjUtMC43LDAuNlM1MC42LDgyLDUwLjQsODJjLTAuNiwwLTEuMS0wLjItMS41LTAuN3MtMC42LTEuMS0wLjYtMg0KCQlzMC4yLTEuNSwwLjYtMS45YzAuNC0wLjQsMC45LTAuNywxLjUtMC43czEsMC4yLDEuNSwwLjd2LTIuNWgxLjNMNTMuMSw4MS45TDUzLjEsODEuOXogTTQ5LjYsNzkuM2MwLDAuNSwwLjEsMC45LDAuMiwxLjINCgkJYzAuMiwwLjMsMC41LDAuNSwwLjksMC41YzAuMywwLDAuNi0wLjEsMC44LTAuNHMwLjMtMC42LDAuMy0xLjJzLTAuMS0xLTAuMy0xLjNzLTAuNS0wLjQtMC44LTAuNHMtMC42LDAuMS0wLjgsMC40DQoJCVM0OS42LDc4LjgsNDkuNiw3OS4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NS40LDc4LjRsLTEuMi0wLjJjMC4xLTAuNSwwLjQtMC44LDAuNy0xLjFjMC4zLTAuMiwwLjgtMC40LDEuNS0wLjRjMC42LDAsMSwwLjEsMS4zLDAuMnMwLjUsMC4zLDAuNiwwLjUNCgkJczAuMiwwLjYsMC4yLDEuMnYxLjZjMCwwLjQsMCwwLjgsMC4xLDFjMCwwLjIsMC4xLDAuNCwwLjIsMC43aC0xLjNjMC0wLjEtMC4xLTAuMi0wLjEtMC40YzAtMC4xLDAtMC4xLDAtMC4yDQoJCWMtMC4yLDAuMi0wLjUsMC40LTAuNywwLjVjLTAuMywwLjEtMC41LDAuMi0wLjgsMC4yYy0wLjUsMC0wLjktMC4xLTEuMi0wLjRzLTAuNC0wLjYtMC40LTEuMWMwLTAuMywwLjEtMC41LDAuMi0wLjgNCgkJYzAuMS0wLjIsMC4zLTAuNCwwLjYtMC41YzAuMi0wLjEsMC42LTAuMiwxLjEtMC4zYzAuNi0wLjEsMS4xLTAuMiwxLjMtMC4zdi0wLjFjMC0wLjMtMC4xLTAuNC0wLjItMC41Yy0wLjEtMC4xLTAuNC0wLjItMC43LTAuMg0KCQljLTAuMiwwLTAuNCwwLTAuNiwwLjFDNTUuNiw3OCw1NS41LDc4LjEsNTUuNCw3OC40IE01Ny4yLDc5LjVjLTAuMiwwLjEtMC40LDAuMS0wLjgsMC4yYy0wLjQsMC4xLTAuNiwwLjItMC43LDAuMg0KCQljLTAuMiwwLjEtMC4zLDAuMy0wLjMsMC41czAuMSwwLjMsMC4yLDAuNWMwLjEsMC4xLDAuMywwLjIsMC41LDAuMnMwLjUtMC4xLDAuNy0wLjJzMC4zLTAuMywwLjMtMC40czAuMS0wLjMsMC4xLTAuNlY3OS41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01OS44LDc2LjhINjF2MC43YzAuMi0wLjMsMC40LTAuNSwwLjctMC42YzAuMy0wLjIsMC42LTAuMiwwLjktMC4yYzAuNiwwLDEuMSwwLjIsMS41LDAuNw0KCQljMC40LDAuNSwwLjYsMS4xLDAuNiwxLjlzLTAuMiwxLjUtMC42LDJTNjMuMiw4Miw2Mi42LDgyYy0wLjMsMC0wLjUtMC4xLTAuOC0wLjJjLTAuMi0wLjEtMC41LTAuMy0wLjctMC42djIuNWgtMS4zDQoJCUM1OS44LDgzLjcsNTkuOCw3Ni44LDU5LjgsNzYuOHogTTYxLjEsNzkuM2MwLDAuNiwwLjEsMSwwLjMsMS4zczAuNSwwLjQsMC44LDAuNHMwLjYtMC4xLDAuOC0wLjRjMC4yLTAuMiwwLjMtMC43LDAuMy0xLjINCgkJcy0wLjEtMC45LTAuMy0xLjJjLTAuMi0wLjMtMC41LTAuNC0wLjgtMC40cy0wLjYsMC4xLTAuOCwwLjRDNjEuMiw3OC40LDYxLjEsNzguOCw2MS4xLDc5LjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTY4LjEsNzYuOHYxLjFoLTAuOXYyYzAsMC40LDAsMC43LDAsMC43YzAsMC4xLDAuMSwwLjEsMC4xLDAuMmMwLjEsMCwwLjEsMC4xLDAuMiwwLjFzMC4zLDAsMC41LTAuMWwwLjEsMQ0KCQlDNjcuOCw4MS45LDY3LjQsODIsNjcsODJjLTAuMiwwLTAuNSwwLTAuNi0wLjFjLTAuMi0wLjEtMC4zLTAuMi0wLjQtMC4zYy0wLjEtMC4xLTAuMi0wLjMtMC4yLTAuNXMwLTAuNSwwLTAuOVY3OGgtMC42di0xLjFoMC42DQoJCXYtMWwxLjMtMC44djEuOEw2OC4xLDc2LjhMNjguMSw3Ni44eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MS45LDgwLjNsMS4zLDAuMmMtMC4yLDAuNS0wLjQsMC45LTAuOCwxLjFDNzIsODEuOSw3MS42LDgyLDcxLDgyYy0wLjksMC0xLjUtMC4zLTEuOS0wLjkNCgkJYy0wLjMtMC41LTAuNS0xLTAuNS0xLjdjMC0wLjgsMC4yLTEuNSwwLjctMmMwLjQtMC41LDEtMC43LDEuNy0wLjdzMS4zLDAuMiwxLjgsMC43YzAuNCwwLjUsMC42LDEuMywwLjYsMi4zSDcwDQoJCWMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC4zLDAuOCwwLjNjMC4yLDAsMC40LTAuMSwwLjUtMC4yQzcxLjgsODAuNyw3MS45LDgwLjUsNzEuOSw4MC4zIE03Miw3OC45DQoJCWMwLTAuNC0wLjEtMC43LTAuMy0wLjljLTAuMi0wLjItMC40LTAuMy0wLjctMC4zYy0wLjMsMC0wLjUsMC4xLTAuNywwLjNjLTAuMiwwLjItMC4zLDAuNS0wLjMsMC45SDcyeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03NS43LDgxLjloLTEuM3YtNWgxLjJ2MC43YzAuMi0wLjMsMC40LTAuNiwwLjYtMC43czAuNC0wLjIsMC42LTAuMmMwLjMsMCwwLjYsMC4xLDAuOSwwLjNsLTAuNCwxLjINCgkJYy0wLjItMC4xLTAuNC0wLjItMC42LTAuMnMtMC4zLDAuMS0wLjUsMC4yYy0wLjEsMC4xLTAuMiwwLjMtMC4zLDAuNmMtMC4xLDAuMy0wLjEsMC44LTAuMSwxLjdMNzUuNyw4MS45TDc1LjcsODEuOXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMC43LDYyLjZjMC0wLjEsMC0wLjEsMC0wLjJjMC4xLTAuNCwwLjMtMC43LDAuNi0wLjhsNi44LTMuN2MwLjQtMC4yLDEtMC4yLDEuNCwwLjFsNC4zLDMuNw0KCQljMC4zLDAuMywwLjQsMC42LDAuNCwxcy0wLjIsMC43LTAuNiwwLjlsLTcuMiw0LjNjLTAuNSwwLjMtMS4xLDAuMi0xLjUtMC4yYy0wLjQtMC40LTMuNi0zLjktMy45LTQuMw0KCQlDMjAuOCw2My4yLDIwLjcsNjIuOSwyMC43LDYyLjYgTTI4LjUsNjAuM2wtNC43LDIuNmMwLjYsMC43LDEuNSwxLjYsMi4yLDIuNGw0LjktM0wyOC41LDYwLjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTMxLjgsNjIuNkwzMS44LDYyLjZjMC0wLjcsMC42LTEuMiwxLjItMS4ybDE3LjUsMC4zYzAuMiwwLDguNCwwLjcsMTEuNi0zLjVjMi44LTMuNy0wLjctNi42LTEuMS02LjkNCgkJYy0wLjUtMC40LTAuNi0xLjItMC4yLTEuN2MwLjQtMC41LDEuMS0wLjYsMS43LTAuMmMyLDEuNSw1LDUuNywxLjYsMTAuMmMtNCw1LjMtMTMuMiw0LjUtMTMuNiw0LjVMMzMsNjMuOA0KCQlDMzIuMyw2My44LDMxLjgsNjMuMywzMS44LDYyLjYiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjkuNSw2MC42TDI5LjUsNjAuNmMwLTAuNywwLjYtMS4yLDEuMi0xLjJsMTguNCwwLjNjMi4xLDAsNy45LTAuNCwxMC4zLTIuNmMwLjktMC44LDEuMy0xLjYsMS4yLTIuMg0KCQljLTAuMi0xLjEtMS42LTItMi0yLjNjLTAuNi0wLjMtMC44LTEtMC41LTEuNnMxLTAuOCwxLjYtMC41YzAuMywwLjIsMywxLjYsMy40LDQuMWMwLjIsMS41LTAuNCwzLTIsNC4zYy0zLjYsMy4zLTExLjYsMy4yLTEyLDMuMg0KCQlsLTE4LjQtMC4zQzMwLDYxLjgsMjkuNSw2MS4zLDI5LjUsNjAuNiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNy41LDU4LjlDMjcuNSw1OC45LDI3LjUsNTguOCwyNy41LDU4LjljMC0wLjcsMC42LTEuMiwxLjItMS4yTDQ0LjgsNThjMy45LDAuMiwxMC42LTAuMiwxMi4zLTEuOA0KCQljMC4yLTAuMiwwLjctMC43LDAuNi0xLjFjLTAuMS0wLjUtMS4yLTEuMi0xLjktMS40Yy0wLjYtMC4yLTAuOS0wLjktMC43LTEuNXMwLjktMC45LDEuNS0wLjdjMC4zLDAuMSwzLDEuMSwzLjQsMy4yDQoJCWMwLjIsMC44LDAsMi0xLjQsMy4zYy0zLDIuOC0xMi45LDIuNC0xNCwyLjRsLTE2LjEtMC4zQzI4LDYwLjEsMjcuNSw1OS41LDI3LjUsNTguOSIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMS4yLDQ1TDMxLjIsNDVsMC42LTI0LjRjMC0wLjcsMC42LTEuMiwxLjItMS4yYzAuNywwLDEuMiwwLjYsMS4yLDEuMmwtMC42LDIzLjZsMTcuNSw5LjNMNjEuOSw0OWwtMC42LTYuOQ0KCQljLTAuMS0wLjcsMC40LTEuMiwxLjEtMS4zYzAuNy0wLjEsMS4yLDAuNCwxLjMsMS4xbDAuNiw3LjdjMCwwLjUtMC4zLDEtMC43LDEuMkw1MS41LDU2Yy0wLjMsMC4xLTAuNywwLjEtMSwwbC0xOC42LTkuOQ0KCQlDMzEuNCw0NS45LDMxLjIsNDUuNSwzMS4yLDQ1Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzLjUsMjQuOEMyMy41LDI0LjgsMjMuNSwyNC43LDIzLjUsMjQuOGMwLTAuNSwwLjMtMC45LDAuNy0xLjFMNDQsMTMuNmMwLjMtMC4yLDAuOC0wLjIsMS4xLDBsNi44LDMuNg0KCQlsNS44LTIuOWMwLjQtMC4yLDEtMC4yLDEuMywwLjJsNC41LDMuOWMwLjMsMC4yLDAuNCwwLjYsMC40LDFzLTAuMiwwLjctMC42LDAuOUw2MCwyMi40bDMuMywyLjNjMC40LDAuMywwLjYsMC43LDAuNSwxLjFMNjMuMiwzMQ0KCQljMS41LDAuOSw0LjUsMi45LDYuMyw0LjJjMC4zLDAuMiwwLjUsMC42LDAuNSwxYzAsMC4yLDAsMC4zLTAuMSwwLjVsMC4xLDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjFsLTExLDcuMg0KCQljLTAuNCwwLjMtMC45LDAuMy0xLjMsMEwyNC4xLDI1LjhDMjMuNywyNS42LDIzLjUsMjUuMiwyMy41LDI0LjggTTQ0LjUsMTYuMWwtMTcuNCw4LjhsMjMsMTQuMmMtMC4zLTAuNC0wLjQtMS0wLjEtMS40DQoJCWMwLjQtMC41LDEuMS0wLjcsMS43LTAuM2w2LDQuMWw4LjgtNS4zYy0yLjQtMS42LTQuOC0zLjItNS4yLTMuM2MtMC41LTAuMi0wLjgtMC43LTAuNy0xLjNsMC43LTUuM2wtNC4yLTIuOQ0KCQljLTAuMy0wLjItMC41LTAuNi0wLjUtMXMwLjItMC44LDAuNi0xbDMuNi0yLjJsLTIuNy0yLjNsLTUuNywyLjhjLTAuMywwLjItMC44LDAuMi0xLjEsMEw0NC41LDE2LjF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ5LjksMzguM2MwLTAuNCwwLjItMC44LDAuNi0xbDEwLjctNi43YzAuNi0wLjQsMS4zLTAuMiwxLjcsMC40czAuMiwxLjMtMC40LDEuN2wtMTAuNyw2LjcNCgkJYy0wLjYsMC40LTEuMywwLjItMS43LTAuNEM1MCwzOC44LDQ5LjksMzguNiw0OS45LDM4LjMiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzEuOCwyMC42YzAtMC4yLDAuMS0wLjQsMC4yLTAuNmMwLjQtMC42LDEuMS0wLjcsMS43LTAuNGwxMi42LDcuOGw0LjYtMy43YzAuNC0wLjMsMC45LTAuNCwxLjQtMC4xbDUuOCwzLjQNCgkJbDQuMi0wLjhjMC43LTAuMSwxLjMsMC4zLDEuNCwwLjljMC4xLDAuNy0wLjMsMS4zLTAuOSwxLjRsLTQuNywwLjljLTAuMywwLjEtMC42LDAtMC44LTAuMWwtNS41LTMuMkw0NywyOS44DQoJCWMtMC40LDAuMy0xLDAuNC0xLjQsMC4xbC0xMy4zLTguM0MzMiwyMS40LDMxLjgsMjEsMzEuOCwyMC42Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTM5LjYsMjUuNWMwLTAuNCwwLjItMC44LDAuNi0xbDUtMi44bC00LjctNC40QzQwLDE2LjgsNDAsMTYsNDAuNCwxNS41YzAuNS0wLjUsMS4yLTAuNSwxLjctMC4xTDQ4LDIxDQoJCWMwLjMsMC4zLDAuNCwwLjYsMC40LDFzLTAuMywwLjctMC42LDAuOWwtNi40LDMuNmMtMC42LDAuMy0xLjMsMC4xLTEuNi0wLjRDMzkuNywyNS45LDM5LjYsMjUuNywzOS42LDI1LjUiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAuNywxOC42YzAtMC42LDAuNS0xLjIsMS4xLTEuMmMwLjcsMCwxLjIsMC41LDEuMywxLjFsMC4yLDIuOWMwLDAuNy0wLjUsMS4yLTEuMSwxLjMNCgkJYy0wLjcsMC0xLjItMC41LTEuMy0xLjFMNTAuNywxOC42TDUwLjcsMTguNiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00OS44LDU0LjlMNDkuOCw1NC45TDQ5LjksMzJjMC0wLjQsMC4yLTAuNywwLjUtMWw1LjktNC4yYzAuNS0wLjQsMS4zLTAuMywxLjcsMC4zYzAuNCwwLjUsMC4zLDEuMy0wLjMsMS43DQoJCWwtNS40LDMuOGwtMC4xLDIyLjNjMCwwLjctMC41LDEuMi0xLjIsMS4yQzUwLjQsNTYuMSw0OS44LDU1LjYsNDkuOCw1NC45Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ1LjEsMjguOWMwLTAuMiwwLjEtMC40LDAuMi0wLjZjMC40LTAuNiwxLjEtMC43LDEuNy0wLjRsNC45LDMuMWMwLjYsMC40LDAuNywxLjEsMC40LDEuNw0KCQljLTAuNCwwLjYtMS4xLDAuNy0xLjcsMC40TDQ1LjcsMzBDNDUuMywyOS43LDQ1LjEsMjkuMyw0NS4xLDI4LjkiLz4NCjwvZz4NCjwvc3ZnPg0K';
    
    return `
<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="${ksservoIconUrl}">
    <block type="ks_servo270_angle" id="ks_servo270_angle">
        <field name="pin">3</field>>
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;