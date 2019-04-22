window.onload = function () {
    let contentList = document.querySelectorAll('#app .content>div')
    let guideItems = document.querySelectorAll('#app .guide_item')
    let profileLink = document.querySelector('#app .profile_link')
    let login = document.querySelector('#app > div')
    let goBack = document.querySelector('.go_back')
    let loginChange = document.querySelectorAll('.login_header_title > a')
    let loginOrRegister = document.querySelectorAll('.login_content > form > div')
    let switchButton = document.querySelector('.switch_button')
    let switchCircle = document.querySelector('.switch_circle')
    let switchText = document.querySelector('.switch_text')
    let headerLogin = document.querySelector('.header_login')
    let loginSubmit = document.querySelector('.login_submit')
    let orderLogin = document.querySelector('.order_no_login > button')

    //跳转手机登录注注册页
    profileLink.addEventListener('touchend', function () {
        login.className = 'on'
    })
    goBack.addEventListener('touchend', function () {
        login.className = 'off'
    })

    // 从主页跳转到登录注册页
    headerLogin.addEventListener('touchend', function () {
        login.className = 'on'
    })

    // 从订单详情页跳转到登录注册页
    orderLogin.addEventListener('touchend', function () {
        login.className = 'on'
    })

    // 登陆后跳转到主页
    loginSubmit.addEventListener('touchend', function () {
        guideItems[0].className = 'guide_item on'
        contentList[0].className = 'on'
        login.className = 'off'
    })

    // 切换手机号登录/密码登录
    for(let i = 0; i < loginChange.length; i++) {
        loginChange[i].addEventListener('touchend', function () {
            for(let i = 0; i < loginOrRegister.length; i++) {
                loginChange[i].className = ''
                loginOrRegister[i].className = ''
            }
            this.className = 'on'
            loginOrRegister[i].className = 'on'
        })
    }

    // 密码明文/暗文
    var isSwitch = false
    switchButton.addEventListener('touchend', function () {
        if(!isSwitch) {
            switchCircle.style.transform = 'translateX(27px)'
            this.className = 'switch_button on'
            switchText.innerText = 'abc'
        } else {
            switchCircle.style.transform = 'translateX(0)'
            this.className = 'switch_button off'
            switchText.innerText = '...'
        }
        isSwitch = !isSwitch
    })

    // footer tab切换
    for(let i = 0; i < guideItems.length; i++) {
        guideItems[i].addEventListener('touchend', function () {
            for(let i = 0; i < guideItems.length; i++) {
                guideItems[i].className = 'guide_item'
                contentList[i].className = ''
            }
            this.className = 'guide_item on'
            contentList[i].className = 'on'
        })
    }
    // swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
        },
    });
}
