let itemId = 0
let isAdd = false
let selectDate = true
let nextId = 4
let toDoListItem = []

main()
async function main() {

    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.getElementById('calendar'); //<div id='calendar'></div>
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            dateClick: (info) => {
                console.log(info.dateStr)
                console.log('click')
                selectDate = info.dateStr
                displayItemByDate(info.dateStr)
            
            }
        });
        calendar.render();
    });



    await fetchGetToDoListItem()
    async function fetchGetToDoListItem() {
        const res = await fetch('http://localhost:8080/todolist', { method: 'GET' })
        const data = await res.json()

        console.log(data)
        toDoListItem = data.map(item => ({
            id: item.id,
            title: item.name,
            assignedTo: item.assignedto,
            status: item.Status.replace('\r', ""),
            details: item.description,
            date: item.duedate
        }))
    }

    function displayItemByDate(date) {
        const itemList = document.querySelector('.completed')
        const noCompleted = document.querySelector('.nocompleted')

        console.log(toDoListItem)
        const filterItems = toDoListItem.filter(item => item.date === date)
        itemList.innerHTML = ''
        noCompleted.innerHTML = ''
        for (const filterItem of filterItems) {
            let html = `
            <div class="item" data-id="${filterItem.id}">
                <div class="itemHeader">
                    <p>title: <spam class='title'>${filterItem.title}</spam></p>
                    <p>assigned to: <spam class='assignedTo'>${filterItem.assignedTo}</spam></p>
                    <p>status: <spam class='status'>${filterItem.status}</spam></p>
                </div>
                <p>details: <spam class='details'>${filterItem.details}</spam></p>
            </div>
            `
            if (filterItem.status === 'No completed') {
                itemList.innerHTML += html
            } else {
                noCompleted.innerHTML += html
            }
        }

        const items = document.querySelectorAll('.item')
        for (const item of items) {
            item.addEventListener('click', () => {
                isAdd = false
                const itemForm = document.querySelector('#itemForm')

                const title = item.querySelector('.title').innerText
                const assignedTo = item.querySelector('.assignedTo').innerText
                const status = item.querySelector('.status').innerText
                const details = item.querySelector('.details').innerText

                itemForm.classList.remove('noshow')
                itemForm.title.value = title
                itemForm.assignedTo.value = assignedTo
                // if (status === 'completed') {
                //     itemForm.status.checked = true
                // } else {
                //     itemForm.status.checked = false
                // }
                itemForm.status.checked = status === 'completed' ? true : false
                itemForm.details.value = details

                itemId = item.getAttribute('data-id')
                itemForm.querySelector('#delete').addEventListener('click',async () => {
                    await fetchDeleteToDoItem(itemId)
                    await fetchGetToDoListItem()
                    toDoListItem.filter(item => item.id !== itemId)
                    item.remove()
                    itemForm.classList.add('noshow')
                })
            })
        }
    }

    const submit = document.querySelector('#submit')
    const x = document.querySelector('#x')

    async function fetchCreateToDoItem(dataObj) {
        const res = await fetch('http://localhost:8080/todolist',
            {
                method: 'POST',
                // POST，要加headers。如以json格式送出，Content-Type設定要配合返
                headers: {
                    'Content-Type': 'application/json'
                },
                // 送出的資料放在body內。但要以JSON.stringify()來將object轉為json格式
                body: JSON.stringify(dataObj)
            });
    }

    submit.addEventListener('click', () => {
        if (isAdd) {
            const itemForm = document.querySelector('#itemForm')
            itemForm.classList.add('noshow')

            const title = itemForm.taskName.value
            const assignedTo = itemForm.assignedTo.value
            const status = itemForm.status.checked === true ? 'completed' : 'No completed'
            const details = itemForm.details.value
            const date = selectDate
            toDoListItem.push({
                id: nextId + "",
                title: title,
                assignedTo: assignedTo,
                status: status,
                details: details,
                date: date
            })
            nextId++

            const dataObj = {
                // id: form.id.value,
                name: title,
                description: details,
                assignedto: assignedTo,
                duedate: date,
                status: status
            }

            fetchCreateToDoItem(dataObj)
            displayItemByDate(date)
            return
        }

        // Update
        const itemForm = document.querySelector('#itemForm')
        itemForm.classList.add('noshow')
        console.log(itemForm.taskName.value)
        const title = itemForm.taskName.value
        const assignedTo = itemForm.assignedTo.value
        const status = itemForm.status.checked === true ? 'completed' : 'No completed'
        const details = itemForm.details.value
        let date = ''

        const array = []
        for (const item of toDoListItem) {
            if (item.id === itemId) {
                date = item.date
                array.push({
                    id: itemId,
                    title: title,
                    assignedTo: assignedTo,
                    status: status,
                    details: details,
                    date: item.date
                })
                continue
            }

            array.push(item)
        }
        toDoListItem = array

        displayItemByDate(date)
    })

    x.addEventListener('click', () => {
        const itemForm = document.querySelector('#itemForm')
        itemForm.classList.add('noshow')
    })

    document.querySelector('.addButton').addEventListener('click', () => {
        const itemForm = document.querySelector('#itemForm')
        itemForm.classList.remove('noshow')
        itemForm.title.value = ''
        itemForm.assignedTo.value = ''
        itemForm.status.value = ''
        itemForm.details.value = ''

        isAdd = true
    })




    /* testing area */

    const deletetBin = document.querySelector('#delete')
    deletetBin.addEventListener('click', () => {

    })

    async function fetchDeleteToDoItem(itemId) {
        console.log(itemId)
        const res = await fetch(`http://localhost:8080/todolist/${itemId}`,
            {
                method: 'DELETE',
            });
    }


    // left-menubar setting
    function openSlideMeun(){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0px';
        document.getElementById('main').style.marginLeft = '0px';
    }

    // deletetBin.addEventListener('click', () => {
    //     const itemForm = document.querySelector('#itemForm')
    //     itemForm.classList.add('noshow')
    // })

    // itemId = item.getAttribute('data-id')
}
