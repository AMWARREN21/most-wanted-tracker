const container = document.querySelector('#badguys')

function createList() {
    $.get(`https://api.fbi.gov/wanted/v1/list`, (data) => {
        var list = data.items
        for (let i = 0; i < list.length; i++) {
            const span = document.createElement('span')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const p2 = document.createElement('p')
            const a = document.createElement('a')
            const img = document.createElement('img')

            span.className = 'criminal'
            h3.innerText = (`NAME: ${list[i].title}`).toLowerCase()

            if (list[i].reward_text !== null) {
                p.innerText = `Reward: ${list[i].reward_text}`
            }

            p2.innerText = `Subject: ${list[i].subjects[0]}`
            a.href = `${list[i].url}`
            a.innerText = 'FBI Record'

            if (list[i].status == 'captured') {
            img.src = "https://c.tenor.com/BzsHzUDkldMAAAAd/caught-flash.gif"
            img.className = "caught"

            } else {

                img.src = "https://as1.ftcdn.net/v2/jpg/02/06/01/90/1000_F_206019050_t9G36mVmDHezJfeH1YSWy2BwbbG7Oou8.jpg"
                img.className = "at-large"
            }

            span.appendChild(img)
            h3.appendChild(p)
            h3.appendChild(p2)
            span.appendChild(h3)
            h3.appendChild(a)
            container.appendChild(span)
            console.log(list[i])
        }
        console.log(container)
    })
}
createList()

const button = document.querySelector('button')
button.addEventListener('click', function() {
    alert('Thank you for sending us your ip address')
})
