function showYear() {
	const d = new Date()
	const year = d.getFullYear()
	document.getElementById(`year`).innerHTML = year
}
setTimeout(() => {
	showYear()
}, 100)
function showHelp() {
	document.getElementById(`help`).innerHTML = `<div class="block-area" onClick="hideHelp()"></div>
    <div class="help_window">
        <div>Бұл сервис ОҢАЙ SMS билеттерін тексеру үшін құрылған.<br /><br />
		Данный сервис создан для проверки SMS билетов ОҢАЙ.
        </div>
        <div style="text-align:center; padding-top: 20px;">
            <button class="button-ok" onClick="hideHelp()">OK</button>
        </div>
    </div>`
}
function hideHelp() {
	document.getElementById(`help`).innerHTML = ``
}
